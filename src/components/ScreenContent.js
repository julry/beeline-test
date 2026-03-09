import {useEffect} from "react";
import styled from 'styled-components';
import {AnimatePresence, motion} from 'framer-motion';

import { preloadImages } from "../constants/images";
import {useProgress} from "../contexts/ProgressContext";
import { useImagePreloader } from "../hooks/useImagePreloader";

const Wrapper = styled(motion.div)`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export function ScreenContent() {
    const {screen: Screen, currentScreen} = useProgress();
    useImagePreloader(preloadImages);

    useEffect(() => {
        const preventDefault = (e) => e.preventDefault();
        
        document.body.addEventListener('touchmove', preventDefault, { passive: false });
        
        return () => document.body.removeEventListener('touchmove', preventDefault);
    }, [])

    return Screen && (
        <AnimatePresence mode="wait">
            <Wrapper
                key={currentScreen}
                initial={{opacity: 0}}
                animate={{ opacity: 1 }}
                exit={{opacity: 0}}
                transition={{
                    duration: 0.35
                }}
            >
                <Screen />
            </Wrapper>
        </AnimatePresence>
    )
}