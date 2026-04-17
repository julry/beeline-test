import {useRef} from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import {SizeRatioContextProvider} from '../contexts/SizeRatioContext';
import { useProgress } from '../contexts/ProgressContext';
import wordT from '../assets/images/word.svg';
import wordB from '../assets/images/wordYou.svg';
import ball1 from '../assets/images/logo.svg';
import ball2 from '../assets/images/ballDesk2.svg';
import ball3 from '../assets/images/ballDesk3.svg';

const TARGET_WIDTH = 375;
const TARGET_HEIGHT = 677;
const MIN_MOCKUP_WIDTH = 450;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    @media (min-width: ${MIN_MOCKUP_WIDTH}px) {
        padding: 20px;
        background-color: var(--color-accent);
    }
`;

const WrapperInner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const Content = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    transform: translate(0, 0);
    z-index: 2;
    font-size: ${({$sizeRatio}) => `calc(18px * ${$sizeRatio})`};
    --font-size_md: ${({$sizeRatio}) => `calc(16px * ${$sizeRatio})`};
    --spacing_x1: ${({$sizeRatio}) => `calc(5px * ${$sizeRatio})`};
    --spacing_x2: ${({$sizeRatio}) => `calc(10px * ${$sizeRatio})`};
    --spacing_x3: ${({$sizeRatio}) => `calc(15px * ${$sizeRatio})`};
    --spacing_x4: ${({$sizeRatio}) => `calc(20px * ${$sizeRatio})`};
    --spacing_x5: ${({$sizeRatio}) => `calc(25px * ${$sizeRatio})`};
    background-color: ${({$shouldUseTransparent}) => $shouldUseTransparent ? 'transparent' : 'var(--color-accent)'};
    
    @media (min-width: ${MIN_MOCKUP_WIDTH}px) {
        overflow: hidden;
        max-width: ${({$sizeRatio}) => `calc(${TARGET_WIDTH}px * ${$sizeRatio})`};
        max-height: ${({$sizeRatio}) => `calc(${TARGET_HEIGHT}px * ${$sizeRatio})`};
        box-shadow: 8px 8px 0 0 #000000;
        border-radius: 30px;
        box-sizing: content-box;
    }
`;

const Wafer = styled.div`
    display: none;

    @media (min-width: ${MIN_MOCKUP_WIDTH}px){
        position: absolute;
        display: block;
        left: 47%;
        top: 47%;
        width: ${({$sizeRatio}) => `calc(410px * ${$sizeRatio})`};
        height: ${({$sizeRatio}) => `calc(679px * ${$sizeRatio})`};
        transform: translate(-50%, -50%);
        z-index: 1;
    }
    @media (max-height: 750px){
        top: 48.8%;
    }
`;

const WordTop = styled(motion.img)`
    display: none;
    position: absolute;
    top: 6px;
    left: 10px;
    object-fit: contain;

    width: ${100 * 637 / 1080}vh;
    height: ${100 * 325 / 1080}vh;

    @media (min-width: ${MIN_MOCKUP_WIDTH}px){
        display: block;
        max-width: ${({$ratio}) => $ratio * 180}px;
        max-height: ${({$ratio}) => $ratio * 92}px;
    }

    @media (min-width: 780px){
        max-width: ${({$ratio}) => $ratio * 280}px;
        max-height: ${({$ratio}) => $ratio * 143}px;
    }

    @media (min-width: 1200px){
        max-width: ${({$ratio}) => $ratio * 350}px;
        max-height: ${({$ratio}) => $ratio * 178}px;
    }

    @media (min-width: 1440px){
        max-width: ${({$ratio}) => $ratio * 458}px;
        max-height: ${({$ratio}) => $ratio * 233}px;
    }

    @media (min-width: 1650px){
        max-width: ${({$ratio}) => $ratio * 637}px;
        max-height: ${({$ratio}) => $ratio * 325}px;
    }
`;

const WordBottom = styled(motion.img)`
    position: absolute;
    bottom: 0;
    right: 10px;
    object-fit: contain;

    width: ${100 * 637 / 1080}vh;
    height: ${100 * 401 / 1080}vh;

    @media (min-width: ${MIN_MOCKUP_WIDTH}px){
        display: block;
        max-width: ${({$ratio}) => $ratio * 180}px;
        max-height: ${({$ratio}) => $ratio * 113}px;
    }

    @media (min-width: 780px){
        max-width: ${({$ratio}) => $ratio * 280}px;
        max-height: ${({$ratio}) => $ratio * 176}px;
    }

    @media (min-width: ${MIN_MOCKUP_WIDTH}px){
        display: block;
        max-width: ${({$ratio}) => $ratio * 280}px;
        max-height: ${({$ratio}) => $ratio * 176}px;
    }

    @media (min-width: 1200px){
        max-width: ${({$ratio}) => $ratio * 350}px;
        max-height: ${({$ratio}) => $ratio * 220}px;
    }

    @media (min-width: 1440px){
        max-width: ${({$ratio}) => $ratio * 458}px;
        max-height: ${({$ratio}) => $ratio * 288}px;
    }

    @media (min-width: 1650px){
        max-width: ${({$ratio}) => $ratio * 637}px;
        max-height: ${({$ratio}) => $ratio * 401}px;
    }
`;

