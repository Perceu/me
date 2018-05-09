import React, { Component } from 'react';
import {
    Row,
    Col,
    CardTitle,
    CardText,
    Container,
    Card,
    Badge,
    NavLink,
} from 'reactstrap';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone'
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope'
import SocialBar from './../social_bar/SocialBar';

class Contacts extends Component {
    render() {
        return (
            <Row>
                <Col md="12">
                    <h1 className="title-right" ><strong> Quer conversar ?</strong></h1>
                    <hr />
                    <p>
                        Entre em contato comigo atravez de qualquer rede social, sou amigavel.
                    </p>
                    <SocialBar />
                    <hr/>
                    <p>
                        Para contatos de outros fins me encontre por email ou telefone.
                    </p>
                    <NavLink target="_blank" href="mailto:perceubertoletti@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} /> perceubertoletti@gmail.com <br />
                    </NavLink>
                    <NavLink target="_blank" href="tel:54996622121">
                        <FontAwesomeIcon icon={faPhone} />  (54) 99662-2121 <br />
                    </NavLink>
                </Col>
            </Row>
        );
    }
}
export default Contacts;