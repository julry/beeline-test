import styled from "styled-components";
import wordT from '../../assets/images/word.svg';
import wordB from '../../assets/images/wordYou.svg';
import logoL from '../../assets/images/logo.svg';
import info1 from '../../assets/images/endInfo1.svg';
import box from '../../assets/images/introBox.png';
import { useSizeRatio } from "../../contexts/SizeRatioContext";
import { Button } from "../shared/Button";
import { useProgress } from "../../contexts/ProgressContext";
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

const Box = styled.img`
    position: absolute;
    object-fit: cover;
    right: 0;
    top: ${({$ratio}) => $ratio * -20}px;
    height: ${({$ratio}) => $ratio * 370}px;
    width: ${({$ratio}) => $ratio * 322}px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size:  ${({$ratio}) => $ratio * 18}px;
    gap: ${({$ratio}) => $ratio * 10}px;
    padding: ${({$ratio}) => $ratio * 27}px ${({$ratio}) => $ratio * 15}px ${({$ratio}) => $ratio * 140}px;
    margin: auto;
    
    & button:first-of-type {
        margin-top: ${({$ratio}) => $ratio * 15}px;
    }
`;

const TextBlock = styled.img`
    position: relative;
    z-index: 2;
    margin-top: ${({$ratio}) => $ratio * 164}px;
    padding-left: ${({$ratio}) => $ratio * 7}px;
    height: ${({$size}) => $size[1]}px;
    width: ${({$size}) =>  $size[0]}px;
    object-fit: contain;
`;

export const Final = () => {
    const ratio = useSizeRatio();
    const { next, hasEmail, restart } = useProgress();

    const handleGift = () => {
        next(SCREEN_NAMES.EMAIL);
    }

    return (
        <>
            <WordTop $ratio={ratio} src={wordT} alt="" />
            <WordBottom $ratio={ratio} src={wordB} alt="" />
            <LogoLeft $ratio={ratio} src={logoL} alt="" />
            <TextBlock $ratio={ratio} $size={[187 * ratio, 121 * ratio]} src={info1} alt="" />
            <Box $ratio={ratio} src={box} alt="" />
            <Content $ratio={ratio}>
                <p>
                    поздравляем! ты дошёл до конца и доказал, что твоё слово и действия имеют силу. готов получить заслуженный приз? оставляй почту, чтобы поучаствовать в розыгрыше
                </p>
                <p>а еще больше классных призов и полезной инфы о развитии в профессии ждет в боте — присоединяйся</p>
                {
                    !hasEmail && (
                        <Button onClick={handleGift}>
                            участвовать в розыгрыше
                        </Button>
                    )
                }
                <Button onClick={() => window.open('', '_blank')}>
                    зарегистрироваться в боте
                </Button>
                {
                    hasEmail && (
                        <Button onClick={restart}>
                            играть заново
                        </Button>
                    )
                }
            </Content>
        </>
    )
}