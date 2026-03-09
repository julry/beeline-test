import styled from 'styled-components';
import { useSizeRatio } from '../../contexts/SizeRatioContext';

const TYPE_TO_BG = {
    main: '#000000',
    secondary: 'var(--color-accent)'
}


const Wrapper = styled.button`
    outline: none;
    background: ${({$type}) => TYPE_TO_BG[$type]};
    padding: ${({$ratio}) => $ratio * 12}px ${({$ratio}) => $ratio * 14}px ${({$ratio}) => $ratio * 11}px ${({$ratio}) => $ratio * 14}px;
    border-radius: ${({$ratio}) => $ratio * 30}px;
    font-weight: 700;
    width: 100%;
    font-size: ${({$ratio}) => $ratio * 18}px;
    max-width: 293px;
    cursor: pointer;
    color: #FFFFFF;
`;

export const Button = ({type = "main", ...props}) => {
    const ratio = useSizeRatio();

    return <Wrapper {...props} $ratio={ratio} $type={type} />
}


