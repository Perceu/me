import React, { Component } from 'react';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faUser from '@fortawesome/fontawesome-free-solid/faUser'
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope'
import faAddressCard from '@fortawesome/fontawesome-free-solid/faAddressCard'
import faAddressBook from '@fortawesome/fontawesome-free-solid/faAddressBook'
import { Link } from "react-router-dom";

class Menu extends Component {

    scrollDown(){
        window.scrollTo(0, window.innerHeight); 
    }

    render() {
        return (
            <ul className="menu">
                <Link to="/" onClick={this.scrollDown}>
                    <li className="active-menu menu-item">
                        <span className="menu-icon">
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                         Sobre Mim
                    </li>
                </Link>
                <Link to="/personal" onClick={this.scrollDown}>
                    <li className="active-menu menu-item">
                        <span className="menu-icon">
                            <FontAwesomeIcon icon={faAddressCard} />
                        </span>
                         Informações Pessoais
                    </li>
                </Link>
                <Link to="/professional" onClick={this.scrollDown}>
                    <li className="active-menu menu-item">
                        <span className="menu-icon">
                            <FontAwesomeIcon icon={faAddressBook} />
                        </span>
                         Informações Profissionais
                    </li>
                </Link>
                <Link to="/contacts" onClick={this.scrollDown}>
                    <li className="active-menu menu-item ">
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