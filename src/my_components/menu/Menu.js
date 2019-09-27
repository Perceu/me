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
                <Link to={process.env.PUBLIC_URL + '/'} onClick={this.scrollDown}>
                    <li className="active-menu menu-item">
                        <span className="menu-icon">
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                        Biografia
                    </li>
                </Link>
                <Link to={process.env.PUBLIC_URL + '/professional'} onClick={this.scrollDown}>
                    <li className="active-menu menu-item">
                        <span className="menu-icon">
                            <FontAwesomeIcon icon={faAddressBook} />
                        </span>
                         Ficha Técnica
                    </li>
                </Link>
                <Link to={process.env.PUBLIC_URL + '/personal'} onClick={this.scrollDown}>
                    <li className="active-menu menu-item">
                        <span className="menu-icon">
                            <FontAwesomeIcon icon={faAddressCard} />
                        </span>
                         Ficha Pessoal
                    </li>
                </Link>
                <Link to={process.env.PUBLIC_URL + '/contacts'} onClick={this.scrollDown}>
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