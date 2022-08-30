import styled from 'styled-components'

export const Container = styled.div``;
export const SocialIcons = styled.div`
    display: flex;
    gap: 1rem;
    font-size: 1.5rem;
    justify-content: end;
    padding: 10px 1rem;
    position: absolute;
    width: 100%;
    z-index: 1;
    .icon{
        cursor: pointer;
        color: var(--white);
        font-size: 25px;
    }
`;
export const Home = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    position: absolute;
    .sortInfo{
        padding: 0 1rem;
        text-align: center;
        h1{
            font-size: 2.7rem;
            color: var(--white);
            font-weight: bold;
            line-height: 1.3;
            span{
                color:  var(--pri-color);
            }
        }
        .infoBtn{
            color: var(--white);
            margin-top: 15px;
            border: 1.5px solid var(--white);
        }
        @media only screen and (max-width: 600px) {
        h1{
            font-size: 1.8rem;
        }   
    }
    }
`;
export const About = styled.div`
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
export const Projects = styled.div`
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
export const Experience = styled.div`
    height: auto;
    min-height: 100vh;
    padding: 10px 1rem;
    .body{
        margin-top: 6rem;

    }
`;