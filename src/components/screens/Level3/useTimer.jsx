import { useState, useEffect, useRef, useCallback } from 'react';

export const useTimer = (initialSeconds, onComplete) => {
    const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
    const timerRef = useRef(null);
    const onCompleteRef = useRef(onComplete);
    const completedRef = useRef(false);

    useEffect(() => {
        onCompleteRef.current = onComplete;
    }, [onComplete]);

    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, []);

    const start = useCallback(() => {
        if (timerRef.current || secondsLeft <= 0) return;

        timerRef.current = setInterval(() => {
            setSecondsLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timerRef.current);
                    timerRef.current = null;

                    completedRef.current = true;
          
                    setTimeout(() => {
                        if (onCompleteRef.current && completedRef.current) {
                            onCompleteRef.current();
                        }
                    }, 0);

                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    }, [secondsLeft]);

    const pause = useCallback(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    }, []);

    const stopTimer = useCallback(() => {
        if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
        }
    }, []);

    const restart = useCallback((newInitialSeconds = initialSeconds) => {
        pause();
        setSecondsLeft(newInitialSeconds);
        completedRef.current = undefined;
        start();
    }, [initialSeconds, pause, start]);

     const reset = useCallback((newInitialSeconds = initialSeconds) => {
        stopTimer();
        setSecondsLeft(newInitialSeconds);
        completedRef.current = false;
    }, [initialSeconds, stopTimer]);

    const formatTime = useCallback((totalSeconds) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    }, []);

    const formatted = formatTime(secondsLeft);

    return {
        formatted,
        secondsLeft,
        restart,
        start,
        reset,
    };
};
