import styled from "styled-components";
import wordT from '../../assets/images/word.svg';
import wordB from '../../assets/images/wordYou.svg';
import logoL from '../../assets/images/logo.svg';
import logoR from '../../assets/images/logo2.svg';
import box from '../../assets/images/lobbyBox.png';
import radio from '../../assets/images/radio.png';
import metr from '../../assets/images/multimetr.png';
import paper from '../../assets/images/paper.png';
import paperHighlighted from '../../assets/images/paperHighlight.png';
import metrHighlighted from '../../assets/images/metrHighlight.png';
import radioHighlighted from '../../assets/images/radioHighlight.png';
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { useMemo, useState } from "react";
import { SCREEN_NAMES } from "../../constants/screens";
import { useProgress } from "../../contexts/ProgressContext";
import { Modal } from "../shared/Modal";
import {Button} from '../shared/Button';
import {NoTransformSpan} from '../shared/NoTransormSpan';
import { Title } from "../shared/Title";
import { Block } from "../shared/BlockModal";
import { LEVEL_TO_MODAL } from "../../constants/levelModals";
import { Text } from "../shared/Text";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    transition: filter 0.3s;
    ${({$isModal}) => $isModal ? 'filter: blur(5px)' : ''};
`;

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

const BoxWrapper = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: auto;
    width: 100%;
    max-width: ${({$ratio}) => $ratio * 350}px;
`;

const Box = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

const BoxImage = styled.img`
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    object-fit: contain;
    z-index: 3;
`;

const Paper = styled(BoxImage)`
    top: ${ 179 / 383 * 100}%;
    left: ${11.5 / 350 * 100}%;
    height: ${135.2 / 383 * 100}%;
    width: ${201.2 / 350 * 100}%;
`;

const Metr = styled(BoxImage)`
    top: ${92 / 383 * 100}%;
    left: ${145 / 350 * 100}%;
    width: ${79 / 350 * 100}%;
    height: ${145 / 383 * 100}%;
    z-index: 4;
`;

const Radio = styled(BoxImage)`
    top: ${94 / 383 * 100}%;
    left: ${241 / 350 * 100}%;
    width: ${45 / 350 * 100}%;
    height: ${123 / 383 * 100}%;
`;

const Highlighted = styled(BoxImage)`
    z-index: 1;
`;

const ButtonStyled = styled(Button)`
    position: absolute;
    left: 50%;
    bottom: var(--spacing_x4);
    transform: translateX(-50%);
`;

export const Lobby = () => {
    const [chosen, setChosen] = useState();
    const {next, levels = []} = useProgress();
    const ratio = useSizeRatio();
    
    const isFirst = levels.length === 0;
    const isLast = levels.length === 2;
    const isSecond = levels.length === 1;

    const handleClick = (level) => {
        setChosen(level);
    }

    const modalChosen = useMemo(() => chosen !== undefined ? LEVEL_TO_MODAL[chosen?.toLowerCase()] : undefined, [chosen]);


    const handleStart = () => {
        next(chosen);
    }

    return (
        <>
        <Wrapper $isModal={chosen !== undefined}>
            <WordTop $ratio={ratio} src={wordT} alt="" />
            <WordBottom $ratio={ratio} src={wordB} alt="" />
            <LogoLeft $ratio={ratio} src={logoL} alt="" />
            <LogoRight $ratio={ratio} src={logoR} alt="" />
            <BoxWrapper  $ratio={ratio}>
                <Box $ratio={ratio} src={box} alt="" />
                <Radio src={radio} alt="" onClick={() => handleClick(SCREEN_NAMES.LEVEL3)}/>
                <Metr src={metr} alt="" onClick={() => handleClick(SCREEN_NAMES.LEVEL2)}/>
                <Paper src={paper} alt="" onClick={() => handleClick(SCREEN_NAMES.LEVEL1)}/>
                {isFirst && (<Highlighted src={paperHighlighted} alt=""/>)}
                {isSecond && (<Highlighted src={metrHighlighted} alt=""/>)}
                {isLast && (<Highlighted src={radioHighlighted} alt=""/>)}
            </BoxWrapper>
        </Wrapper>
        <Modal isOpen={chosen !== undefined}>
            <Block backImageProps={modalChosen?.backImageProps} imageProps={modalChosen?.imageProps}>
                    <Title $ratio={ratio}>{modalChosen?.title}</Title>
                    <Text $shouldBalance={modalChosen?.shouldBalance}>{modalChosen?.text}</Text>
                    <ButtonStyled onClick={handleStart} $marginBottom={(modalChosen?.bottom ?? 0)* ratio}>
                        играть!
                    </ButtonStyled>
            </Block>
        </Modal>
        </>
        
    )
}