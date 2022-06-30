import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    z-index: 500;
    width: 100vw;
    height: 100vh;
    transition-duration: 0.5s;
    .toggleIcon{
        position: absolute;
        top: 50px;
        right: -36px;
        font-size: 50px;
        color: var(--black);
        cursor: pointer;
        opacity: 0.5;
    }
`;
export const Footer = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    .crossIcon{
        font-size: 40px;
        color: var(--black);
        z-index: 1000;
        cursor: pointer;
        opacity: 0.5;
    }
`;
