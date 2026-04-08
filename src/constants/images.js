import mapSm from '../assets/images/mapSm.png';
import manSm from '../assets/images/manSm.png';
import deskSm from '../assets/images/deskSm.png';
import mapNew from '../assets/images/map-new.png';
import manNew from '../assets/images/man-new.png';
import deskNew from '../assets/images/desk-new.png';
import map from '../assets/images/mapLevel1.png';
import man from '../assets/images/manLevel1.png';
import desk from '../assets/images/deskLevel1.png';
import fullLevel1 from '../assets/images/fullLevel1.png';

import boxSm from '../assets/images/boxSm.png';
import buildingSm from '../assets/images/buildingSm.png';
import wiresSm from '../assets/images/wiresSm.png';
import box from '../assets/images/box.png';
import building from '../assets/images/building.png';
import wires from '../assets/images/wires.png';
import boxNew from '../assets/images/box-new.png';
import buildingNew from '../assets/images/building-new.png';
import wiresNew from '../assets/images/wires-new.png';
import fullLevel2 from '../assets/images/fullLevel2.png';

import level31 from '../assets/images/level31.png';
import level32 from '../assets/images/level32.png';
import level33 from '../assets/images/level33.png';
import fullLevel3 from '../assets/images/fullLevel3.png';
import doneLevel3 from '../assets/images/doneLevel3.png';

export const preloadImagesLvl1 = [man, map, desk, manSm, mapSm, deskSm, manNew, mapNew, deskNew, fullLevel1];
export const preloadImagesLvl2 = [building, box, wires, buildingSm, boxSm, wiresSm,  buildingNew, boxNew, wiresNew, fullLevel2];
export const preloadImagesLvl3 = [level31, level32, level33, fullLevel3, doneLevel3];

export const preloadImagesAll = [
    ...preloadImagesLvl1, ...preloadImagesLvl2, ...preloadImagesLvl3
];