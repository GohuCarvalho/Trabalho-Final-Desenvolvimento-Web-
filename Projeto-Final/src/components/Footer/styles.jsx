import styled from 'styled-components';
import logoDefault from '../../assets/Logos/popcornTv-logo-hovered.svg';

const mobileBreakpoint = '768px';

export const FooterContainer = styled.footer`
    background-color: #5f5f5fff;
    color: #ffffff;
    margin-top: 50px;
    width: 100%;
`;

export const FooterContent = styled.div`
    width:80%;
    align-items: center;
    margin: 0 auto;
    padding: 5rem;
    display: flex;
    justify-content: space-between;
    gap: 30px;

    @media (max-width: ${mobileBreakpoint}) {
        flex-direction: column;
        text-align: center;
        gap: 20px;
        padding: 2rem;
    }
`;

export const LogoWrapper = styled.div`
    width: 17rem; 
    height: 7rem; 
    margin-bottom: 10px;
    display: inline-block;

    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 8px;
`;

export const SiteMap = styled.nav`
    width: 50%;
    align-items: flex-start;
    padding: 0.1rem;

    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: center;
    
    @media (max-width: ${mobileBreakpoint}) {
        align-items: center;
        text-align: center;

        width: 100%;
    }
`;

export const MapTitle = styled.h4`
    font-size: 1.3rem;
    margin-bottom: 10px;
    font-weight: bold;
    font-family: "
`;

export const MapLink = styled.a`
    color: #fff;
    text-decoration: none;
    font-size: 0.95rem;
    margin-bottom: 0.8rem;
    transition: all 0.3s ease-in-out;
    

    &:link,
    &:visited,
    &:active {
        border: 0.1rem solid transparent;
        padding: 0.2rem 1rem;
        margin: 0.1rem;
        border-radius: 5rem;
        color: #fff;
        }
        &:hover {
        background-color: #5333c1;
        color: #fff;

    }
`;

export const CopyrightTxt = styled.p`
    font-size: 0.9rem;
    padding-bottom: 3rem;
    
    @media (max-width: ${mobileBreakpoint}) {
        font-size: 0.8rem;
    }
`;