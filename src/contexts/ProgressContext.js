import { FTClient } from 'ft-client';
import {createContext, useContext, useEffect, useRef, useState} from 'react';
import {screens} from "../constants/screens";
import { SCREEN_NAMES } from '../constants/screens';
import {getUrlParam} from '../utils/getUrlParam';
import { uid } from 'uid';

const INITIAL_STATE = {
    screen: SCREEN_NAMES.INTRO,
    levels: [],
    user: {
        email: '',
        metrika: {
            gameStart: false,
            mapStart: false,
            mapFinish: false,
            multStart: false,
            multFinish: false,
            radioStart: false,
            radioFinish: false,
            bot_final: false,
            prize: false,
            bot_prize: false,
        },
    },
}

const ProgressContext = createContext(INITIAL_STATE);

export function ProgressProvider(props) {
    const {children} = props;
    const [currentScreen, setCurrentScreen] = useState(getUrlParam('screen') || INITIAL_STATE.screen);
    const [levels, setLevels] = useState(INITIAL_STATE.levels);
    const [user, setUser] = useState(INITIAL_STATE.user);
    const screen = screens[currentScreen];

    const client = useRef();
    const recordId = useRef('87f921e5-4b96-436c-9439-a5412a15d60a');
    const hasEmail = useRef(false);

    useEffect(() => {
        hasEmail.current = localStorage.getItem('itisuptoyou_email') === 'send';

        client.current = new FTClient(
            'https://games-admin.fut.ru/api/',
            'itisuptoyou'
        );
    }, []);

    const createUser = async () => {
        if (hasEmail.current) {
            return;
        }

        const metrika = {...user.metrika, gameStart: true};
        const id = uid();
        setUser(prev => ({...prev, metrika, id}));

        const result = await client.current.createRecord({...user, id, metrika});
        recordId.current = result.id;
    }

    const patchData = async (changed) => {
        if (!recordId.current) return;
        
        try {
            const result = await client.current.patchRecord(recordId.current, {...user, ...changed});
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
        setLevels(prev => [...prev, level]);
        const path = {...user.metrika};

        if (metrika !== undefined) {
            path[metrika] = true;
        }

        const now = new Date();

        now.setHours(0,0,0,0);

        setUser(prev => ({...prev, metrika: path}))
        patchData({metrika: path});
    }

    function sendEmail({email, isAdsAgreed}) {
        setUser(prev => ({...prev, email, isAdsAgreed, metrika: {...prev.metrika, prize: true}}));
        localStorage.setItem('itisuptoyou_email', 'send');
        patchData({...user, email, isAdsAgreed, metrika: {...user.metrika, prize: true}});
    }

    function restart() {
        setCurrentScreen(INITIAL_STATE.screen);
        setLevels(INITIAL_STATE.levels);
    }

    function recordMetrika(index, additional = {}) {
        if (hasEmail.current) {
            return;
        }

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
        recordMetrika,
        createUser,
        hasEmail: hasEmail.current,
        sendEmail,
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
