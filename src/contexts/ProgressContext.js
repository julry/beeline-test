import { FTClient } from 'ft-client';
import bridge from '@vkontakte/vk-bridge';
import {createContext, useContext, useEffect, useRef, useState} from 'react';
import {screens} from "../constants/screens";
import { SCREEN_NAMES } from '../constants/screens';
import {getUrlParam} from '../utils/getUrlParam';

const INITIAL_STATE = {
    screen: SCREEN_NAMES.INTRO,
    levels: [],
    user: {
        metrika: {
            gameStart: false,
            mapStart: false,
            mapFinish: false,
            multStart: false,
            multFinish: false,
            radioStart: false,
            radioFinish: false,
            prize: false,
        },
    },
    points: {first: 0, second: 0},
}

const ProgressContext = createContext(INITIAL_STATE);

export function ProgressProvider(props) {
    const {children} = props;
    const [currentScreen, setCurrentScreen] = useState(getUrlParam('screen') || INITIAL_STATE.screen);
    const [levels, setLevels] = useState(INITIAL_STATE.levels);
    const [points, setPoints] = useState(INITIAL_STATE.points); 
    const [user, setUser] = useState(INITIAL_STATE.user);
    const screen = screens[currentScreen];

    const client = useRef();
    const recordId = useRef();

    const getUserInfo = async () => {
        const info = await bridge.send('VKWebAppGetUserInfo');
        initState(info.id);
        // initState(22823013);
    };


    useEffect(() => {
        client.current = new FTClient(
            'https://games-admin.fut.ru/api/',
            'vk-RPP'
        );

        getUserInfo();
    }, []);

    async function initState(vkId) {
        const record = await client.current.findRecord('vkId', vkId ?? 22823013);

        recordId.current = record?.id;

        if (!record?.data) {
            return;
        }

        const gameData = record.data.BeelineGame ?? {};

        const {levels: gameLevels, points: gamePoints, ...gameUser} = gameData;

        setLevels(gameLevels ?? INITIAL_STATE.levels);
        setPoints(gamePoints ?? INITIAL_STATE.points);
        setUser(prev => ({...prev, ...(gameUser ?? {})}));

        if (gameLevels && gameLevels?.length > 0) {
            setCurrentScreen(gameLevels.includes('level3') ? SCREEN_NAMES.FINAL : SCREEN_NAMES.LOBBY);
        }
    }

    const patchData = async (changed) => {
        if (!recordId.current) return;
        
        try {
            const result = await client.current.patchRecord(recordId.current, {BeelineGame: {levels, points, ...user, ...changed}});
            return result;
        } catch (e) {
            console.log(e);

            return { isError: true };
        }
    }

    function next(nextScreen) {
        setCurrentScreen(nextScreen ?? SCREEN_NAMES.LOBBY);
    }

    function endGame({level, metrika, answers = {}}) {
        const levelPoints = {...points};
        Object.entries(answers).forEach(([name, points]) => levelPoints[name] = ((levelPoints[name] ?? 0) + (points ?? 1)));
        setPoints(levelPoints);
        setLevels(prev => [...prev, level]);
        const path = {...user.metrika};

        if (metrika !== undefined) {
            path[metrika] = true;
        }

        const now = new Date();

        now.setHours(0,0,0,0);

        setUser(prev => ({...prev, metrika: path, lastTime: +(now)}))
        patchData({points: levelPoints, levels: [...levels, level], lastTime: +(now), metrika: path});
    }

    function restart() {
        setCurrentScreen(INITIAL_STATE.screen);
        setLevels(INITIAL_STATE.levels);
        setPoints(INITIAL_STATE.points);
        setUser(prev => ({...prev, hasRestarted: true}));

        patchData({levels: INITIAL_STATE.levels, points: INITIAL_STATE.points, hasRestarted: true});
    }

    function recordMetrika(index, additional = {}) {
        const path = {...user.metrika};
        path[index] = true;
        setUser(prev => ({...prev, metrika: path, ...additional}))
        patchData({metrika: path, ...additional});
    }

    const state = {
        screen,
        currentScreen,
        next,
        endGame,
        levels,
        restart,
        user,
        points,
        recordMetrika
    }

    return (
        <ProgressContext.Provider value={state}>
            {children}
        </ProgressContext.Provider>
    )
}

export function useProgress() {
    return useContext(ProgressContext)
}
