import styled from 'styled-components'

export const Container = styled.div``;
export const SocialIcons = styled.div`
    display: flex;
    gap: 1rem;
    font-size: 1.5rem;
    justify-content: end;
    padding: 10px 1rem;
    position: relative;
    .icon{
        cursor: pointer;
        color: var(--white);
        font-size: 25px;
    }
`;
export const SortInfo = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    /* height: 70vh; */
    padding: 0 1rem;
    text-align: center;
    h1{
        font-size: 2.7rem;
        color: var(--white);
        font-weight: bold;
        line-height: 1.2;
        span{
            color:  var(--pri-color);
        }
    }
    @media only screen and (max-width: 600px) {
        h1{
            font-size: 1.8rem;
        }   
    }
`;