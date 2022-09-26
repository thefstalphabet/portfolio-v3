import styled from 'styled-components'

export const Container = styled.div`
    height: auto;
    min-height: 100vh;
    padding: 10px 1rem;
    background-color: var(--light-gray);
    .body{
        margin-top: 2rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        row-gap: 3rem;
        column-gap: 3rem;
        div:nth-child(2){
            display: grid;
            gap: 1rem;
        }
        @media only screen and (max-width: 800px){
            grid-template-columns: 1fr;          
        }
    }
`;
