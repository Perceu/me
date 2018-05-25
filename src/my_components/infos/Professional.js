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
                    <h1 className="title-right" ><strong> Informações Profissinais</strong></h1>
                    <hr />
                    <p>
                        Me chamo Perceu Gonçalves Bertoletti, nascido em 1991, na região de porto alegre
                        trabalho com desenvolvimento de software desde 2013, durante meu tempo de desenvolvedor 
                        trabalhei mais com desenvolvimento de produtos, softwares de caixinha ou sobre demanda,
                        ja trabalhei na areas de transporte e logistica, educasional para gerencias escolas, e 
                        um pouco na area financeira.
                    </p>
                    <p>
                        Tenho alguma experiência no desenvolvimento de websites, mas prefiro sistemas, 
                        não tenho graduação superior ainda, mas gosto de aprender e sou dedicado a sempre 
                        programar para outras pessoas lerem, sempre me vejo como um eterno aprendiz tenho 
                        muito a aprender ainda.
                    </p>
                    <Row>
                        <Col md="6">
                            <h2 className="title-right" ><strong> Perfil</strong></h2>
                            <hr />
                            <p>
                                Gosto de trabalhar no universo da web, estou querendo me arriscar nos applicativos
                                ainda estou estudando para onde seguir mas estou pensando em ReactNative
                            </p>
                        </Col>
                        <Col md="6">
                            <h2 className="title-right" ><strong> Minha sopa de letrinhas</strong></h2>
                            <hr />
                            <Row>
                            <Col md="6">
                            <ul>
                                <li>PHP</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>HTML</li>
                                <li>Python</li>
                                <li>VB6</li>
                            </ul>
                            </Col>
                            <Col md="6">
                            <ul>
                                <li>Codeigniter</li>
                                <li>Laravel</li>
                                <li>React</li>
                                <li>Less/Sass</li>
                                <li>Django</li>
                                <li>Flask</li>
                                <li>CakePHP</li>
                                <li>Slim</li>
                                <li>Tornado</li>
                                <li>Boostrap</li>
                                <li>MaterializeCss</li>
                                <li>jQuery</li>
                            </ul>
                            </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}
export default Professional;