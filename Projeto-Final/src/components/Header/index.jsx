import React, { useState } from "react";
import { LogoImage, NavbarBrandLink, InputProcurar } from './styles';
import logoDefault from '../../assets/Logos/popcornTv-logo.svg';
import logoHover from '../../assets/Logos/popcornTv-logo-hovered.svg';

const Header = () => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const logoSrc = isHovered ? logoHover : logoDefault;

    return (

        <nav
            className="navbar navbar-expand-lg bg-body-tertiary w-100 rounded-pill p-1 m-4 opacity-85">
            <div className="container">
                <NavbarBrandLink
                    href="/home"
                    aria-label="Logo-PopcornTv"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <LogoImage src={logoSrc} />
                </NavbarBrandLink>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/maratonas">Maratonas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/filmes">Filmes Populares</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <InputProcurar
                            className="form-control me-2 focus-ring"
                            type="search"
                            placeholder="Procure por nome"
                            aria-label="Search" />
                        <button
                            className="btn btn-outline-success"
                            type="submit"
                            style={{
                                '--bs-btn-bg': '#5333c1',
                                '--bs-btn-color': '#fff',
                                '--bs-btn-hover-color': '#fff',
                                '--bs-btn-hover-bg': '#362589',
                            }}>
                            Search
                        </button>

                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Header;