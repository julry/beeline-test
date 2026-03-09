import styled from 'styled-components';

export const Text = styled.p`
    margin-top: var(--spacing_x3);
    margin-bottom: calc(var(--spacing_x5) + var(--spacing_x4));

    ${({$shouldBalance}) => $shouldBalance ? 'text-wrap: balance;' : ''};
`;