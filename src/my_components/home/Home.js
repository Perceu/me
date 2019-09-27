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
                        <h1 className="title-right" ><strong> Quem eu sou ?</strong></h1>
                        <hr />
                        <p>
                            Desenvolvedor desde 2013, apaixonado por tecnologia, apoiador de comunidades open-source.
                        </p>
                        <p>
                            Instrutor, Consultor e Palestrante nas horas vagas, empreendedor em tempo integral.
                        </p>
                        <p>
                            Nerd de carteirinha, adoro cinema, cultura pop/nerd, estou sempre vagando entre 2 mundos, o nerd e o geek,
                            quando não estou estudando algo da minha profissão estou num mundo de fantasia/ficção
                        </p>
                        <p>
                            Adoto solucionar problemas e gosto de de ser desafiado, mas odeio confrontos, tem um problema? vamos resolver juntos!
                        </p>
                        <p>
                            Se quiser conversar todos os contatos estão no site!
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