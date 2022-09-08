import styled from 'styled-components'

export const Container = styled.div`
    height: auto;
    min-height: 100vh;
    padding: 10px 1rem;
    .body{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
        align-items: center;
        justify-items: center;
        margin-top: 5rem;
        row-gap: 2rem;
        .avatar{
            width: 20rem;
        }
        .info{
            h1{
                font-size: 2.7rem;
                font-weight: bold;
                line-height: 1.3;
                span{
                    color:  var(--sec-color);
                }
            }
            p span {
                font-weight: bold;
            }
        }
        @media only screen and (max-width: 800px){
            grid-template-columns: 1fr;
            .info{
                h1{
                    font-size: 1.8rem;
                }
            } 
        }
    }
`;