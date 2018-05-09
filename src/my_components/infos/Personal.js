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

class Personal extends Component {
    render() {
        return (
            <Row>
                <Col md="12">
                    <h1 className="title-right" ><strong> Informações Pessoais</strong></h1>
                    <hr />
                </Col>
            </Row>
        );
    }
}
export default Personal;