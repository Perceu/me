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

class Professional extends Component {
    render() {
        return (
            <Row>
                <Col md="12">
                    <Col md="12">
                        <h1 className="title-right title" ><strong> Informações Profissionais</strong></h1>
                        <hr />
                        <p>
                            Em Reformas.
                        </p>
                    </Col>
                </Col>
            </Row>
        );
    }
}
export default Professional;