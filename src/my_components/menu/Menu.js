import React, { Component } from 'react';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faUser from '@fortawesome/fontawesome-free-solid/faUser'
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope'
import { Link } from "react-router-dom";

class Menu extends Component {
    render() {
        return (
            <ul className="menu">
                <Link to="/">
                    <li className="active-menu menu-item">
                        <FontAwesomeIcon icon={faUser} /> Sobre Min
                    </li>
                </Link>
                <Link to="/contacts">
                    <li className="active-menu menu-item">
                        <FontAwesomeIcon icon={faEnvelope} /> Contatos
                    </li>
                </Link>
            </ul>
        );
    }
}
export default Menu;