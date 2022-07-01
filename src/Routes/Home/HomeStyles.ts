import styled from 'styled-components'

export const Container = styled.div``;
export const Body = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    gap: 0.5rem;
    .akashImg{
        width: 23rem;
    }
    .sortInfo{
        h1{
            font-size: 5rem;
        }
    }
    @media only screen and (max-width: 600px) {
        grid-template-columns: 1fr;  
        .sortInfo{
        h1{
            font-size: 24px;
        }
    } 
    }
`;