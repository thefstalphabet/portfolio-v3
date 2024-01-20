import styled from 'styled-components'

export const Container = styled.div`
    margin-bottom: 1rem;
    padding: 10px 1rem;
    .body{
        display: grid;
        grid-template-columns: 1fr 2fr;
        justify-content: center;
        align-items: center;
        justify-items: center;
        margin-top: 5rem;
        row-gap: 2rem;
        .avatar{
            width: 18rem;
        }
        .info{
            h1{
                font-size: 2.7rem;
                font-weight: bold;
                line-height: 1.3;
                margin-bottom: 1rem;
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