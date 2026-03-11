import map from '../assets/images/mapSm.png';
import man from '../assets/images/manSm.png';
import desk from '../assets/images/deskSm.png';
import box from '../assets/images/boxSm.png';
import wires from '../assets/images/wiresSm.png';
import building from '../assets/images/buildingSm.png';
import level31 from '../assets/images/level31.png';
import level32 from '../assets/images/level32.png';
import level33 from '../assets/images/level33.png';
import { Answer1Line } from '../components/shared/svg/Answer1Line';
import { Answer2Lines } from '../components/shared/svg/Answer2Lines';
import { Answer3Lines } from '../components/shared/svg/Answer3Lines';
import { NoTransformSpan } from '../components/shared/NoTransormSpan';

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
                <svg width="100%" height="100%" viewBox="0 0 354 395" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
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
                    padding: 'calc(var(--spacing_x3) * 1.2) 0 calc(var(--spacing_x3) * 1.5)',
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
                <svg width="100%" height="100%" viewBox="0 0 352 299" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
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
            id: 'box',
            title: 'проверка и ремонт',
            padding: [75, 20, 80, 20],
            svgSizes: {
                backgroundSvg: [352, 319],
                backgroundSvgBig: [354, 416],
            },
            marginTop: 22,
            backgroundSvg: (
                <svg width="100%" height="100%" viewBox="0 0 352 319" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                    <path d="M8.6435 66.6473C10.518 27.5857 44.0324 -2.36415 83.0581 0.147096L281.248 12.9003C317.117 15.2084 345.409 44.308 346.707 80.2282L351.791 220.93C353.108 257.368 326.233 288.715 290.021 292.978L78.1864 317.917C35.2275 322.974 -1.99096 288.247 0.0824664 245.041L8.6435 66.6473Z" fill="white"/>
                </svg>
            ),
            backgroundSvgBig: (
                <svg width="100%" height="100%" viewBox="0 0 354 416" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                    <path d="M10.1703 67.4305C11.6393 27.5078 46.1674 -3.09133 85.9771 0.249674L282.85 16.7721C318.373 19.7533 345.982 48.9541 346.969 84.5883L353.225 310.393C354.202 345.675 328.761 376.165 293.875 381.521L80.6251 414.264C37.1966 420.932 -1.56668 386.409 0.0489328 342.501L10.1703 67.4305Z" fill="white"/>
                </svg>
            ),
            answers: [
                {
                    id: 'sup-1',
                    text:'Сообщить диспетчеру и ждать инструкций',
                    afterText: 'Информация передана. Процесс запущен, решение будет найдено. Связь невидима, но твоя работа осязаема',
                    svg: <Answer2Lines isMirror/>
                },
                {
                    id: 'sup-2',
                    text:'Проверить оптический патч-корд и переподключить',
                    afterText: 'Информация передана. Процесс запущен, решение будет найдено. Связь невидима, но твоя работа осязаема',
                    svg: <Answer2Lines />
                },
            ],
            imageProps: {
                src: box,
                width: 222,
                height: 222,
                left: 22,
                top: -121,
            }
        },
        {
            id: 'wires',
            title: 'профилактика\nи порядок',
            padding: [65, 20, 100, 20],
            svgSizes: {
                backgroundSvg: [353, 349],
                backgroundSvgBig: [354, 439],
            },
            marginTop: 22,
            backgroundSvg: (
                <svg width="100%" height="100%" viewBox="0 0 353 349" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                    <path d="M9.20191 66.9337C10.9288 27.5885 44.7615 -2.58827 84.0474 0.175761L281.756 14.0859C317.534 16.6031 345.621 45.7549 346.805 81.6013L352.319 248.436C353.511 284.505 327.087 315.568 291.294 320.175L78.9383 347.51C35.8472 353.057 -1.83603 318.418 0.0690577 275.013L9.20191 66.9337Z" fill="white"/>
                </svg>
            ),
            backgroundSvgBig: (
                <svg width="100%" height="100%" viewBox="0 0 354 439" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                    <path d="M10.4342 67.566C11.8324 27.4598 46.5937 -3.26283 86.5678 0.277915L283.212 17.6959C318.637 20.8337 346.079 50.035 347.012 85.5861L353.47 331.597C354.389 366.62 329.275 396.928 294.691 402.533L81.1992 437.13C37.6481 444.187 -1.49319 409.685 0.0440116 365.592L10.4342 67.566Z" fill="white"/>
                </svg>
            ),
            answers: [
                {
                    id: 'wires-1',
                    text:'Аккуратно обойти, не трогать',
                    afterText: 'Сейчас это не критично. Ты проходишь дальше, оставляя всё как есть. важно не только что делаешь, но и зачем',
                    svg: <Answer1Line />
                },
                {
                    id: 'wires-2',
                    text:'Аккуратно смотать, промаркировать бирками «Резерв» и уложить',
                    afterText: 'Ты наводишь порядок. Теперь с этим оборудованием будет проще работать дальше. Важно не только что делаешь, но и зачем',
                    svg: <Answer2Lines />
                },
            ],
            imageProps: {
                src: wires,
                width: 235,
                height: 157,
                left: 22,
                top: -78,
            }
        },
        {
            id: 'building',
            title: 'Работа с клиентом',
            padding: [65, 20, 100, 20],
            svgSizes: {
                backgroundSvg: [353, 341],
                backgroundSvgBig: [354, 446],
            },
            marginTop: 20.5,
            backgroundSvg: (
                <svg width="100%" height="100%" viewBox="0 0 353 341" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                    <path d="M9.0674 66.8645C10.83 27.5906 44.5813 -2.5305 83.8021 0.168132L281.627 13.7798C317.43 16.2432 345.57 45.3837 346.782 81.2506L352.192 241.343C353.414 277.505 326.874 308.639 290.975 313.159L78.745 339.875C35.6893 345.295 -1.87314 310.636 0.072504 267.284L9.0674 66.8645Z" fill="white"/>
                </svg>
            ),
            answers: [
                {
                    id: 'man-1',
                    text:'Извиниться, сказать, что это не твоя зона',
                    top: 'calc(-1 * var(--spacing_x1) / 2)',
                    afterText: 'Ты объясняешь ситуациюи не выходишь за пределы своей ответственности. Так устроена работа большой системы',
                    svg: <Answer2Lines isMirror/>
                },
                {
                    id: 'man-2',
                    text:<>зайти, представиться: «инженер <NoTransformSpan>Билайна</NoTransformSpan>, могу помочь?» и провести быструю диагностику роутера</>,
                    padding: 'var(--spacing_x3) 0',
                    left: '0.5px',
                    afterText: 'Ты берёшь ответственность на себя. Интернет работает, бизнес снова в деле. Качество связи — смелость, умноженная на опыт',
                    svg: <Answer3Lines />
                },
            ],
            imageProps: {
                src: building,
                width: 268,
                height: 145,
                left: 14,
                top: -85,
            }
        }
    ],
    level3: [
        {
            id: 'level31',
            title: 'Ситуация 1.\nОчаг аварии',
            padding: [65, 20, 80, 20],
            svgSizes: {
                backgroundSvg: [353, 349],
                backgroundSvgBig: [354, 446],
            },
            marginTop: 25,
            backgroundSvg: (
                <svg width="100%" height="100%" viewBox="0 0 353 349" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.20191 66.9336C10.9288 27.5885 44.7615 -2.5883 84.0474 0.175731L281.756 14.0859C317.534 16.6031 345.621 45.7549 346.805 81.6013L352.319 248.436C353.511 284.505 327.087 315.568 291.294 320.175L78.9383 347.51C35.8472 353.057 -1.83603 318.418 0.0690577 275.013L9.20191 66.9336Z" fill="white"/>
                </svg>
            ),
            answers: [
                {
                    id: 'sup-1',
                    text:'Выполнить базовое восстановление по инструкции',
                    afterText: 'Ты запускаешь стандартный сценарий восстановления. Станция постепенно приходит в рабочее состояние, но часть района остаётся без связи',
                    afterTextStyle: `text-wrap: balance; padding-left: 0;`,
                    svg: <Answer2Lines isMirror />
                },
                {
                    id: 'sup-2',
                    text:'Сначала локализовать главный источник сбоя',
                    afterText: 'Ты тратишь время на поиск ключевой причины. Когда решение найдено, восстановление идёт быстрее и точнее',
                    afterTextStyle: `padding-left: 0;`,
                    svg: <Answer2Lines />
                },
            ],
            imageProps: {
                src: level31,
                width: 123,
                height: 220,
                left: 25,
                top: -155,
            },
            backImageProps: {
                src: level31,
                width: 77 * 1.2,
                height: 121 * 1.2,
                left: 45,
                top: -85,
                extra: `transform: rotate(20deg);`,
            },
        },
        {
            id: 'level32',
            title: 'Ситуация 2.\nДавление времени',
            padding: [55, 20, 80, 20],
            svgSizes: {
                backgroundSvg: [353, 332],
                backgroundSvgBig: [354, 395],
            },
            marginTop: 25,
            backgroundSvg: (
                <svg width="100%" height="100%" viewBox="0 0 353 332" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                    <path d="M8.90831 66.783C10.713 27.5907 44.3722 -2.46549 83.518 0.159708L281.48 13.4354C317.31 15.8382 345.51 44.9643 346.754 80.8531L352.042 233.358C353.299 269.628 326.629 300.844 290.608 305.263L78.5267 331.284C35.5099 336.562 -1.91727 301.878 0.0762906 258.585L8.90831 66.783Z" fill="white"/>
                </svg>
            ),
            backgroundSvgBig: (
                <svg width="100%" height="100%" viewBox="0 0 354 395" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                    <path d="M9.91425 67.2992C11.4517 27.5424 45.7738 -2.94087 85.434 0.226166L282.528 15.9649C318.133 18.8081 345.887 48.0024 346.927 83.7055L352.986 291.825C354.02 327.337 328.289 357.992 293.135 363.127L80.1208 394.248C36.7974 400.577 -1.63795 366.029 0.053931 322.278L9.91425 67.2992Z" fill="white"/>
                </svg>
            ),
            answers: [
                {
                    id: 'man-1',
                    text:'Сосредоточиться только на технической задаче',
                    afterText: 'Ты отключаешь лишние сигналы и работаешь не отвлекаясь',
                    
                    svg: <Answer2Lines isMirror/>
                },
                {
                    id: 'man-2',
                    text:'Предложить схему типового договора из базы знаний',
                    left: '0.5px',
                    afterText: 'Ты передаёшь промежуточную информацию. Ожидание становится понятнее, напряжение снижается',
                    svg: <Answer2Lines />
                },
            ],
            imageProps: {
                src: level32,
                width: 294,
                height: 246,
                left: 0,
                top: 12,
                extra: `position: fixed; left: 0; top: 5vh;`
            },
        },
        {
            id: 'level33',
            title: 'Ситуация 3.\nРезервное решение',
            padding: [65, 20, 100, 20],
            svgSizes: {
                backgroundSvg: [353, 332],
                backgroundSvgBig: [354, 447],
            },
            marginTop: 25,
            backgroundSvg: (
                <svg width="100%" height="100%" viewBox="0 0 353 332" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                    <path d="M8.90831 66.783C10.713 27.5907 44.3722 -2.46549 83.518 0.159708L281.48 13.4354C317.31 15.8382 345.51 44.9643 346.754 80.8531L352.042 233.358C353.299 269.628 326.629 300.844 290.608 305.263L78.5267 331.284C35.5099 336.562 -1.91727 301.878 0.0762906 258.585L8.90831 66.783Z" fill="white"/>
                </svg>
            ),
            backgroundSvgBig: (
                <svg width="100%" height="100%" viewBox="0 0 354 447" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                    <path d="M10.5261 67.6132C11.8996 27.4396 46.7479 -3.32701 86.782 0.288886L283.347 18.0427C318.733 21.2388 346.112 50.4386 347.027 85.9575L353.555 339.544C354.454 374.471 329.461 404.713 294.99 410.409L81.4139 445.701C37.8163 452.906 -1.46762 418.409 0.0423131 374.246L10.5261 67.6132Z" fill="white"/>
                </svg>
            ),
            answers: [
                {
                    id: 'man-1',
                    text:'Включить временное резервное решение',
                    afterText: 'Ты выбираешь быстрый и надёжный вариант. Связь возвращается, но система работает в аварийном режиме',
                    svg: <Answer2Lines isMirror />
                },
                {
                    id: 'man-2',
                    text: 'Потратить время и восстановить основную схему',
                    afterText: 'Ты доводишь восстановление до конца. Система возвращается в нормальный режим, авария закрыта полностью',
                    svg: <Answer2Lines />
                },
            ],
            imageProps: {
                src: level33,
                width: 203,
                height: 192,
                left: 24,
                top: -121,
            }
        }
    ]
}