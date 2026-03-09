import radio from '../assets/images/radio.png';
import metr from '../assets/images/multimetr.png';
import paper from '../assets/images/paper.png';
import {NoTransformSpan} from '../components/shared/NoTransormSpan';
export const LEVEL_TO_MODAL = {
    level1: {
        title: 'Офис. Место, где рождаются идеи',
        text: <>Добро пожаловать на стажировку <NoTransformSpan>в Билайн!</NoTransformSpan> Твоя задача — познакомиться с коллегами, прогуляться по офису и предложить решения</>,
        backImageProps: {
            src: paper,
            top: -77,
            left: 33,
            width: 217,
            height: 125,
            extra: `transform: rotate(20deg);`
        },
        imageProps: {
            src: paper,
            top: -87,
            left: 16,
            width: 217,
            height: 125,
            extra: `transform: rotate(-20deg);`
        },
        bottom: 10,
        endTitle: 'План готов. Время\nдействовать!',
        endButtonText: 'выйти в город',
        endText: <>ты не прошёл мимо. твоя инициатива уже делает сеть умнее! так <NoTransformSpan>в Билайне</NoTransformSpan> начинается путь инженера — с твоего слова. слово за тобой</>,
    },
    level2: {
        title: 'Город. Сеть\nв твоих руках',
        text: 'Сеть держится на доверии, надежности и экспертизе. Твоя смелость и точность настройки обеспечат связь для тысяч людей',
        shouldBalance: true,
        backImageProps: {
            src: metr,
            top: -50,
            left: 58,
            width: 88,
            height: 136,
            extra: `transform: rotate(20deg);`
        },
        imageProps: {
            src: metr,
            top: -99,
            left: 36,
            width: 88,
            height: 136,
            extra: `transform: rotate(-20deg);`
        },
        bottom: 20,
        endTitle: 'Сеть держится на тебе!',
        endButtonText: 'принять срочный вызов',
        endText: 'ты не просто починил оборудование, ты вернул связь людям. в этом и есть суть нашей работы',
        endButtonBottom: 'var(--spacing_x1)',
        endModalSize: [353, 223],
        endModalSvg: (
            <svg width="100%" height="100%" viewBox="0 0 353 223" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.60308 63.7907C10.9365 26.3676 43.2189 -1.74984 80.7454 0.084903L282.935 9.9704C318.741 11.721 347.437 40.2385 349.411 76.0319L352.016 123.269C354.052 160.176 327.041 192.305 290.333 196.641L78.2176 221.693C34.0936 226.904 -3.65864 190.221 0.283399 145.966L7.60308 63.7907Z" fill="white"/>
            </svg>
        )
    },
    level3: {
        title: 'Экстренный вызов.\nРеши задачу',
        text: 'Когда сеть «легла», счёт идёт на минуты. Твоя способность быстро принимать решения поможет вернуть связь целому району.\nГотов к настоящему вызову?',
        shouldBalance: true,
        backImageProps: {
            src: radio,
            top: -110,
            left: 55,
            width: 57,
            height: 155,
            extra: `transform: rotate(20deg);`
        },
        imageProps: {
            src: radio,
            top: -150,
            left: 34,
            width: 69,
            height: 188,
            extra: `transform: rotate(-15deg);`
        },
    },
};
