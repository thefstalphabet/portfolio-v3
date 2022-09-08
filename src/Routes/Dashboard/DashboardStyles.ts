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
