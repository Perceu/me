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
                    <Col md="12">
                        <h1 className="title-right" ><strong> Informações Pessoais</strong></h1>
                    <hr />
                    <p>
                        Aqui e mais sobre minha vida e meus gostos e minhas loucuras se quer me contratar sugiro que nem leia...
                    </p>
                    <p>
                        Mas se quiser ler não tem problema, gosto dessa informalidade....
                    </p>
                    <p>
                        Se me achou por acaso e gostou do que falo va em contatos e me add para trocarmos umas ideias.
                    </p>
                    </Col>
                    <Row>
                        <Col md="6">
                            <Col md="12">
                                <h2 className="title-right" ><strong> Perfil</strong></h2>
                                <hr />
                                <p>
                                    Nasci em porto alegre, me criei na região de gravatai/cachoeirinha, 
                                    atualmente moro na serra gaucha mais precisamente em caxias do sul, 
                                    ganho a vida desenvolvendo sistemas, trabalho na area de tecnologia 
                                    desde 2011.
                                </p>
                                <p>
                                    Sou nerd de carteirinha, gosto de RPG, quadrinhos, video games, ando meio 
                                    distante agora de todo esse universo, mas ainda tento acompanhar o que consigo
                                </p>
                            </Col>
                        </Col>
                        <Col md="6">
                            <Col md="12">
                                <h2 className="title-right" ><strong> Coisas Faço</strong></h2>
                                <hr />                   
                                <ul>
                                    <li>Filmes</li>
                                    <li>Series/animes/desenhos</li>
                                    <li>Quadrinhos/mangas</li>
                                    <li>RPG</li>
                                    <li>Video Games</li>
                                    <li>Literatura fantastica</li>
                                    <li>Filosofia/ciencias(curioso só)</li>
                                    <li>Cozinho(tento)</li>
                                </ul>
                            </Col>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}
export default Personal;