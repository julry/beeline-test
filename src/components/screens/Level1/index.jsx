import lvl1Bg from "../../../assets/images/fullLevel1.png";
import desk from "../../../assets/images/deskLevel1.png";
import man from "../../../assets/images/manLevel1.png";
import map from "../../../assets/images/mapLevel1.png";
import manThink1 from "../../../assets/images/officeManThink1.svg";
import manThink2 from "../../../assets/images/officeManThink2.svg";
import girlThink from "../../../assets/images/officeGirlThink.svg";
import { useRef } from "react";
import { Subjects } from "./Subjects";
import { GameScreen } from "../../shared/GameScreen";
import { useProgress } from "../../../contexts/ProgressContext";


export const Level1 = () => {
    const {next} = useProgress();
    
    const imageRef = useRef();
    const wrapperRef = useRef();

    const getParts = () => {
        const k = wrapperRef.current.offsetHeight / wrapperRef.current.offsetWidth;
        const k1 = 677 / 375;
        const firstPart = 225 * k / k1 * wrapperRef.current.offsetHeight / 677;
        const availableLeft = imageRef?.current.offsetWidth - wrapperRef.current.offsetWidth;

        return {movements: [firstPart, availableLeft - firstPart], availableLeft};
    }


    const subjects = [
        {
            id: 'desk',
            src: desk,
            shouldRender: (answers) => answers.find(answer => answer.name === 'desk') 
        },
        {
            id: 'man',
            src: man,
            shouldRender: (answers) => answers.find(answer => answer.name === 'man' && answer.answer === 2) 
        },
        {
            id: 'map',
            src: map,
            shouldRender: (answers) => answers.find(answer => answer.name === 'map') 
        },
        {
            id: 'manT',
            src: manThink1,
            shouldRender: (answers) => !answers.find(answer => answer.name === 'man') 
        },
        {
            id: 'manT2',
            src: manThink2,
            shouldRender: (answers) => answers.find(answer => answer.name === 'man' && answer.answer === 2) 
        },
        {
            id: 'girlT',
            src: girlThink,
            shouldRender: (answers) => answers.find(answer => answer.name === 'desk') 
        },
    ];

    return (
        <GameScreen 
            subjects={subjects}
            SubjectComponent={Subjects}
            lvlBg={lvl1Bg}
            getParts={getParts}
            imageRef={imageRef}
            wrapperRef={wrapperRef}
            lvlId='level1'
            handleNext={() => next()}
        />
    )
}