import styled from 'styled-components';
import logoDefault from '../../assets/Logos/popcornTv-logo.svg';
import logoHover from '../../assets/Logos/popcornTv-logo-hovered.svg';

export const MeuMenuColapsado = styled.div`
    border-radius: 1rem;
    
    @media (max-width: 992px) {
        border-radius: 0.5rem;
    }
`;
export const ContainerFluid = styled.span`
    width: 40%
`;

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