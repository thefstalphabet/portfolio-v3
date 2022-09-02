import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 500;
    width: 100vw;
    height: 100vh;
    transition-duration: 0.5s;
    background-color: var(--white);
    .ant-menu-item-selected, .ant-menu-item-selected a {
        color: var(--white) !important 
    }
    .toggleIcon{
        padding: 0.1rem;
        font-size: 28px;
        position: absolute;
        top: 90px;
        right: -32px;
        cursor: pointer;
        border-radius: 0 5px 5px 0;
        color: var(--white);
        opacity: 0.8;
    }
    .ant-anchor-ink-ball.visible {
        display: none;
    }
`;
export const Footer = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    .crossIcon{
        font-size: 35px;
        color: var(--black);
        z-index: 1000;
        cursor: pointer;
    }
`;
