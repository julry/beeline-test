import lvl2Bg from "../../../assets/images/fullLevel2.png";
import building from "../../../assets/images/building.png";
import wires from "../../../assets/images/wires.png";
import box from "../../../assets/images/box.png";
import buildingNew from "../../../assets/images/building-new.png";
import wiresNew from "../../../assets/images/wires-new.png";
import boxNew from "../../../assets/images/box-new.png";
import { useRef } from "react";
import { Subjects } from "./Subjects";
import { GameScreen } from "../../shared/GameScreen";
import { useProgress } from "../../../contexts/ProgressContext";


export const Level2 = () => {
    const {next} = useProgress();
    
    const imageRef = useRef();
    const wrapperRef = useRef();

    const getParts = () => {
        const availableLeft = imageRef?.current.offsetWidth - wrapperRef.current.offsetWidth;

        return {movements: [availableLeft], availableLeft};
    }


    const subjects = [
        {
            id: 'box',
            src: box,
            shouldRender: (answers) => answers.find(answer => answer.name === 'box') 
        },
        {
            id: 'boxN',
            src: boxNew,
            shouldRender: (answers) => !answers.find(answer => answer.name === 'box') 
        },
        {
            id: 'wires',
            src: wires,
            shouldRender: (answers) => answers.find(answer => answer.name === 'wires' && answer.answer === 2) 
        },
        {
            id: 'wiresN',
            src: wiresNew,
            shouldRender: (answers) => !answers.find(answer => answer.name === 'wires') 
        },
        {
            id: 'building',
            src: building,
            shouldRender: (answers) => answers.find(answer => answer.name === 'building') 
        },
        {
            id: 'buildingN',
            src: buildingNew,
            shouldRender: (answers) => !answers.find(answer => answer.name === 'building') 
        },
    ];

    return (
        <GameScreen 
            subjects={subjects}
            SubjectComponent={Subjects}
            lvlBg={lvl2Bg}
            getParts={getParts}
            imageRef={imageRef}
            wrapperRef={wrapperRef}
            lvlId='level2'
            handleNext={() => next()}
            metrika="multFinish"
        />
    )
}