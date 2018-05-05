import React, { Component } from 'react';
import {
    Row,
    Col,
    CardTitle,
    CardText,
    Container,
    Card,
    Badge,
} from 'reactstrap';
import SocialBar from './../social_bar/SocialBar';

class Contacts extends Component {
    render() {
        return (
            <Container>
                <h1>Quer conversar ?</h1>
                <hr/>
                <p>
                    Entre em contato comigo atravez de qualquer rede social, sou amigavel.
                </p>
                <SocialBar />
            </Container>
        );
    }
}
export default Contacts;