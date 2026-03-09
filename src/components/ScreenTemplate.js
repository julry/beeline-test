import {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {SizeRatioContextProvider} from '../contexts/SizeRatioContext';
import { Block } from './shared/Block';
import { Button } from './shared/Button';

const TARGET_WIDTH = 375;
const TARGET_HEIGHT = 677;
const MIN_MOCKUP_WIDTH = 450;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    @media (min-width: ${MIN_MOCKUP_WIDTH}px) {
        padding: 20px;
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
    font-size: ${({$sizeRatio}) => `calc(18px * ${$sizeRatio})`};
    --font-size_md: ${({$sizeRatio}) => `calc(16px * ${$sizeRatio})`};
    --spacing_x1: ${({$sizeRatio}) => `calc(5px * ${$sizeRatio})`};
    --spacing_x2: ${({$sizeRatio}) => `calc(10px * ${$sizeRatio})`};
    --spacing_x3: ${({$sizeRatio}) => `calc(15px * ${$sizeRatio})`};
    --spacing_x4: ${({$sizeRatio}) => `calc(20px * ${$sizeRatio})`};
    --spacing_x5: ${({$sizeRatio}) => `calc(25px * ${$sizeRatio})`};
    background-color: var(--color-accent);
    
    @media (min-width: ${MIN_MOCKUP_WIDTH}px) {
        overflow: hidden;
        max-width: ${({$sizeRatio}) => `calc(${TARGET_WIDTH}px * ${$sizeRatio})`};
        max-height: ${({$sizeRatio}) => `calc(${TARGET_HEIGHT}px * ${$sizeRatio})`};
        border: 2px solid #000000;
        border-radius: 10px;
        box-sizing: content-box;
    }
`;

const CookieWrapper = styled(Block)`
    position: absolute;
    bottom: ${({$ratio}) => $ratio * 40}px;
    left: ${({$ratio}) => $ratio * 36}px;
    padding: ${({$ratio}) => $ratio * 18}px 0;
    width: ${({$ratio}) => $ratio * 184}px;
    z-index: 1230;
    display: flex;
    justify-content: center;
    transform: rotate(5deg);

    & a, p {
        max-width:  ${({$ratio}) => $ratio * 154}px;
        font-weight: 500;
        font-size: ${({$ratio}) => $ratio * 12}px;

        &:active {
            color: var(--color-dark);
        }
    }

    & button {
        position: absolute;
        bottom: ${({$ratio}) => $ratio * 20}px;
        right: ${({$ratio}) => $ratio * 20}px;
        z-index: 3;
        width: ${({$ratio}) => $ratio * 120}px;
        height: ${({$ratio}) => $ratio * 50}px;
        padding: 0;
    }
`;

export function ScreenTemplate(props) {
    const [isCookies, setIsCookies] = useState(false);

    const { children } = props;
    const wrapperRef = useRef();
    const wrapperInnerRef = useRef();

    useEffect(() => {
        const isAgreedCookies = localStorage.getItem('beeline_cookies_agreed');
        if (isAgreedCookies) return;

        setIsCookies(!isAgreedCookies);
    }, []);

    const handleClick = () => {
        localStorage.setItem('beeline_cookies_agreed', true);
        setIsCookies(false);
    };

    return (
        <SizeRatioContextProvider target={wrapperInnerRef} targetWidth={TARGET_WIDTH} targetHeight={TARGET_HEIGHT}>
            {(sizeRatio) => (
                <Wrapper ref={wrapperRef}>
                    <WrapperInner ref={wrapperInnerRef}>
                        <Content $sizeRatio={sizeRatio}>
                            {children}
                            {
                                isCookies && (
                                     <CookieWrapper 
                                        $ratio={sizeRatio}
                                        width={174}
                                        height={68}
                                        br={25}
                                        transformProps={{perspective: 600, rotateY: -22}}
                                        onClick={handleClick}
                                    >
                                        <p>Мы используем куки. Играя,  ты{' '}
                                        <a href="https://fut.ru/cookie" target="_blank" rel="noreferrer">
                                            соглашаешься с этим
                                        </a>
                                        </p>
                                    </CookieWrapper>
                                )
                            }
                        </Content>
                    </WrapperInner>
                </Wrapper>
            )}
        </SizeRatioContextProvider>
    );
};
