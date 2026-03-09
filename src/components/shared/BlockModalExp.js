import styled from 'styled-components';
import test from '../../assets/images/test.svg';
import { useSizeRatio } from '../../contexts/SizeRatioContext';
import { useLayoutEffect, useRef, useState } from 'react';

const POINTS = [
    [14, 73], [92, 4], [288, 19], [356, 90], 
    [357, 158], [300, 160], [94, 160], [7, 162]];

const CIRCLES = [[13, 4, 1.5], [204, 18, 1.55], [218, 44, 1.5], [8, 14, 1.3]];

const TrapezoidWrapper = styled.div`
    position: absolute;
    inset: 0;
    z-index: 0;
`;

const Trapezoid = styled.div`
    position: relative;
    /* background-color: white; */
    transform: perspective(380px) rotateX(5deg) rotateY(15deg) scaleX(-1);
    /* clip-path: polygon(${({$clipPath}) => $clipPath}); */
    
    padding: ${({$ratio}) => $ratio * 36}px ${({$ratio}) => $ratio * 22}px;
    max-width: min(90vw, 333px);
    width: min(90vw, 333px);

    border-radius: 85px 80px 80px 95px;

    z-index: 2;
    & > * {
        visibility: hidden;
    }
`;

const Content = styled.div`
    /* position: absolute; */
    inset: 0;
    z-index: 3;
    padding: ${({$ratio}) => $ratio * 36}px ${({$ratio}) => $ratio * 22}px;
    width: min(96vw, 363px);
    white-space: pre-line;

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

const Circle = styled.div`
    position: absolute;
    border-radius: 50%;
    background-color: white;
    width: ${({$size}) => $size}px;
    height:${({$size}) => $size}px;
    top: ${({$top}) => $top}%;
    left: ${({$left}) => $left}%;
`;

const TopElement = styled.div`
    position: absolute;
    width: 100%;
    height: ${({$ratio}) => $ratio * 93}px;
    /* width: ${({$ratio}) => $ratio * 355}px; */
    left: ${({$ratio}) => $ratio * 7}px;
    top: ${({$top}) => $top}%;
`;

const BottomElement = styled.div`
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    height: ${({$ratio}) => $ratio * 113}px;
    top: ${({$bottom}) => $bottom}%;
    /* top:  calc(${({$bottom}) => $bottom}% + ${({$ratio}) => 113 * $ratio}px); */
    /* bottom: calc(${({$bottom}) => $bottom}% - ${({$ratio}) => 113 * $ratio}px); */
`;

const CircleBottom = styled.div`
    position: absolute;
    border-radius: 50%;
    background-color: white;
    width: ${({$size}) => $size}px;
    height:${({$size}) => $size}px;
    bottom: ${({$bottom}) => $bottom}%;
    left: ${({$left}) => $left}%;
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
    z-index: 3;
    pointer-events: none;
`;

const BackImage = styled(Image)`
    z-index: 0;
`;

export const Block = ({imageProps, backImageProps, ...props}) => {
    const [circles, setCircles] = useState([]);
    const [circlesB, setCirclesB] = useState([]);
    const ratio = useSizeRatio();
    const trapezoidRef = useRef();

    const clipPath = POINTS.map(points => (
        `${points[0]/363 * 100}% ${points[1]/276 * 100}%`
    )).join(',');

    useLayoutEffect(() => {
        const handleDrawCircles = () => {
            const firstCircles = [];
            const secondCircles = [];
            let circleId = 0;
            const width = trapezoidRef.current?.getBoundingClientRect().width ?? 363;

            for (let i = 0; i < POINTS.length; i += 2) {
                if (i + 1 < POINTS.length) {
                    const point1 = POINTS[i];
                    const point2 = POINTS[i + 1];
                    const circle = CIRCLES[circleId];
                    
                    const dx = point2[0] - point1[0];
                    const dy = point2[1] - point1[1];

                    const distance = Math.sqrt(dx * dx + dy * dy);

                    const readyCircle = {
                            x: circle[0],
                            y: circle[1],
                            size: Math.round(distance * 100) / 100 * (circle[2] ?? 1) * (width / 363) // округление до 2 знаков
                        }

                    if (circleId < 2) {
                        firstCircles.push(readyCircle);
                    } else {
                        secondCircles.push(readyCircle);
                    }
                    circleId = circleId + 1;
                }
            }
            setCircles(firstCircles);
            setCirclesB(secondCircles);
        };

        handleDrawCircles();

        window.addEventListener('resize', handleDrawCircles);

        return () => window.removeEventListener('resize', handleDrawCircles);
    }, []);
        

    return (
        <Wrapper>
            <TrapezoidWrapper>
                <svg width="100%" height="100%" viewBox="0 0 353 257" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M7.58833 73.9533C10.9179 30.0523 49.0945 -2.90746 93.0116 0.203269L275.172 13.1061C315.57 15.9675 347.457 48.5668 349.425 89.0178L352.146 144.935C354.148 186.079 324.581 222.017 283.822 227.981L91.5882 256.107C40.8725 263.527 -3.64052 222.009 0.235696 170.9L7.58833 73.9533Z" fill="white"/>
                </svg>
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
            <Content $ratio={ratio}>
                {props.children}
               
            </Content>
            {/* <TopElement $ratio={ratio} $top={POINTS[3][1]/276 * 100}>
                <svg width="100%" height="100%" viewBox="0 0 358 93" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio='xMidYMax slice'>
                <mask id="mask0_2080_7" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="358" height="93">
                <rect width="358" height="93" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_2080_7)">
                <path d="M4.91255 77.3744C8.24211 33.4733 46.4187 0.513557 90.3358 3.62429L272.497 16.5271C312.894 19.3885 344.781 51.9878 346.749 92.4388L349.47 148.356C351.473 189.5 321.905 225.438 281.147 231.402L88.9124 259.528C38.1967 266.948 -6.3163 225.43 -2.44009 174.321L4.91255 77.3744Z" fill="white"/>
                </g>
                </svg>
            </TopElement> */}
            {/* <BottomElement $ratio={ratio} $bottom={POINTS[4][1]/276 * 100}>
                <svg width="100%" height="100%" viewBox="0 0 358 113" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio='xMidYMax meet'>
                    <mask id="mask0_2080_6" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="358" height="113">
                    <rect width="358" height="113" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_2080_6)">
                    <path d="M9.91255 -70.6256C13.2421 -114.527 51.4187 -147.486 95.3358 -144.376L277.497 -131.473C317.894 -128.611 349.781 -96.0122 351.749 -55.5612L354.47 0.356238C356.473 41.4999 326.905 77.4383 286.147 83.4017L93.9124 111.528C43.1967 118.948 -1.3163 77.4295 2.55991 26.3207L9.91255 -70.6256Z" fill="white"/>
                    </g>
                </svg>
            </BottomElement>
            {circles.map(({x, y, size}) => (
                <Circle $ratio={ratio} key={`x_${x}_y_${y}`} $top={y / 276 * 100} $left={x / 363 * 100} $size={size}/>
            ))} */}
            {/* {circlesB.map(({x, y, size}) => (
                <CircleBottom $ratio={ratio} key={`x_${x}_y_${y}`} $bottom={y / 276 * 100} $left={x / 363 * 100} $size={size}/>
            ))} */}
        </Wrapper>
        
    )
}
