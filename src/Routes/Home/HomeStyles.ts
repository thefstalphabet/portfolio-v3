import styled from 'styled-components'

export const Container = styled.div``;
export const Body = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    gap: 0.5rem;
    .akashImg{
        width: 22rem;
    }
    .sortInfo{
        h1{
            font-size: 4rem;
        }
        .sortInfoBtns{
            margin-top: 1rem;
            display: flex;
            gap: 1rem;
        }
    }
    @media only screen and (max-width: 600px) {
        grid-template-columns: 1fr; 
        .akashImg{
            width: 19rem;
        } 
        .sortInfo{
        h1{
            font-size: 24px;
        }
    } 
    }
`;