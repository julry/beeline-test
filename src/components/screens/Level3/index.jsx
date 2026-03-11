import { useCallback, useMemo, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import lvlBg from '../../../assets/images/fullLevel3.png';
import lvlBgDone from '../../../assets/images/doneLevel3.png';
import { useSizeRatio } from "../../../contexts/SizeRatioContext";
import { questions } from "../../../constants/questions";
import { LEVEL_TO_MODAL } from "../../../constants/levelModals";
import { useProgress } from "../../../contexts/ProgressContext";
import { SCREEN_NAMES } from "../../../constants/screens";
import { Subjects } from "./Subjects";
import { Block } from "../../shared/BlockModal";
import { Modal } from "../../shared/Modal";
import { Button } from "../../shared/Button";
import { Title } from "../../shared/Title";
import { Text } from "../../shared/Text";
import { useTimer } from "./useTimer";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    transition: filter 0.3s, transform 0.3s;
    ${({ $isModal }) => $isModal ? 'filter: blur(5px); transform: scale(1.04);' : ''};
    background-color: #000000;

    & svg {
        position: relative;
        z-index: 4;
    }
`;

const Image = styled(motion.img)`
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 0% 0%;
    z-index: 2;
`;

const BlockStyled = styled(Block)`
    padding: ${({ $padding, $ratio }) => $padding[0] * $ratio}px ${({ $padding, $ratio }) => $padding[1] * $ratio}px ${({ $padding, $ratio }) => $padding[2] * $ratio}px ${({ $padding, $ratio }) => $padding[3] * $ratio}px;
`;

const AnswerBlock = styled.ol`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: var(--spacing_x5);
    padding-left: calc(var(--spacing_x2) + var(--spacing_x5));
    padding-right: var(--spacing_x2);
    padding-bottom: var(--spacing_x5);
`;

const AnswerSvg = styled.div`
    position: absolute;
    top: 0;
    left: calc(-1 * (var(--spacing_x5) + var(--spacing_x1) + ${({ $left }) => $left ?? '0px'}));
    width: calc(100% + var(--spacing_x5) + var(--spacing_x2));
    height: 100%;
    z-index: -1;
`;

const Answer = styled.li`
    position: relative;
    width: 100%;
    text-align: left;
    font-weight: 500;
    padding: ${({ $padding }) => $padding ?? 'var(--spacing_x3) 0 var(--spacing_x4)'};
    border-radius: 100px;
    font-size: var(--font-size_md);
    cursor: pointer;
    
    &::marker {
        margin-left: var(--spacing_x4);
    }

    & svg path{
        ${({ $isActive }) => $isActive ? 'fill: var(--color-accent); stroke: var(--color-accent);' : ''};
    }
`;

const AfterText = styled(motion.p)`
    padding: 0 var(--spacing_x2) var(--spacing_x5);
    transform-origin: 0% 0%;
    padding-left: 0;
    ${({$afterTextStyle}) => $afterTextStyle};
`;

const LongSvg = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: ${({$sizes, $ratio}) => $ratio * $sizes[0]}px;
    height: ${({$sizes, $ratio}) => $ratio * $sizes[1]}px;
    transform-origin: 0% 15%;
`;

const ModalStyled = styled(Modal)`
    padding-top: ${({$marginTop}) => $marginTop ?? 0}vh;

    @supports (padding-top: 10svh) {
         padding-top: ${({$marginTop}) => $marginTop ?? 0}svh;
    }
`;

const TimerWrapper = styled(motion.div)`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: ${({$ratio}) => $ratio * 118}px;
    height: ${({$ratio}) => $ratio * 48}px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-accent);
    top: calc(${({$top}) => $top}px - 1.5 * var(--spacing_x5));

    & p {
        font-weight: 900;
    }
`;

const EndButtonStyled = styled(Button)`
    position: absolute;
    left: 50%;
    bottom: ${({$bottom}) => $bottom ?? 'var(--spacing_x3)'};
    transform: translateX(-50%);
`;

export const Level3 = () => {
    const ratio = useSizeRatio();
    const {endGame, next} = useProgress();
    const [isGameStarted, setIsGameStarted] = useState(false);
    const [chosen, setChosen] = useState(0);
    const [isDone, setIsDone] = useState(false);
    const [isLose, setIsLose] = useState(false);
    const [isFinishModal, setIsFinishModal] = useState(false);
    const [answerPoints, setAnswerPoints] = useState([]);
    const [answered, setAnswered] = useState();
    const lvlQuestions = questions.level3;

    const handleNextQuestion = useCallback(() => {
        if (chosen === lvlQuestions.length - 1) {
            setIsFinishModal(true);
            setIsDone(true);
            setChosen();

            return;
        }

        setChosen(prev => prev + 1);
        setAnswered();
        restart();
        // eslint-disable-next-line 
    }, [chosen]);


    const timeFinished = useCallback(() => {
        if (answered) {
            handleNextQuestion();

            return;
        } 

        setIsLose(true);
        setIsFinishModal(true);
        setChosen();
    }, [answered, handleNextQuestion]);

    const {formatted, start, reset, restart} = useTimer(10, timeFinished);

    const handleClick = () => {
        setIsGameStarted(true);
        setTimeout(start, 300);
    }

    const questionModal = useMemo(() => lvlQuestions[chosen], [chosen, lvlQuestions]);

    const handleAnswer = (answer, answerIndex) => {
        if (answered) return;
        setAnswered(answer.id);
        setAnswerPoints(prev => [...prev, answerIndex]);
    }

    const handleEndGame = () => {
        if (isLose) {
            setIsFinishModal(false);
            setIsLose(false);
            setIsGameStarted(false);
            setChosen(0);
            setAnswered();
            reset();

            return;
        };

        const second = answerPoints.filter((answer) => answer === 2).length;
        const first = answerPoints.length - second;
        endGame({level: 'level3', answers: {first, second}});

        next(SCREEN_NAMES.FINAL);
    };

    const endModal = useMemo(() => LEVEL_TO_MODAL.level3, []);

    return (
        <>
            <Wrapper $isModal={isGameStarted}>
                <Image src={isDone ? lvlBgDone : lvlBg} alt="" />
                <Subjects onClick={handleClick} />
            </Wrapper>
            <ModalStyled
                isOpen={chosen !== undefined && isGameStarted}
                isCentered={false}
                key={chosen}
                $marginTop={questionModal?.marginTop}
            >
                <BlockStyled
                    $ratio={ratio}
                    $padding={questionModal?.padding ?? []}
                    backgroundSvg={questionModal?.backgroundSvg}
                    imageProps={questionModal?.imageProps}
                    backImageProps={questionModal?.backImageProps}
                    animateBack={answered !== undefined ? {opacity: 0} : {}}
                    transitionBack={{duration: 0.4, delay: 0.2}}
                    svgSizes={questionModal?.svgSizes?.backgroundSvg}
                >
                    <Title>{questionModal?.title}</Title>
                    <AnswerBlock>
                        {questionModal?.answers?.map((answer, index) => (
                            <Answer key={answer.id} $isActive={answered === answer.id} $padding={answer?.padding} onClick={() => handleAnswer(answer, index + 1)}>
                                {answer.text}
                                <AnswerSvg $top={answer.top} $left={answer.left}>
                                    {answer.svg}
                                </AnswerSvg>
                            </Answer>
                        ))}
                    </AnswerBlock>
                    <TimerWrapper 
                        initial={{x: '-50%'}} 
                        animate={answered ? {y: (questionModal?.svgSizes?.backgroundSvgBig[1] - questionModal?.svgSizes?.backgroundSvg[1]) * ratio} : {}} 
                        $top={(questionModal?.svgSizes?.backgroundSvg[1] ?? 0) * ratio} $ratio={ratio}
                        transition={{duration: 0.3}}
                    > 
                        <p>{formatted}</p>
                    </TimerWrapper>
                    {
                        answered !== undefined && (
                            <>
                                <AfterText $afterTextStyle={questionModal?.answers?.find((answer) => answer.id === answered).afterTextStyle} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.3, delay: 0.1 }}>
                                    {questionModal?.answers?.find((answer) => answer.id === answered).afterText}
                                </AfterText>
                                <LongSvg $ratio={ratio} $sizes={questionModal?.svgSizes.backgroundSvgBig} initial={{ opacity: 0, scaleY: 0 }} animate={{ opacity: 1, scaleY: 1 }} transition={{opacity: {duration: 0.4}, scaleY: { duration: 0.25 }}}>
                                    {questionModal?.backgroundSvgBig ?? (
                                        <svg width={354 * ratio} height={446 * ratio} viewBox="0 0 354 446" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                            <path d="M10.5159 67.6082C11.8922 27.442 46.7308 -3.31982 86.7583 0.287714L283.332 18.0042C318.722 21.1939 346.108 50.3939 347.025 85.9164L353.545 338.661C354.447 373.599 329.44 403.848 294.957 409.534L81.3899 444.749C37.7975 451.937 -1.4705 417.44 0.0424018 373.285L10.5159 67.6082Z" fill="white" />
                                        </svg>
                                    )}
                                </LongSvg>
                            </>
                        )
                    }
                </BlockStyled>
            </ModalStyled>
            <Modal isOpen={isFinishModal}>
                <Block 
                    backImageProps={endModal?.backImageProps} 
                    imageProps={endModal?.imageProps} 
                    svgSizes={isLose ? endModal?.endModalSize : endModal?.endModalSizeLose} 
                    backgroundSvg={isLose ? endModal?.endModalSvgLose : endModal?.endModalSvg}
                >
                    <Title>{isLose ? endModal?.endTitleLose : endModal?.endTitle}</Title>
                    <Text>{isLose ? endModal?.endTextLose : endModal?.endText}</Text>
                    <EndButtonStyled onClick={handleEndGame} $bottom={isLose ? endModal?.endButtonBottomLose : endModal?.endButtonBottom}>
                        {isLose ? endModal?.endButtonTextLose : endModal?.endButtonText}
                    </EndButtonStyled>
                </Block>
            </Modal>
        </>
    )
}