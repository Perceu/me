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


class Home extends Component {
    render() {
        return (
            <Row>
                <Col md="6">
                    <Col md="12">
                        <h1 className="title-right" ><strong> Biografia</strong></h1>
                        <hr />
                        <p>
                            Sou desenvolvedor web a alguns anos, tenho expericia na criação de sistemas. Adoro filmes, series, jogos, sou do tempo que ser nerd era pejorativo.
                        </p>
                        <p>
                            Gosto da cultura nerd, gosto de filosofar sobre a vida o universo e tudo mais, rapidamente tenho opinião sobre qualquer assunto,
                            mesmo que em pouco tempo veja que minha opinião inicial estava errada.
                        </p>
                        <p>
                            Normalmente falo sem pensar
                        </p>
                        <p>
                            Em busca de um objetivo novo a cada conquida to anterior!
                        </p>
                        <p>
                            <strong> Frases Favoritas :</strong><br />
                            <ul>
                                <li>Desculpa!</li>
                                <li>Qual o mal que lhe aflige ?</li>
                                <li>Posso ajudar ?</li>
                            </ul>
                        </p>
                    </Col>  
                </Col>
                <Col md="6">
                    <img src={process.env.PUBLIC_URL + '/img/foto_2.jpg'} id="home-image" />
                </Col>
            </Row>
        );
    }
}
export default Home;