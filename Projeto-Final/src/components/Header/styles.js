import styled from "styled-components";

export const HeaderContainer = styled.header`
    maxWidth: 100vw;
    width: 100%;
    height: 7.5rem;
    background-color: #010409;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: 0.3px solid #aba6a6ff;
    font-family: 
`;

export const BlocoProfile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
`

export const Logo = styled.div`
    display: flex;
    color: white;
    cursor: pointer;
    width: 2.5rem;
`;

export const BlocoActions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.2rem;
`
export const FilterButtons = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.2rem;
    padding: 10px 15px;
    background-color: #272727ff;
    border: 0.03rem solid #929292ff;
    border-radius: 6px;
    font-size: 16px;
    color:#fff;
`

export const LinhaSuperior = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 50%;
    margin: 1rem;
`


export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 25px;
    margin: 0 0 10rem 1rem;
    font-weight: 400;
`;

export const NavItem = styled.span`
    position: relative;
    transition: background-color 0.3s ease;

    &:hover {
    background-color: #ffffff33; 
    border-radius: 4px;
    cursor: pointer;
    }
`;

export const ProfileImage = styled.img`
    display: flex;
    width: 2rem;
    border-radius: 50%;
    cursor: pointer;
`;

export const Span = styled.span`
    border: 0.1rem solid #929292ff;
    padding: 0.4rem;
    border-radius: 0.5rem;
    width: 2rem;
    height: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const FindButton = styled.input`
    padding: 10px 15px;
    background-color: #272727ff;
    border: 0.03rem solid #929292ff;
    border-radius: 6px;
    font-size: 16px;
    width: 55%;
    transition: border-color 0.3s ease-in-out;

    &::placeholder {
    color: #9a9a9a;
    }
`
