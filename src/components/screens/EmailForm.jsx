import styled from "styled-components";
import wordT from '../../assets/images/word.svg';
import wordB from '../../assets/images/wordYou.svg';
import logoL from '../../assets/images/logo.svg';
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { Button } from "../shared/Button";
import { useProgress } from "../../contexts/ProgressContext";
import { Block } from "../shared/BlockModal";
import { Answer1Line } from "../shared/svg/Answer1Line";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SCREEN_NAMES } from "../../constants/screens";

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

const Content = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    min-height: 100%;

    & > div {
        height: ${({$ratio}) => $ratio * 419}px;
        padding: ${({$ratio}) => $ratio * 17}px 0;
    }

    & h3 {
        font-size: ${({$ratio}) => $ratio * 24}px;
    }
`;

const InputWrapper = styled.div`
    margin: var(--spacing_x4) 0  var(--spacing_x3);
    width: 100%;
    height: ${({$ratio}) => $ratio * 67}px;
`;

const InputStyled = styled.input`
    border: none;
    outline: none;
    background: none;
    width: 100%;
    height: 100%;
    padding: var(--spacing_x1) var(--spacing_x5) var(--spacing_x2);
    font-size: ${({$ratio}) => $ratio * 18}px;
    ${({$color}) => $color ? 'color: ' + $color : ''};

    &::placeholder {
        color:  ${({$color}) => $color ? $color : '#141414'};
    }
`;

const InputRadioButton = styled.input`
  display: none;
`;

const RadioIconStyled = styled.div`
  position: relative;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({$ratio}) => $ratio * 23}px;
  height: ${({$ratio}) => $ratio * 22}px;
  border-radius: 50%;
  margin-right: ${({$ratio}) => $ratio * 6}px;
  margin-top: ${({$ratio}) => $ratio * 1}px;
  ${({$isMirrored}) => $isMirrored ? 'transform: scale(-1,1);' : ''};
`;

const RadioButtonLabel = styled.label`
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  font-size: ${({$ratio}) => $ratio * 14}px;
  width: 100%;

  & + & {
    margin-top: ${({$ratio}) => $ratio * 10}px;
  }

  & span {
    text-align: left;
  }
`;

const RadioIconChecked = styled(motion.div)`
    width: ${({$ratio}) => $ratio * 23 * 0.75}px;
    height: ${({$ratio}) => $ratio * 22 * 0.75}px;
`;

const Link = styled.a`
    color: inherit;
    text-decoration: none;
    border-bottom: 0.5px solid #531a56;
`;

const ButtonStyled = styled(Button)`
    margin-top: ${({$ratio}) => $ratio * 56}px;
    width: ${({$ratio}) => $ratio * 218}px;
    height: ${({$ratio}) => $ratio * 48}px;
