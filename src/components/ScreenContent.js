import {useEffect, useMemo} from "react";
import styled from 'styled-components';
import {AnimatePresence, motion} from 'framer-motion';

import { preloadImagesAll, preloadImagesLvl1, preloadImagesLvl2 } from "../constants/images";
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
    const {screen: Screen, currentScreen, levels} = useProgress();

    const preloadImages = useMemo(() => {
        const last = levels[levels.length - 1];
        if (!last) return preloadImagesLvl1;
        if (last === 'level1') return preloadImagesLvl2;
        if (last === 'level2') return preloadImagesAll;

    }, [levels]);

    useImagePreloader(preloadImages);

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