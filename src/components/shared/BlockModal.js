import styled from 'styled-components';
import { useSizeRatio } from '../../contexts/SizeRatioContext';
import { motion } from 'framer-motion';

const TrapezoidWrapper = styled(motion.div)`
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    z-index: 1;
    width: ${({$sizes, $ratio}) => $ratio * $sizes?.[0]}px;
    height: ${({$sizes, $ratio}) => $ratio * $sizes?.[1]}px;
`;

const Content = styled.div`
    position: relative;
    inset: 0;
    z-index: 3;
    padding: ${({$ratio}) => $ratio * 36}px ${({$ratio}) => $ratio * 22}px;
    width: min(96vw, 363px);
    white-space: pre-line;
    transition: height 0.3s;

    & * {
        position: relative;
        z-index: 3;
    }

    & svg {
        position: absolute;
        inset: 0;
        z-index: 2;
    }
`;

const Wrapper = styled.div`
    position: relative;
`;

const Image = styled.img`
    position: absolute;
    width: ${({$width}) => $width}px;
    height:${({$height}) => $height}px;
    top: ${({$top}) => $top}px;
    left: ${({$left}) => $left}%;
    ${({$imageProps}) => $imageProps};
    z-index: 4;
    pointer-events: none;
`;

const BackImage = styled(Image)`
    z-index: 0;
`;

export const Block = ({imageProps, backgroundSvg, backImageProps, animateBack, transitionBack, svgSizes = [353, 257], ...props}) => {
    const ratio = useSizeRatio();

    return (
        <Wrapper>
            <TrapezoidWrapper $ratio={ratio} $sizes={svgSizes} animate={animateBack} transition={transitionBack}>
                {backgroundSvg ?? (
                    <svg width="100%" height="100%" viewBox="0 0 353 257" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <path d="M7.58833 73.9533C10.9179 30.0523 49.0945 -2.90746 93.0116 0.203269L275.172 13.1061C315.57 15.9675 347.457 48.5668 349.425 89.0178L352.146 144.935C354.148 186.079 324.581 222.017 283.822 227.981L91.5882 256.107C40.8725 263.527 -3.64052 222.009 0.235696 170.9L7.58833 73.9533Z" fill="white"/>
                    </svg>
                )}
            </TrapezoidWrapper>
            {backImageProps?.src && (
                <BackImage 
                    $top={backImageProps.top * ratio} 
                    $left={backImageProps.left} 
                    $width={backImageProps.width * ratio}
                    $height={backImageProps.height * ratio}
                    $imageProps={backImageProps.extra}
                    src={backImageProps.src} 
                    alt="" 
                />
            )}
            {imageProps?.src && (
                <Image 
                    $top={imageProps.top * ratio} 
                    $left={imageProps.left} 
                    $width={imageProps.width * ratio}
                    $height={imageProps.height * ratio} 
                    $imageProps={imageProps.extra}
                    src={imageProps.src} 
                    alt="" 
                />
            )}
            <Content $ratio={ratio} {...props}>
                {props.children}
            </Content>
        </Wrapper>
    )
}
