import styled from 'styled-components'

export const Container = styled.div`
    height: auto;
    min-height: 100vh;
    padding: 10px 1rem;
    .body{
        margin-top: 2rem;
        .projects{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
            align-items: center;
            justify-content: center;
            justify-content: center;
            .project{
                .banner{
                    object-fit: cover;
                }
            }
        }
        @media only screen and (max-width: 800px){
            .projects{
                grid-template-columns: repeat(2, 1fr);
            }
        }
        @media only screen and (max-width: 600px){
            .projects{
                grid-template-columns: repeat(1, 1fr);
            }
        }
    }
`;