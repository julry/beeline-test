import map from '../assets/images/mapSm.png';
import man from '../assets/images/manSm.png';
import desk from '../assets/images/deskSm.png';
import { Answer1Line } from '../components/shared/svg/Answer1Line';
import { Answer2Lines } from '../components/shared/svg/Answer2Lines';
import { Answer3Lines } from '../components/shared/svg/Answer3Lines';

export const questions = {
    level1: [
        {
            id: 'map',
            title: 'Система\nмониторинга сети',
            padding: [65, 20, 80, 20],
            svgSizes: {
                backgroundSvg: [353, 332],
                backgroundSvgBig: [354, 446],
            },
            marginTop: 19,
            backgroundSvg: (
                <svg width="100%" height="100%" viewBox="0 0 353 332" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                    <path d="M8.90831 66.783C10.713 27.5907 44.3722 -2.46549 83.518 0.159708L281.48 13.4354C317.31 15.8382 345.51 44.9643 346.754 80.8531L352.042 233.358C353.299 269.628 326.629 300.844 290.608 305.263L78.5267 331.284C35.5099 336.562 -1.91727 301.878 0.0762906 258.585L8.90831 66.783Z" fill="white"/>
                </svg>
            ),
            answers: [
                {
                    id: 'sup-1',
                    text:'Работать по стандартной схеме',
                    top: 'calc(-1 * var(--spacing_x1) / 2)',
                    afterText: 'Ты действуешь по инструкции. Система стабильна, команда спокойна — всё под контролем. Страна на связи, потому что кто-то делает работу точно',
                    svg: <Answer1Line />
                },
                {
                    id: 'sup-2',
                    text:'Придумать вариант временного усиления покрытия с мобильной вышки',
                    padding: 'var(--spacing_x3) 0',
                    left: '0.5px',
                    afterText: 'Ты замечаешь риск раньше других. Идею принимают — проблема решена до того, как она стала аварией. Сильная сеть начинается с сильных инженеров',
                    svg: <Answer3Lines />
                },
            ],
            imageProps: {
                src: map,
                width: 175,
                height: 139,
                left: 28,
                top: -75,
            }
        },
        {
            id: 'man',
            title: 'помощь коллеге',
            padding: [65, 20, 80, 20],
            svgSizes: {
                backgroundSvg: [353, 332],
                backgroundSvgBig: [354, 395],
            },
            marginTop: 22,
            backgroundSvg: (
                <svg width="100%" height="100%" viewBox="0 0 353 332" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                    <path d="M8.90831 66.783C10.713 27.5907 44.3722 -2.46549 83.518 0.159708L281.48 13.4354C317.31 15.8382 345.51 44.9643 346.754 80.8531L352.042 233.358C353.299 269.628 326.629 300.844 290.608 305.263L78.5267 331.284C35.5099 336.562 -1.91727 301.878 0.0762906 258.585L8.90831 66.783Z" fill="white"/>
                </svg>
            ),
            backgroundSvgBig: (
                <svg width="100%" height="100%" viewBox="0 0 354 395" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.91425 67.2992C11.4517 27.5424 45.7738 -2.94087 85.434 0.226166L282.528 15.9649C318.133 18.8081 345.887 48.0024 346.927 83.7055L352.986 291.825C354.02 327.337 328.289 357.992 293.135 363.127L80.1208 394.248C36.7974 400.577 -1.63795 366.029 0.053931 322.278L9.91425 67.2992Z" fill="white"/>
                </svg>
            ),
            answers: [
                {
                    id: 'man-1',
                    text:'Не вмешиваться',
                    top: 'calc(-1 * var(--spacing_x1) / 2)',
                    afterText: 'Каждый разбирается со своим участком. Работа идёт своим чередом',
                    svg: <Answer1Line />
                },
                {
                    id: 'man-2',
                    text:'Предложить схему типового договора из базы знаний',
                    padding: 'var(--spacing_x3) 0',
                    left: '0.5px',
                    afterText: 'Ты делишься опытом. Коллега быстрее находит выход, команда экономит время. Новые подходыне ждут идеального момента',
                    svg: <Answer2Lines />
                },
            ],
            imageProps: {
                src: man,
                width: 165,
                height: 190,
                left: 28,
                top: -109,
            }
        },
        {
            id: 'desk',
            title: '«идеи для улучшений»',
            padding: [65, 20, 100, 20],
            svgSizes: {
                backgroundSvg: [353, 332],
                backgroundSvgBig: [354, 446],
            },
            marginTop: 20.5,
            backgroundSvg: (
                <svg width="100%" height="100%" viewBox="0 0 352 299" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.20268 66.4209C10.1933 27.5651 43.4866 -2.21183 82.3228 0.129146L280.892 12.0985C316.813 14.2638 345.241 43.3134 346.628 79.2736L351.372 202.267C352.787 238.965 325.601 270.518 289.097 274.543L77.6757 297.859C34.7968 302.588 -2.11302 267.782 0.0940843 224.7L8.20268 66.4209Z" fill="white"/>
                </svg>
            ),
            answers: [
                {
                    id: 'man-1',
                    text:'Почитать предложения',
                    top: 'calc(-1 * var(--spacing_x1) / 2)',
                    afterText: 'Ты вникаешь в контекст. Теперь ты лучше понимаешь, как здесь принято улучшать процессы. Идеи растут там, где их слышат',
                    svg: <Answer1Line />
                },
                {
                    id: 'man-2',
                    text:'Предложить идею: QR-коды на оборудование для быстрого доступа к мануалам',
                    padding: 'var(--spacing_x3) 0',
                    left: '0.5px',
                    afterText: 'Ты предлагаешь практичное решение. Идею берут в работу — она становится частью общего плана. Портфель технологий растёт вместе с тобой',
                    svg: <Answer3Lines />
                },
            ],
            imageProps: {
                src: desk,
                width: 138,
                height: 190,
                left: 28,
                top: -126,
            }
        }
    ],
    level2: [
        {
            id: 'map',
            title: 'Система\nмониторинга сети',
            padding: [65, 20, 80, 20],
            svgSizes: {
                backgroundSvg: [353, 332],
                backgroundSvgBig: [354, 446],
            },
            marginTop: 19,
            backgroundSvg: (
                <svg width="100%" height="100%" viewBox="0 0 353 332" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                    <path d="M8.90831 66.783C10.713 27.5907 44.3722 -2.46549 83.518 0.159708L281.48 13.4354C317.31 15.8382 345.51 44.9643 346.754 80.8531L352.042 233.358C353.299 269.628 326.629 300.844 290.608 305.263L78.5267 331.284C35.5099 336.562 -1.91727 301.878 0.0762906 258.585L8.90831 66.783Z" fill="white"/>
                </svg>
            ),
            answers: [
                {
                    id: 'sup-1',
                    text:'Работать по стандартной схеме',
                    top: 'calc(-1 * var(--spacing_x1) / 2)',
                    afterText: 'Ты действуешь по инструкции. Система стабильна, команда спокойна — всё под контролем. Страна на связи, потому что кто-то делает работу точно',
                    svg: <Answer1Line />
                },
                {
                    id: 'sup-2',
                    text:'Придумать вариант временного усиления покрытия с мобильной вышки',
                    padding: 'var(--spacing_x3) 0',
                    left: '0.5px',
                    afterText: 'Ты замечаешь риск раньше других. Идею принимают — проблема решена до того, как она стала аварией. Сильная сеть начинается с сильных инженеров',
                    svg: <Answer3Lines />
                },
            ],
            imageProps: {
                src: map,
                width: 175,
                height: 139,
                left: 28,
                top: -75,
            }
        },
        {
            id: 'man',
            title: 'помощь коллеге',
            padding: [65, 20, 80, 20],
            svgSizes: {
                backgroundSvg: [353, 332],
                backgroundSvgBig: [354, 395],
            },
            marginTop: 22,
            backgroundSvg: (
                <svg width="100%" height="100%" viewBox="0 0 353 332" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                    <path d="M8.90831 66.783C10.713 27.5907 44.3722 -2.46549 83.518 0.159708L281.48 13.4354C317.31 15.8382 345.51 44.9643 346.754 80.8531L352.042 233.358C353.299 269.628 326.629 300.844 290.608 305.263L78.5267 331.284C35.5099 336.562 -1.91727 301.878 0.0762906 258.585L8.90831 66.783Z" fill="white"/>
                </svg>
            ),
            backgroundSvgBig: (
                <svg width="100%" height="100%" viewBox="0 0 354 395" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.91425 67.2992C11.4517 27.5424 45.7738 -2.94087 85.434 0.226166L282.528 15.9649C318.133 18.8081 345.887 48.0024 346.927 83.7055L352.986 291.825C354.02 327.337 328.289 357.992 293.135 363.127L80.1208 394.248C36.7974 400.577 -1.63795 366.029 0.053931 322.278L9.91425 67.2992Z" fill="white"/>
                </svg>
            ),
            answers: [
                {
                    id: 'man-1',
                    text:'Не вмешиваться',
                    top: 'calc(-1 * var(--spacing_x1) / 2)',
                    afterText: 'Каждый разбирается со своим участком. Работа идёт своим чередом',
                    svg: <Answer1Line />
                },
                {
                    id: 'man-2',
                    text:'Предложить схему типового договора из базы знаний',
                    padding: 'var(--spacing_x3) 0',
                    left: '0.5px',
                    afterText: 'Ты делишься опытом. Коллега быстрее находит выход, команда экономит время. Новые подходыне ждут идеального момента',
                    svg: <Answer2Lines />
                },
            ],
            imageProps: {
                src: man,
                width: 165,
                height: 190,
                left: 28,
                top: -109,
            }
        },
        {
            id: 'desk',
            title: '«идеи для улучшений»',
            padding: [65, 20, 100, 20],
            svgSizes: {
                backgroundSvg: [353, 332],
                backgroundSvgBig: [354, 446],
            },
            marginTop: 20.5,
            backgroundSvg: (
                <svg width="100%" height="100%" viewBox="0 0 352 299" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.20268 66.4209C10.1933 27.5651 43.4866 -2.21183 82.3228 0.129146L280.892 12.0985C316.813 14.2638 345.241 43.3134 346.628 79.2736L351.372 202.267C352.787 238.965 325.601 270.518 289.097 274.543L77.6757 297.859C34.7968 302.588 -2.11302 267.782 0.0940843 224.7L8.20268 66.4209Z" fill="white"/>
                </svg>
            ),
            answers: [
                {
                    id: 'man-1',
                    text:'Почитать предложения',
                    top: 'calc(-1 * var(--spacing_x1) / 2)',
                    afterText: 'Ты вникаешь в контекст. Теперь ты лучше понимаешь, как здесь принято улучшать процессы. Идеи растут там, где их слышат',
                    svg: <Answer1Line />
                },
                {
                    id: 'man-2',
                    text:'Предложить идею: QR-коды на оборудование для быстрого доступа к мануалам',
                    padding: 'var(--spacing_x3) 0',
                    left: '0.5px',
                    afterText: 'Ты предлагаешь практичное решение. Идею берут в работу — она становится частью общего плана. Портфель технологий растёт вместе с тобой',
                    svg: <Answer3Lines />
                },
            ],
            imageProps: {
                src: desk,
                width: 138,
                height: 190,
                left: 28,
                top: -126,
            }
        }
    ],
    level3: [
        {
            id: 'map',
            title: 'Система\nмониторинга сети',
            padding: [65, 20, 80, 20],
            svgSizes: {
                backgroundSvg: [353, 332],
                backgroundSvgBig: [354, 446],
            },
            marginTop: 19,
            backgroundSvg: (
                <svg width="100%" height="100%" viewBox="0 0 353 332" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                    <path d="M8.90831 66.783C10.713 27.5907 44.3722 -2.46549 83.518 0.159708L281.48 13.4354C317.31 15.8382 345.51 44.9643 346.754 80.8531L352.042 233.358C353.299 269.628 326.629 300.844 290.608 305.263L78.5267 331.284C35.5099 336.562 -1.91727 301.878 0.0762906 258.585L8.90831 66.783Z" fill="white"/>
                </svg>
            ),
            answers: [
                {
                    id: 'sup-1',
                    text:'Работать по стандартной схеме',
                    top: 'calc(-1 * var(--spacing_x1) / 2)',
                    afterText: 'Ты действуешь по инструкции. Система стабильна, команда спокойна — всё под контролем. Страна на связи, потому что кто-то делает работу точно',
                    svg: <Answer1Line />
                },
                {
                    id: 'sup-2',
                    text:'Придумать вариант временного усиления покрытия с мобильной вышки',
                    padding: 'var(--spacing_x3) 0',
                    left: '0.5px',
                    afterText: 'Ты замечаешь риск раньше других. Идею принимают — проблема решена до того, как она стала аварией. Сильная сеть начинается с сильных инженеров',
                    svg: <Answer3Lines />
                },
            ],
            imageProps: {
                src: map,
                width: 175,
                height: 139,
                left: 28,
                top: -75,
            }
        },
        {
            id: 'man',
            title: 'помощь коллеге',
            padding: [65, 20, 80, 20],
            svgSizes: {
                backgroundSvg: [353, 332],
                backgroundSvgBig: [354, 395],
            },
            marginTop: 22,
            backgroundSvg: (
                <svg width="100%" height="100%" viewBox="0 0 353 332" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                    <path d="M8.90831 66.783C10.713 27.5907 44.3722 -2.46549 83.518 0.159708L281.48 13.4354C317.31 15.8382 345.51 44.9643 346.754 80.8531L352.042 233.358C353.299 269.628 326.629 300.844 290.608 305.263L78.5267 331.284C35.5099 336.562 -1.91727 301.878 0.0762906 258.585L8.90831 66.783Z" fill="white"/>
                </svg>
            ),
            backgroundSvgBig: (
                <svg width="100%" height="100%" viewBox="0 0 354 395" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.91425 67.2992C11.4517 27.5424 45.7738 -2.94087 85.434 0.226166L282.528 15.9649C318.133 18.8081 345.887 48.0024 346.927 83.7055L352.986 291.825C354.02 327.337 328.289 357.992 293.135 363.127L80.1208 394.248C36.7974 400.577 -1.63795 366.029 0.053931 322.278L9.91425 67.2992Z" fill="white"/>
                </svg>
            ),
            answers: [
                {
                    id: 'man-1',
                    text:'Не вмешиваться',
                    top: 'calc(-1 * var(--spacing_x1) / 2)',
                    afterText: 'Каждый разбирается со своим участком. Работа идёт своим чередом',
                    svg: <Answer1Line />
                },
                {
                    id: 'man-2',
                    text:'Предложить схему типового договора из базы знаний',
                    padding: 'var(--spacing_x3) 0',
                    left: '0.5px',
                    afterText: 'Ты делишься опытом. Коллега быстрее находит выход, команда экономит время. Новые подходыне ждут идеального момента',
                    svg: <Answer2Lines />
                },
            ],
            imageProps: {
                src: man,
                width: 165,
                height: 190,
                left: 28,
                top: -109,
            }
        },
        {
            id: 'desk',
            title: '«идеи для улучшений»',
            padding: [65, 20, 100, 20],
            svgSizes: {
                backgroundSvg: [353, 332],
                backgroundSvgBig: [354, 446],
            },
            marginTop: 20.5,
            backgroundSvg: (
                <svg width="100%" height="100%" viewBox="0 0 352 299" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.20268 66.4209C10.1933 27.5651 43.4866 -2.21183 82.3228 0.129146L280.892 12.0985C316.813 14.2638 345.241 43.3134 346.628 79.2736L351.372 202.267C352.787 238.965 325.601 270.518 289.097 274.543L77.6757 297.859C34.7968 302.588 -2.11302 267.782 0.0940843 224.7L8.20268 66.4209Z" fill="white"/>
                </svg>
            ),
            answers: [
                {
                    id: 'man-1',
                    text:'Почитать предложения',
                    top: 'calc(-1 * var(--spacing_x1) / 2)',
                    afterText: 'Ты вникаешь в контекст. Теперь ты лучше понимаешь, как здесь принято улучшать процессы. Идеи растут там, где их слышат',
                    svg: <Answer1Line />
                },
                {
                    id: 'man-2',
                    text:'Предложить идею: QR-коды на оборудование для быстрого доступа к мануалам',
                    padding: 'var(--spacing_x3) 0',
                    left: '0.5px',
                    afterText: 'Ты предлагаешь практичное решение. Идею берут в работу — она становится частью общего плана. Портфель технологий растёт вместе с тобой',
                    svg: <Answer3Lines />
                },
            ],
            imageProps: {
                src: desk,
                width: 138,
                height: 190,
                left: 28,
                top: -126,
            }
        }
    ]
}