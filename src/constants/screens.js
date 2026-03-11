import { Intro } from "../components/screens/Intro"
import { Lobby } from "../components/screens/Lobby"
import {Level1} from '../components/screens/Level1';
import { Final } from "../components/screens/Final";
import { Level2 } from "../components/screens/Level2";
import { Level3 } from "../components/screens/Level3";

export const SCREEN_NAMES = {
    INTRO: 'Intro',
    LOBBY: 'Lobby',
    LEVEL1: 'Level1',
    LEVEL2: 'Level2',
    LEVEL3: 'Level3',
    FINAL: 'Final',
}

export const screens = {
    [SCREEN_NAMES.INTRO]: Intro,
    [SCREEN_NAMES.LOBBY]: Lobby,
    [SCREEN_NAMES.LEVEL1]: Level1,
    [SCREEN_NAMES.LEVEL2]: Level2,
    [SCREEN_NAMES.LEVEL3]: Level3,
    [SCREEN_NAMES.FINAL]: Final,
}
