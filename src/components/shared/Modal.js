
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const Wrapper = styled(motion.div)`
    position: absolute;
    inset: 0;
    background-color: rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: center;
    align-items: ${({$isCentered}) => $isCentered ? 'center' : 'flex-start'};
    z-index: 1000;
    
`;

export const Modal = ({isOpen, title, blockStyles, padding, isCentered = true, ...props}) => (
    <AnimatePresence>
        {isOpen && (
            <Wrapper $isCentered={isCentered} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} {...props}>
                {props.children}
            </Wrapper>
        )}
    </AnimatePresence>
)