const Ball1 = styled(motion.img)`
    display: none;
    position: absolute;
    top: max(${100 * 358 / 1080}vh, 358px);
    left: 2%;
    object-fit: contain;

    width: ${100 * 432 / 1080}vh;
    height: ${100 * 432 / 1080}vh;

    @media (min-width: ${MIN_MOCKUP_WIDTH}px){
        display: block;
        max-width: ${({$ratio}) => $ratio * 120}px;
        max-height: ${({$ratio}) => $ratio * 120}px;
    }

    @media (min-width: 780px){
        max-width: ${({$ratio}) => $ratio * 180}px;
        max-height: ${({$ratio}) => $ratio * 180}px;
    }

    @media (min-width: 1200px){
        max-width: ${({$ratio}) => $ratio * 250}px;
        max-height: ${({$ratio}) => $ratio * 250}px;
    }

    @media (min-width: 1440px){
        max-width: ${({$ratio}) => $ratio * 350}px;
        max-height: ${({$ratio}) => $ratio * 350}px;
    }

    @media (min-width: 1650px){
        max-width: ${({$ratio}) => $ratio * 432}px;
        max-height: ${({$ratio}) => $ratio * 432}px;
    }
`;

const Ball2 = styled(motion.img)`
    display: none;
    position: absolute;
    top: max(${100 * 35 / 1080}vh, 35px);
    right: 20%;
    object-fit: contain;

    width: ${100 * 134 / 1080}vh;
    height: ${100 * 134 / 1080}vh;

    @media (min-width: ${MIN_MOCKUP_WIDTH}px){
        display: block;
        max-width: ${({$ratio}) => $ratio * 30}px;
        max-height: ${({$ratio}) => $ratio * 30}px;
    }

    @media (min-width: 780px){
        max-width: ${({$ratio}) => $ratio * 60}px;
        max-height: ${({$ratio}) => $ratio * 60}px;
    }

    @media (min-width: 1200px){
        max-width: ${({$ratio}) => $ratio * 90}px;
        max-height: ${({$ratio}) => $ratio * 90}px;
    }

    @media (min-width: 1440px){
        max-width: ${({$ratio}) => $ratio * 120}px;
        max-height: ${({$ratio}) => $ratio * 120}px;
    }

    @media (min-width: 1650px){
        max-width: ${({$ratio}) => $ratio * 134}px;
        max-height: ${({$ratio}) => $ratio * 134}px;
    }
`;

const Ball3 = styled(motion.img)`
    position: absolute;
    bottom: 0;
    right: 2%;
    object-fit: contain;
    object-position: center 100%;

    width: ${100 * 428 / 1080}vh;
    height: ${100 * 351 / 1080}vh;

    @media (min-width: ${MIN_MOCKUP_WIDTH}px){
        display: block;
        max-width: ${({$ratio}) => $ratio * 180}px;
        max-height: ${({$ratio}) => $ratio * 113}px;
    }

    @media (min-width: 780px){
        max-width: ${({$ratio}) => $ratio * 280}px;
        max-height: ${({$ratio}) => $ratio * 176}px;
    }

    @media (min-width: ${MIN_MOCKUP_WIDTH}px){
        display: block;
        max-width: ${({$ratio}) => $ratio * 220}px;
        max-height: ${({$ratio}) => $ratio * 220}px;
    }

    @media (min-width: 1200px){
        max-width: ${({$ratio}) => $ratio * 300}px;
        max-height: ${({$ratio}) => $ratio * 300}px;
    }

    @media (min-width: 1440px){
        max-width: ${({$ratio}) => $ratio * 378}px;
        max-height: ${({$ratio}) => $ratio * 378}px;
    }

    @media (min-width: 1650px){
        max-width: ${({$ratio}) => $ratio * 428}px;
        max-height: ${({$ratio}) => $ratio * 351}px;
    }
`;

export function ScreenTemplate(props) {
    const { children } = props;
    const { currentScreen } = useProgress();
    const wrapperRef = useRef();
    const wrapperInnerRef = useRef();
    const isLevelScreen = currentScreen?.toLowerCase()?.includes('level');

    return (
        <SizeRatioContextProvider target={wrapperInnerRef} targetWidth={TARGET_WIDTH} targetHeight={TARGET_HEIGHT}>
            {(sizeRatio) => (
                <Wrapper ref={wrapperRef}>
                    <Wafer $sizeRatio={sizeRatio}>
                        <svg width="100%" height="100%" viewBox="0 0 410 679" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.0429995 31.5886C-0.882557 14.1316 13.2543 -0.4161 30.7306 0.00911558L380.057 8.50853C396.336 8.90462 409.327 22.2154 409.327 38.4997V648.221C409.327 664.789 395.895 678.221 379.327 678.221H62.7785C46.8271 678.221 33.6651 665.738 32.8205 649.809L0.0429995 31.5886Z" fill="black"/>
                        </svg>
                    </Wafer>
                    <AnimatePresence mode='wait'>
                        {
                            isLevelScreen ? (
                                <>
                                    <WordTop initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} $ratio={sizeRatio} src={wordT} alt=""/>
                                    <WordBottom initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} $ratio={sizeRatio} src={wordB} alt=""/>
                                </>
                            ) : (
                                <>
                                    <Ball1 $ratio={sizeRatio} exit={{opacity: 0}} src={ball1} alt=""/>
                                    <Ball2 $ratio={sizeRatio} exit={{opacity: 0}} src={ball2} alt=""/>
                                    <Ball3 $ratio={sizeRatio} exit={{opacity: 0}} src={ball3} alt=""/>
                                </>
                            )
                        }
                    </AnimatePresence>
                    
                    <WrapperInner ref={wrapperInnerRef}>
                        <Content $sizeRatio={sizeRatio} $shouldUseTransparent={isLevelScreen}>
                            {children}
                        </Content>
                    </WrapperInner>
                </Wrapper>
            )}
        </SizeRatioContextProvider>
    );
};
