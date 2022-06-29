import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    z-index: 500;
    width: 100vw;
    height: 100vh;
    .toggleIcon{
        position: absolute;
        top: 50px;
        right: -36px;
        font-size: 50px;
        color: #000000;
        cursor: pointer;
    }
`;
export const Footer = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    .crossIcon{
        font-size: 40px;
        color: #000000;
        z-index: 1000;
        cursor: pointer;
    }
`;
