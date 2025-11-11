import React from 'react';
import { Link } from 'react-router-dom';
import { BiLogOutCircle } from 'react-icons/bi';

const LogoutButton = ({ handleLogout }) => {

    return (
        <li className="nav-item">
            <Link 
                className="nav-link" 
                to="#"
                onClick={(e) => {
                    e.preventDefault();
                    handleLogout(); // AQUI ELE LIMPA O LOCALSTORAGE
                }}
                aria-label="Sair da Conta"
            >

                <span className="d-flex align-items-center gap-1">
                    <BiLogOutCircle size={20} color="currentColor" /> 
                    Sair
                </span>
            </Link>
        </li>
    );
};

export default LogoutButton;