import React from "react";
import { LogoImage, NavbarBrandLink, InputProcurar } from './styles';

const Header = ({ searchTerm = '', onSearchChange = () => {} }) => {

    const handleChange = (e) => {
        const val = e.target.value;
        onSearchChange(val);
        console.log('Header onChange:', val);
    };

    return (

        <nav
    // Ajustes:
    // 1. Removi 'p-1' (padding geral) e usei 'py-2' (padding vertical) e 'px-3' (padding horizontal)
    // 2. Mantive 'navbar-expand-lg' para que o botão de toggle apareça em telas médias e pequenas
    className="navbar navbar-expand-lg bg-body-tertiary w-100 rounded-pill py-2 px-3 m-4 opacity-85"
>
    <div className="container-fluid"> {/* Use container-fluid para maximizar o espaço interno */}
        <NavbarBrandLink
            href="/home"
            aria-label="Logo-PopcornTv"
        >
            <LogoImage />
        </NavbarBrandLink>

        {/* O botão de toggle está correto para o comportamento responsivo */}
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerPopcorn"
            aria-controls="navbarTogglerPopcorn"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Atenção: O ID aqui deve ser o mesmo do data-bs-target do botão! */}
        <div className="collapse navbar-collapse" id="navbarTogglerPopcorn">
            
            {/* O 'me-auto' empurra os links para a esquerda e a busca para a direita */}
            <ul className="navbar-nav me-auto mb-1 mb-lg-0">                        
                <li className="nav-item">
                    <a className="nav-link" href="/filmes">Filmes Populares</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/filmes">Séries</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/maratonas">Maratonas</a>
                </li>
            </ul>
            
            {/* Formulário de Busca */}
            <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
                <InputProcurar
                    className="form-control me-2 focus-ring"
                    type="search"
                    placeholder="Procure por nome"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={handleChange} />
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
        // <nav
        //     className="navbar navbar-expand-lg bg-body-tertiary w-100 rounded-pill p-1 m-4 opacity-85">
        //     <div className="container">
        //         <NavbarBrandLink
        //             href="/home"
        //             aria-label="Logo-PopcornTv"
        //         >
                    
        //             <LogoImage />
        //         </NavbarBrandLink>

        //         <button
        //             className="navbar-toggler"
        //             type="button"
        //             data-bs-toggle="collapse"
        //             data-bs-target="#navbarTogglerDemo02"
        //             aria-controls="navbarTogglerDemo02"
        //             aria-expanded="false"
        //             aria-label="Toggle navigation"
        //         >
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        //             <ul className="navbar-nav me-auto mb-1 mb-lg-0">                        
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="/filmes">Filmes Populares</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="/filmes">Séries</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link active" aria-current="page" href="/maratonas">Maratonas</a>
        //                 </li>
        //             </ul>
        //             <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
        //                 <InputProcurar
        //                     className="form-control me-2 focus-ring"
        //                     type="search"
        //                     placeholder="Procure por nome"
        //                     aria-label="Search"
        //                     value={searchTerm}
        //                     onChange={handleChange} />
        //                 <button
        //                     className="btn btn-outline-success"
        //                     type="submit"
        //                     style={{
        //                         '--bs-btn-bg': '#5333c1',
        //                         '--bs-btn-color': '#fff',
        //                         '--bs-btn-hover-color': '#fff',
        //                         '--bs-btn-hover-bg': '#362589',
        //                     }}>
        //                     Search
        //                 </button>

        //             </form>
        //         </div>
        //     </div>
        // </nav>
    );
};

export default Header;