`;

export const EmailForm = () => {
    const [email, setEmail] = useState('');
    const [isAdsAgreed, setIsAdsAgreed] = useState(true);
    const [isSending, setIsSending] = useState(false);
    const [isCorrect, setIsCorrect] = useState(true);
    const [isAgreed, setIsAgreed] = useState(true);
    const ratio = useSizeRatio();
    const emailRegExp = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/gi;
    const { sendEmail, next } = useProgress();

    const handleBlur = () => {
        if (email.match(emailRegExp) || !email) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };

    const handleChange = (e) => {
        if (isSending) return;
        setIsCorrect(true);
        setEmail(e.target.value);
    };


    const handleClick = async () => {
        if (isSending || !isAgreed || !isCorrect) return;
        if (!email) {
            setIsCorrect(false);

            return;
        }

        setIsSending(true);
        await sendEmail({email, isAdsAgreed});
        setIsSending(false);
        next(SCREEN_NAMES.FINISH);
    }

    return (
        <>
            <WordTop $ratio={ratio} src={wordT} alt="" />
            <WordBottom $ratio={ratio} src={wordB} alt="" />
            <LogoLeft $ratio={ratio} src={logoL} alt="" />
            <Content $ratio={ratio}>
                <Block
                    backgroundSvg={
                        <svg width="100%" height="100%" viewBox="0 0 352 419" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                            <path d="M11.4985 67.1294C13.1616 26.7066 48.6456 -3.89398 88.8738 0.402839L278.005 20.6042C312.294 24.2666 338.808 52.3559 340.488 86.7993L351.492 312.501C353.241 348.361 327.575 379.73 292.079 385.117L80.5046 417.228C36.9911 423.832 -1.74904 389.117 0.0602021 345.143L11.4985 67.1294Z" fill="white"/>
                        </svg>
                    }
                    svgSizes={[352, 419]}
                >
                    <h3>
                        Оставь почту,{'\n'}чтобы принять участие в розыгрыше крутых призов!
                    </h3>
                    <InputWrapper $ratio={ratio}>
                        <Answer1Line color={isCorrect ? undefined : "#FF2215"}/>
                        <InputStyled 
                            placeholder="email@email.ru"
                            $ratio={ratio} 
                            value={email} 
                            onBlur={handleBlur}
                            onChange={handleChange} 
                            $color={isCorrect ? undefined : "#FF2215"}
                        />
                    </InputWrapper>
                    <RadioButtonLabel $ratio={ratio}>
                    <InputRadioButton
                        $ratio={ratio}
                        type="checkbox"
                        disabled={isSending}
                        value={isAgreed}
                        checked={isAgreed}
                        onChange={() => setIsAgreed((prevAgreed) => !prevAgreed)}
                    />
                    <RadioIconStyled $ratio={ratio}>
                        <svg width="100%" height="100%" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.1797 9.28857C21.8603 4.21096 17.444 0.378909 12.3721 0.778809L8.79004 1.06104C4.37679 1.409 0.92354 5.00734 0.756836 9.43115C0.587878 13.9198 3.85441 17.8033 8.30566 18.4058L11.8662 18.8872C17.5626 19.6581 22.5404 15.0255 22.1797 9.28857Z" stroke="black" stroke-width="1.5"/>
                        </svg>
                        <AnimatePresence initial={false}>
                            {isAgreed && (
                                <RadioIconChecked initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} $ratio={ratio}>
                                    <svg width="100%" height="100%" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.1797 9.28857C21.8603 4.21096 17.444 0.378909 12.3721 0.778809L8.79004 1.06104C4.37679 1.409 0.92354 5.00734 0.756836 9.43115C0.587878 13.9198 3.85441 17.8033 8.30566 18.4058L11.8662 18.8872C17.5626 19.6581 22.5404 15.0255 22.1797 9.28857Z" fill="black" stroke-width="1.5"/>
                                    </svg>
                                </RadioIconChecked>
                            )}
                        </AnimatePresence>
                    </RadioIconStyled>
                    <span>
                        Я даю согласие на{"\u00A0"}
                        <Link href="https://fut.ru/personal_data_agreement" target="_blank">обработку</Link>{' '}
                        и{"\u00A0"}<Link href="https://fut.ru/personal_data_transfer_agreement" target="_blank">передачу</Link>{' '} 
                        моих персональных данных и соглашаюсь с{"\u00A0"}
                        <Link href="https://fut.ru/user-agreement" target="_blank">Политикой обработки персональных данных</Link>,{' '} 
                        а также с{"\u00A0"}<Link href="https://pro.fut.ru/agreement.pdf" target="_blank">правилами проведения акции</Link>
                    </span>
                </RadioButtonLabel>
                <RadioButtonLabel $ratio={ratio}>
                    <InputRadioButton
                        $ratio={ratio}
                        type="checkbox"
                        disabled={isSending}
                        value={isAdsAgreed}
                        checked={isAdsAgreed}
                        onChange={() => setIsAdsAgreed((prevAgreed) => !prevAgreed)}
                    />
                    <RadioIconStyled $ratio={ratio} $isMirrored>
                        <svg width="100%" height="100%" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.1797 9.28857C21.8603 4.21096 17.444 0.378909 12.3721 0.778809L8.79004 1.06104C4.37679 1.409 0.92354 5.00734 0.756836 9.43115C0.587878 13.9198 3.85441 17.8033 8.30566 18.4058L11.8662 18.8872C17.5626 19.6581 22.5404 15.0255 22.1797 9.28857Z" stroke="black" stroke-width="1.5"/>
                        </svg>
                        <AnimatePresence initial={false}>
                            {isAdsAgreed && (
                                <RadioIconChecked initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} $ratio={ratio}>
                                    <svg width="100%" height="100%" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.1797 9.28857C21.8603 4.21096 17.444 0.378909 12.3721 0.778809L8.79004 1.06104C4.37679 1.409 0.92354 5.00734 0.756836 9.43115C0.587878 13.9198 3.85441 17.8033 8.30566 18.4058L11.8662 18.8872C17.5626 19.6581 22.5404 15.0255 22.1797 9.28857Z" fill="black" stroke-width="1.5"/>
                                    </svg>
                                </RadioIconChecked>
                            )}
                        </AnimatePresence>
                    </RadioIconStyled>
                    <span>
                        Хочу ловить персональные стажировки от топ-компаний в{"\u00A0"} 
                        <Link href="https://fut.ru/adv_messages_agreement" target="_blank">рекламной рассылке</Link>
                    </span>
                </RadioButtonLabel>
                <ButtonStyled onClick={handleClick} $ratio={ratio}>
                    отправить
                </ButtonStyled>
                </Block>
            </Content>
        </>
    )
}