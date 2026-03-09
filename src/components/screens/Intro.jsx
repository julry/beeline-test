import styled from "styled-components";
import wordT from '../../assets/images/word.svg';
import wordB from '../../assets/images/wordYou.svg';
import logoL from '../../assets/images/logo.svg';
import logoR from '../../assets/images/logo2.svg';
import info from '../../assets/images/infoIntro.svg';
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

const LogoRight = styled.img`
    position: absolute;
    object-fit: contain;
    bottom: ${({$ratio}) => $ratio * 75}px;
    left: ${({$ratio}) => $ratio * 152}px;
    height: ${({$ratio}) => $ratio * 38}px;
    width: ${({$ratio}) => $ratio * 38}px;
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
    padding: ${({$ratio}) => $ratio * 24}px ${({$ratio}) => $ratio * 5}px ${({$ratio}) => $ratio * 140}px;

    & button {
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

export const Intro = () => {
    const ratio = useSizeRatio();
    const { next } = useProgress();

    return (
        <>
            <WordTop $ratio={ratio} src={wordT} alt="" />
            <WordBottom $ratio={ratio} src={wordB} alt="" />
            <LogoLeft $ratio={ratio} src={logoL} alt="" />
            <LogoRight $ratio={ratio} src={logoR} alt="" />
            <TextBlock $ratio={ratio} src={info} alt="" />
            <Box $ratio={ratio} src={box} alt="" />
            <Content $ratio={ratio}>
                <p>
                    В <NoTransformSpan>Билайн</NoTransformSpan> верят, что настоящие
                    перемены начинаются с инициативы
                </p>
                <p>
                    Проявляй смелость, помогай коллегам
                    и предлагай решения, Посмотри, как твоё
                    слово оживляет и изменяет мир вокруг!
                </p>
                <Button onClick={() => next()}>
                    начать стажировку
                </Button>
            </Content>
        </>
    )
}