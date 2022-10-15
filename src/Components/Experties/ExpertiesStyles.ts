import styled from 'styled-components'

export const Container = styled.div`
    margin-bottom: 1rem;
    padding: 10px 1rem;
    .experties{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        align-items: center;
        justify-content: center;
        justify-content: center;
        margin-top: 3rem;
        .card{
            height: 100%;
            text-align: center;
            h2{
                margin-top: 1rem;
            }
            img{
                width: 6rem;
                object-fit: cover;
            }
        }
        @media only screen and (max-width: 800px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media only screen and (max-width: 600px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;