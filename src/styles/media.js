import { css } from "styled-components";

export const media = {
    tablet: (...args) => css`
        @media (min-width: 640px) {
            ${css(...args)}
        }
    `,
    desktop: (...args) => css`
        @media (min-width: 1200px) {
            ${css(...args)}
        }
    `,
};