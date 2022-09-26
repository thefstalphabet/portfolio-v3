import styled from 'styled-components'

export const Container = styled.div`
    padding: 10px 1rem;
    margin-bottom: 4rem;
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
                .details{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .icons{
                        display: flex;
                        gap: 10px;
                        .icon{
                            font-size: 18px;
                            color: var(--black);
                        }
                    }
                }
            }
            @media only screen and (max-width: 800px){
            grid-template-columns: repeat(2, 1fr);          
            }
            @media only screen and (max-width: 600px){
                grid-template-columns: repeat(1, 1fr);
            }
        }
    }
`;