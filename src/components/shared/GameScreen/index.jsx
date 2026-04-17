import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useSizeRatio } from "../../../contexts/SizeRatioContext";
import { Modal } from '../Modal';
import { questions } from "../../../constants/questions";
import { Block } from "../BlockModal";
import { Title } from "../Title";
import { Button } from "../Button";
import { LEVEL_TO_MODAL } from "../../../constants/levelModals";
import { Text } from "../Text";
import { useProgress } from "../../../contexts/ProgressContext";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    transition: filter 0.3s, transform 0.3s;
    ${({ $isModal }) => $isModal ? 'filter: blur(5px); transform: scale(1.04);' : ''};
`;

const Image = styled(motion.img)`
    position: absolute;
    height: 100%;
    width: auto;
    object-fit: contain;
    z-index: 2;
`;

const ButtonsWrapper = styled(motion.div)`
    position: absolute;
    z-index: 100;
    bottom: 0;
    right: 0;
    padding: var(--spacing_x4);
    display: flex;
`;

const ArrowButton = styled.button`
    border-radius: 50px;
    background-color: var(--color-accent);
    padding: ${({ $ratio }) => $ratio * 13}px ${({ $ratio }) => $ratio * 24}px ${({ $ratio }) => $ratio * 11}px;

    & svg {
        width: ${({ $ratio }) => $ratio * 34}px;
        height: ${({ $ratio }) => $ratio * 23}px;
    }
`;


const ArrowButtonL = styled(ArrowButton)`
    border-radius: 50px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    padding-right: var(--spacing_x1);
`;

const ArrowButtonR = styled(ArrowButton)`
    border-radius: 50px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    padding-left: var(--spacing_x1);
`;

const SubjectsWrapper = styled(motion.div)`
    position: absolute;
    inset: 0;
    width: max(${({ $width }) => $width}px, 100%);

    & svg {
        position: relative;
        z-index: 4;

        & rect {
            cursor: pointer;
        }
    }
`;

const ImageSubject = styled.img`
    height: 100%;
    width: auto;
    object-fit: contain;
    position: absolute;
    inset: 0;
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

    @media screen and (min-width: 450px){
        padding-top: min(${({$marginTop}) => ($marginTop ?? 0) / 100 * 677}px, ${({$marginTop}) => $marginTop ?? 0}svh);
    }
`;

const NextButtonWrapper = styled(motion.div)`
    position: absolute;
    right: var(--spacing_x5);
    bottom: calc(2 * var(--spacing_x5));
`;

const EndButtonStyled = styled(Button)`
    position: absolute;
    left: 50%;
    bottom: ${({$bottom}) => $bottom ?? 'var(--spacing_x3)'};
    transform: translateX(-50%);
