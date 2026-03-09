// import { FTClient } from 'ft-client';
import {createContext, useContext, useEffect, useRef, useState} from 'react'
import {screens} from "../constants/screens";
import { SCREEN_NAMES } from '../constants/screens';
import {getUrlParam} from '../utils/getUrlParam';

const INITIAL_STATE = {
    screen: SCREEN_NAMES.INTRO,
    levels: [],
    points: {first: 0, second: 0},
}

const ProgressContext = createContext(INITIAL_STATE);

export function ProgressProvider(props) {
    const {children} = props;
    const [currentScreen, setCurrentScreen] = useState(getUrlParam('screen') || INITIAL_STATE.screen);
    const [levels, setLevels] = useState(INITIAL_STATE.levels);
    const [points, setPoints] = useState(INITIAL_STATE.points); 
    const screen = screens[currentScreen];

    const client = useRef();

    useEffect(() => {
        // client.current = new FTClient(
        //     'https://games-admin.fut.ru/api/',
        //     'tree-of-love'
        // );
    }, []);

    function next(nextScreen) {
        setCurrentScreen(nextScreen ?? SCREEN_NAMES.LOBBY);
    }

    function endGame({level, answers = {}}) {
        const levelPoints = {...points};
        Object.entries(answers).forEach(([name, points]) => levelPoints[name] = ((levelPoints[name] ?? 0) + (points ?? 1)));
        setPoints(levelPoints);
        setLevels(prev => [...prev, level]);
    }

    function restart() {
        setCurrentScreen(INITIAL_STATE.screen);
        setLevels(INITIAL_STATE.levels);
        setPoints(INITIAL_STATE.points);
    }

    const state = {
        screen,
        currentScreen,
        next,
        endGame,
        levels,
        restart,
        points
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
