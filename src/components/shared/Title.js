import styled from 'styled-components';
import { useSizeRatio } from '../../contexts/SizeRatioContext';

export const Wrapper = styled.h3`
    font-weight: 900;
    font-size: ${({$ratio}) => $ratio * 24}px;
    line-height: 100%;
`;

export const Title = (props) => {
    const ratio = useSizeRatio();

    return (
        <Wrapper $ratio={ratio}>{props.children}</Wrapper>
    )
}