`;

export const GameScreen = (
    {
        getParts,
        subjects,
        SubjectComponent,
        lvlBg,
        imageRef,
        wrapperRef,
        lvlId,
        handleNext,
        metrika
    }
) => {
    const ratio = useSizeRatio();
    const {endGame} = useProgress();
    const [chosen, setChosen] = useState();
    const [answeredSubjects, setAnsweredSubjects] = useState([]);
    const [isFinishModal, setIsFinishModal] = useState(false);
    const [answered, setAnswered] = useState();
    const [imageX, setImageX] = useState(0);
    const [part, setPart] = useState(0);
    const lvlQuestions = questions[lvlId];

    const handleClickLeft = () => {
        const { movements } = getParts();

        const leftMovement = [0].concat(movements);

        setPart(prev => Math.max(0, prev - 1));
        setImageX(prev => Math.min(0, prev + leftMovement[part]));
    };


    const handleClickRight = () => {
        const { movements, availableLeft } = getParts();

        if (part === movements.length) { 
            return;
        }

        setPart(prev => Math.min(movements.length, prev + 1));
        setImageX(prev => Math.max(-availableLeft, prev - movements[part]));
    };

    const handleClick = (id) => {
        if (answeredSubjects.find(subject => subject.name === id)) return;
        setChosen(id);
    }

    const questionModal = useMemo(() => lvlQuestions?.find(({ id }) => id === chosen), [chosen, lvlQuestions]);

    const handleAnswer = (answer, answerIndex) => {
        if (answered) return;
        setAnsweredSubjects(prev => [...prev, {name: chosen, answer: answerIndex}]);
        setAnswered(answer.id);
    }

    const handleNextQuestion = () => {
        setChosen();
        setAnswered();
        
        if (answeredSubjects.length === lvlQuestions.length) {
            setIsFinishModal(true);
        }
    }

    const handleEndGame = () => {
        endGame({level: lvlId, metrika});

        handleNext();
    };

    const endModal = useMemo(() => LEVEL_TO_MODAL[lvlId], [lvlId]);

    return (
        <>
            <Wrapper ref={wrapperRef} $isModal={chosen !== undefined || isFinishModal}>
                <SubjectsWrapper $width={imageRef?.current?.offsetWidth} animate={{ x: imageX }} transition={{ duration: 1 }}>
                    <Image ref={imageRef} src={lvlBg} alt="" />
                    <SubjectComponent onClick={handleClick} />
                    {subjects.map((subject) => subject.shouldRender(answeredSubjects) && (
                        <ImageSubject key={subject.id} src={subject.src} alt="" />
                    ))}
                </SubjectsWrapper>
                <ButtonsWrapper>
                    <ArrowButtonL $ratio={ratio} onClick={handleClickLeft}>
                        <svg width="34" height="23" viewBox="0 0 34 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.43934 9.98524C-0.146447 10.571 -0.146447 11.5208 0.43934 12.1066L9.98528 21.6525C10.5711 22.2383 11.5208 22.2383 12.1066 21.6525C12.6924 21.0667 12.6924 20.117 12.1066 19.5312L3.62132 11.0459L12.1066 2.56062C12.6924 1.97483 12.6924 1.02508 12.1066 0.439297C11.5208 -0.14649 10.5711 -0.14649 9.98528 0.439297L0.43934 9.98524ZM31.75 12.5459C32.5784 12.5459 33.25 11.8743 33.25 11.0459C33.25 10.2175 32.5784 9.5459 31.75 9.5459V11.0459V12.5459ZM1.5 11.0459V12.5459H31.75V11.0459V9.5459H1.5V11.0459Z" fill="black" />
                        </svg>
                    </ArrowButtonL>
                    <ArrowButtonR $ratio={ratio} onClick={handleClickRight}>
                        <svg width="34" height="23" viewBox="0 0 34 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 9.5459C0.671573 9.5459 0 10.2175 0 11.0459C0 11.8743 0.671573 12.5459 1.5 12.5459V11.0459V9.5459ZM32.8107 12.1066C33.3964 11.5208 33.3964 10.571 32.8107 9.98524L23.2647 0.439297C22.6789 -0.14649 21.7292 -0.14649 21.1434 0.439297C20.5576 1.02508 20.5576 1.97483 21.1434 2.56062L29.6287 11.0459L21.1434 19.5312C20.5576 20.117 20.5576 21.0667 21.1434 21.6525C21.7292 22.2383 22.6789 22.2383 23.2647 21.6525L32.8107 12.1066ZM1.5 11.0459V12.5459H31.75V11.0459V9.5459H1.5V11.0459Z" fill="black" />
                        </svg>
                    </ArrowButtonR>
                </ButtonsWrapper>
            </Wrapper>
            <ModalStyled
                isOpen={chosen !== undefined && questionModal}
                isCentered={false}
                $marginTop={questionModal?.marginTop}
            >
                <BlockStyled
                    $ratio={ratio}
                    $padding={questionModal?.padding ?? []}
                    backgroundSvg={questionModal?.backgroundSvg}
                    imageProps={questionModal?.imageProps}
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
                    {
                        answered !== undefined && (
                            <>
                                <AfterText initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.3, delay: 0.1 }}>
                                    {questionModal?.answers?.find((answer) => answer.id === answered).afterText}
                                </AfterText>
                                <LongSvg $ratio={ratio} $sizes={questionModal?.svgSizes.backgroundSvgBig} initial={{ opacity: 0, scaleY: 0 }} animate={{ opacity: 1, scaleY: 1 }} transition={{opacity: {duration: 0.4}, scaleY: { duration: 0.25 }}}>
                                    {questionModal?.backgroundSvgBig ?? (
                                        <svg width={354 * ratio} height={446 * ratio} viewBox="0 0 354 446" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                            <path d="M10.5159 67.6082C11.8922 27.442 46.7308 -3.31982 86.7583 0.287714L283.332 18.0042C318.722 21.1939 346.108 50.3939 347.025 85.9164L353.545 338.661C354.447 373.599 329.44 403.848 294.957 409.534L81.3899 444.749C37.7975 451.937 -1.4705 417.44 0.0424018 373.285L10.5159 67.6082Z" fill="white" />
                                        </svg>
                                    )}
                                </LongSvg>
                                <NextButtonWrapper initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.4}}> 
                                    <Button onClick={handleNextQuestion}>далее</Button>
                                </NextButtonWrapper>
                            </>
                        )
                    }
                </BlockStyled>
            </ModalStyled>
            <Modal isOpen={isFinishModal}>
                <Block backImageProps={endModal?.backImageProps} imageProps={endModal?.imageProps} svgSizes={endModal?.endModalSize} backgroundSvg={endModal?.endModalSvg}>
                    <Title>{endModal?.endTitle}</Title>
                    <Text>{endModal?.endText}</Text>
                    <EndButtonStyled onClick={handleEndGame} $bottom={endModal?.endButtonBottom}>
                        {endModal?.endButtonText}
                    </EndButtonStyled>
                </Block>
            </Modal>
        </>
    )
}