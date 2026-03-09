import styled from "styled-components";
import wordT from '../../assets/images/word.svg';
import wordB from '../../assets/images/wordYou.svg';
import logoL from '../../assets/images/logo.svg';
import info1 from '../../assets/images/endInfo1.svg';
import info2 from '../../assets/images/endInfo2.svg';
import box from '../../assets/images/introBox.png';
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import {NoTransformSpan} from '../shared/NoTransormSpan';
import { Button } from "../shared/Button";
import { useProgress } from "../../contexts/ProgressContext";

const WordTop = styled.img`
    position: absolute;
    top: 6px;
    left: 10px;
    width: ${({$ratio}) => $ratio * 161}px;
    height: ${({$ratio}) => $ratio * 82}px;
    object-fit: contain;
`;

const WordBottom = styled.img`
    position: absolute;
    bottom: 4px;
    right: 8px;
    width: ${({$ratio}) => $ratio * 150}px;
    height: ${({$ratio}) => $ratio * 95}px;
    object-fit: contain;
`;

const LogoLeft = styled.img`
    position: absolute;
    object-fit: contain;
    bottom: 11px;
    left: 6px;
    height: ${({$ratio}) => $ratio * 92}px;
    width: ${({$ratio}) => $ratio * 92}px;
`;

const Box = styled.img`
    position: absolute;
    object-fit: cover;
    right: 0;
    top: 0;
    height: ${({$ratio}) => $ratio * 370}px;
    width: ${({$ratio}) => $ratio * 322}px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size:  ${({$ratio}) => $ratio * 18}px;
    gap: ${({$ratio}) => $ratio * 10}px;
    padding: ${({$ratio}) => $ratio * 13}px ${({$ratio}) => $ratio * 15}px ${({$ratio}) => $ratio * 140}px;

    & button:first-of-type {
        margin-top: ${({$ratio}) => $ratio * 15}px;
    }
`;

const TextBlock = styled.img`
    position: relative;
    z-index: 2;
    margin-top: ${({$ratio}) => $ratio * 184}px;
    padding-left: ${({$ratio}) => $ratio * 7}px;
    height: ${({$ratio}) => $ratio * 158}px;
    width: ${({$ratio}) => $ratio * 227}px;
    object-fit: contain;
`;

export const Final = () => {
    const ratio = useSizeRatio();
    const { restart, points } = useProgress();

    const isFirst = points.first > points.second;

    return (
        <>
            <WordTop $ratio={ratio} src={wordT} alt="" />
            <WordBottom $ratio={ratio} src={wordB} alt="" />
            <LogoLeft $ratio={ratio} src={logoL} alt="" />
            <TextBlock $ratio={ratio} src={isFirst ? info1 : info2} alt="" />
            <Box $ratio={ratio} src={box} alt="" />
            <Content $ratio={ratio}>
                    {isFirst ? (
                        <>
                            <p> В <NoTransformSpan>Билайне</NoTransformSpan> ценят тех, кто не боится предлагать и ошибаться. Хочешь увидеть другие варианты? Попробуй пройти путь ещё раз, принимая другие решения</p>
                            <p>Или сразу заявляй о себе — cлово за тобой</p>
                        </>
                    ) : (
                        <>
                            <p>Ты доказал, что твоё слово и действия имеют силу. В <NoTransformSpan>Билайне</NoTransformSpan> именно такие ребята — инициативные, смелые, с инженерным мышлением — строят будущее связи</p>
                            <p>Готов сделать следующий шаг?</p>
                        </>
                    )}
                <Button onClick={() => {}}>
                   узнать о стажировке в Билайне
                </Button>
                <Button onClick={restart}>
                    играть заново
                </Button>
            </Content>
        </>
    )
}