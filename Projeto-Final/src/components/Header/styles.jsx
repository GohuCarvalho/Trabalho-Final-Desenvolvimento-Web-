import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logoDefault from '../../assets/Logos/popcornTv-logo.svg';
import logoHover from '../../assets/Logos/popcornTv-logo-hovered.svg';

export const LogoImage = styled.span`
    display: inline-block;
    width: 8rem;
    height: 7rem;

    background-image: url(${logoDefault});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 8px;

    transition: background-image 0.3s ease-in-out;
`;

export const NavbarBrandLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;

    &:hover ${LogoImage} {
        background-image: url(${logoHover});
    }
`;

export const InputProcurar = styled.input`
    display: flex;
    align-items: center;

    
`;