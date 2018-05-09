import React, { Component } from 'react';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faUser from '@fortawesome/fontawesome-free-solid/faUser'
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope'
import faAddressCard from '@fortawesome/fontawesome-free-solid/faAddressCard'
import faAddressBook from '@fortawesome/fontawesome-free-solid/faAddressBook'
import { Link } from "react-router-dom";

class Menu extends Component {
    render() {
        return (
            <ul className="menu">
                <Link to="/">
                    <li className="active-menu menu-item">
                        <span className="menu-icon">
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                         Sobre Mim
                    </li>
                </Link>
                <Link to="/personal">
                    <li className="active-menu menu-item">
                        <span className="menu-icon">
                            <FontAwesomeIcon icon={faAddressCard} />
                        </span>
                         Informações Pessoais
                    </li>
                </Link>
                <Link to="/professional">
                    <li className="active-menu menu-item">
                        <span className="menu-icon">
                            <FontAwesomeIcon icon={faAddressBook} />
                        </span>
                         Informações Profissionais
                    </li>
                </Link>
                <Link to="/contacts">
                    <li className="active-menu menu-item">
                        <span className="menu-icon">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                         Contatos
                    </li>
                </Link>
            </ul>
        );
    }
}
export default Menu;