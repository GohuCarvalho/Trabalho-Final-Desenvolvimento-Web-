import styled from 'styled-components';
import logoDefault from '../../assets/Logos/logo-pop.png';
import logoHover from '../../assets/Logos/logo-pop-hovered.png';

export const LogoImage = styled.span`
    display: inline-block;
    width: 5rem;
    height: 3rem;

    background-image: url(${logoDefault});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 8px;

    transition: background-image 0.3s ease-in-out;
`;

export const NavbarBrandLink = styled.a`
    display: flex;
    align-items: center;

    &:hover ${LogoImage} {
        background-image: url(${logoHover});
    }
`;

export const InputProcurar = styled.input`
    display: flex;
    align-items: center;

    
`;