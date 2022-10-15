import styled from 'styled-components'

export const Container = styled.div`
    margin-bottom: 1rem;
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
            .form{
                display: grid;
                gap: 1rem
            }
        }
        @media only screen and (max-width: 1000px){
            grid-template-columns: 1fr;          
        }
    }
`;
