import styled from "styled-components";
import wordT from '../../assets/images/word.svg';
import wordB from '../../assets/images/wordYou.svg';
import logoL from '../../assets/images/logo.svg';
import box from '../../assets/images/lobbyBox.png';
import boxModal from '../../assets/images/introBox.png';
import radio from '../../assets/images/radio-active.png';
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
import { Title } from "../shared/Title";
import { Block } from "../shared/BlockModal";
import { LEVEL_TO_MODAL } from "../../constants/levelModals";
import { Text } from "../shared/Text";
import {getDaysDiffFromNow} from '../../utils/getDaysDiff';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    transition: filter 0.3s;
    background-color: var(--color-accent);
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
    cursor: pointer;
`;

const Metr = styled(BoxImage)`
    top: ${92 / 383 * 100}%;
    left: ${145 / 350 * 100}%;
    width: ${79 / 350 * 100}%;
    height: ${145 / 383 * 100}%;
    z-index: 4;
    cursor: pointer;
    ${({$isUnable}) => $isUnable ? 'filter: grayscale(1); opacity: 0.9' : ''};
`;

const Radio = styled(BoxImage)`
    top: ${94 / 383 * 100}%;
    left: ${241 / 350 * 100}%;
    width: ${45 / 350 * 100}%;
    height: ${123 / 383 * 100}%;
    cursor: pointer;
    ${({$isUnable}) => $isUnable ? 'filter: grayscale(1); opacity: 0.9' : ''};
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
    const {next, user, recordMetrika, levels = []} = useProgress();
    const ratio = useSizeRatio();
    const isRestarted = user.hasRestarted;
    
    const isFirst = levels.length === 0;

    const isAvailableSecond = levels[levels.length - 1] === 'level1' && (isRestarted || (getDaysDiffFromNow(user.lastTime) >= 4));
    const isAvailableThird = levels[levels.length - 1] === 'level2' && (isRestarted || (getDaysDiffFromNow(user.lastTime) >= 4));

    const isEndModalFirst = !isRestarted && levels[levels.length - 1] === 'level1' && (getDaysDiffFromNow(user.lastTime) < 4);
    const isEndModalSecond = !isRestarted && levels[levels.length - 1] === 'level2' && (getDaysDiffFromNow(user.lastTime) < 4);

    const handleClick = (level, canBeClicked) => {
        if (!canBeClicked) return;
        
        setChosen(level);
    }

    const modalChosen = useMemo(() => chosen !== undefined ? LEVEL_TO_MODAL[chosen?.toLowerCase()] : undefined, [chosen]);


    const handleStart = () => {
        let metrika;

        if (chosen.toLowerCase() === 'level1') {
            metrika = 'mapStart'
        }

        if (chosen.toLowerCase() === 'level2') {
            metrika = 'multStart'
        }

        if (chosen.toLowerCase() === 'level3') {
            metrika = 'radioStart'
        }

        recordMetrika(metrika);

        next(chosen);
    }

    const getDaysAmount = () => {
        const days = getDaysDiffFromNow(user.lastTime);

        switch (days) {
            case 3:
                return 'один день';
            case 2: 
                return 'два дня'
            case 1: 
                return 'три дня';
            case 0: 
                return 'четыре дня';
            default:
                return 'четыре дня';
        }
    }

    return (
        <>
        <Wrapper $isModal={chosen !== undefined || isEndModalFirst || isEndModalSecond}>
            <WordTop $ratio={ratio} src={wordT} alt="" />
            <WordBottom $ratio={ratio} src={wordB} alt="" />
            <LogoLeft $ratio={ratio} src={logoL} alt="" />
            <BoxWrapper  $ratio={ratio}>
                <Box $ratio={ratio} src={box} alt="" />
                <Radio src={radio} alt="" $isUnable={!isAvailableThird} onClick={() => handleClick(SCREEN_NAMES.LEVEL3, isAvailableThird)}/>
                <Metr src={metr} alt="" $isUnable={!isAvailableSecond && !isAvailableThird} onClick={() => handleClick(SCREEN_NAMES.LEVEL2, isAvailableSecond)}/>
                <Paper src={paper} alt="" onClick={() => handleClick(SCREEN_NAMES.LEVEL1, isFirst)}/>
                {isFirst && (<Highlighted src={paperHighlighted} alt=""/>)}
                {isAvailableSecond && (<Highlighted src={metrHighlighted} alt=""/>)}
                {isAvailableThird && (<Highlighted src={radioHighlighted} alt=""/>)}
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
        <Modal isOpen={isEndModalFirst || isEndModalSecond}>
            <Block 
                imageProps={{
                    src: boxModal,
                    top: -144,
                    left: 10,
                    width: 238,
                    height: 238,
                    extra: 'transform: rotate(-20deg);'
                }}
                svgSizes={[354, 289]}
                backgroundSvg={
                    <svg width="100%" height="100%" viewBox="0 0 354 289" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.86563 74.6145C11.8675 30.1586 50.6116 -3.27748 95.0284 0.256216L276.169 14.6673C316.438 17.871 348.001 50.5938 349.749 90.9526L353.316 173.285C355.069 213.738 326.319 249.123 286.364 255.689L92.9783 287.469C42.0987 295.83 -3.28659 254.583 0.187186 203.138L8.86563 74.6145Z" fill="white"/>
                    </svg>
                }
            >
                <Title $ratio={ratio}>{
                    isEndModalFirst ? 'Первый день\nстажировки завершён!' : 'Смена окончена,\nсеть в порядке'
                }</Title>
                {
                    isEndModalFirst ? (
                        <Text $shouldBalance>
                            Твои решения уже начали менять мир вокруг, но даже инженерам нужен отдых, чтобы восстановить силы. Приходи <b>через {getDaysAmount()}</b> — впереди новые вызовы, локации и твой шанс забрать крутые призы!
                        </Text>
                    ) : (
                        <Text $shouldBalance>
                            Ты отлично справился с городскими вызовами во второй день.{'\n'}Пора на подзарядку!{'\n\n'}
                            <b>через {getDaysAmount()}</b> откроется финальный уровень — покажи, на что способен, и участвуй в розыгрыше
                        </Text>
                    )
                }
            </Block>
        </Modal>
        </>
        
    )
}