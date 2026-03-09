import styled from 'styled-components';
import { useSizeRatio } from '../../contexts/SizeRatioContext';


const Wrapper = styled.div`
    &::before {
        content: '';
        position: absolute;
        inset: 0;
        width: ${({$width}) => $width}px;
        height: ${({$height}) => $height}px;
        background: ${({$bg = '#fff'}) => $bg};
        border-radius: ${({$br = 80}) => $br}px;
        transform: perspective(${({$persp}) => $persp}px) rotateX(${({$rotateX = 0}) => $rotateX}deg) rotateY(${({$rotateY}) => $rotateY}deg);
        transform-origin: left center;
        z-index: -1;
    }
`;

export const Block = ({height, width, br, bg, transformProps, ...props}) => {
    const ratio = useSizeRatio();

    return (
        <Wrapper 
            $ratio={ratio} 
            {...props}
            $width={width * ratio} 
            $height={height * ratio} 
            $br={(br ?? 80) * ratio} 
            $bg={bg} 
            $persp={transformProps.perspective}
            $rotateX={transformProps.rotateX}
            $rotateY={transformProps.rotateY}
        >
            {props.children}
        </Wrapper>
    )
}
