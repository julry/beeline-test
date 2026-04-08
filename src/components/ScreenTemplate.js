import {useRef} from 'react';
import styled from 'styled-components';
import {SizeRatioContextProvider} from '../contexts/SizeRatioContext';
import { useProgress } from '../contexts/ProgressContext';


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
    background-color: ${({$shouldUseTransparent}) => $shouldUseTransparent ? 'transparent' : 'var(--color-accent)'};
    
    @media (min-width: ${MIN_MOCKUP_WIDTH}px) {
        overflow: hidden;
        max-width: ${({$sizeRatio}) => `calc(${TARGET_WIDTH}px * ${$sizeRatio})`};
        max-height: ${({$sizeRatio}) => `calc(${TARGET_HEIGHT}px * ${$sizeRatio})`};
        border: 2px solid #000000;
        border-radius: 10px;
        box-sizing: content-box;
    }
`;

export function ScreenTemplate(props) {
    const { children } = props;
    const {currentScreen} = useProgress();
    const wrapperRef = useRef();
    const wrapperInnerRef = useRef();

    return (
        <SizeRatioContextProvider target={wrapperInnerRef} targetWidth={TARGET_WIDTH} targetHeight={TARGET_HEIGHT}>
            {(sizeRatio) => (
                <Wrapper ref={wrapperRef}>
                    <WrapperInner ref={wrapperInnerRef}>
                        <Content $sizeRatio={sizeRatio} $shouldUseTransparent={currentScreen?.toLowerCase()?.includes('level')}>
                            {children}
                        </Content>
                    </WrapperInner>
                </Wrapper>
            )}
        </SizeRatioContextProvider>
    );
};
