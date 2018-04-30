import React, { Component } from 'react';
import SocialBar from './my_components/social_bar/SocialBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Badge,
  Card,
  Row,
  Col,
  CardTitle,
  CardText,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Jumbotron,
  ListGroup, 
  ListGroupItem
} from 'reactstrap';

const FA = require('react-fontawesome')

class App extends Component {
  render() {
    return (
      <div className="row">
        <Col md="3">
          <div className="container perfil-container">
            <section className="text-center" >
              <img src="me/img/foto.jpg" className="rounded-circle img-fluid perfil-img" alt=""/>
              <h3>Perceu Gonçalves Bertoletti</h3>
              <SocialBar /> 
            </section>
            <section className="sobre">
              <strong>Sobre Mim:</strong><br></br>
              <p>
                Nasci em Porto Alegre, me criei na região de gravatai, a mais ou menos 9 anos moro na região da serra gaucha mais 
                precisamente na volta de Caxias do sul.
              </p>
              <p>
                Trabalho com desenvolvimento de sistema desde 2013, adepto a software livre, trabalhei por 2 anos na infraestrutura 
                de ti, antes do desenvolvimento.
              </p>
              <p>
                Quer saber mais de mim ?<br />
                <a href="#">Sim, mas so profissionalmente.</a><br />
                <a href="#">Sim, quero lhe conhecer.</a><br />
                <a href="#">Não</a><br />
              </p>
              <p>
              </p>
            </section>
            <section className="sobre">
              <strong>Hobbies:</strong><br></br>
              <p>
                <a href="#">Video Games</a>, <a href="#">Filmes</a>, <a href="#">Quadrinhos/Mangas</a>, <a href="#">Livros</a>, etc
              </p>
            </section>
          </div>
        </Col >
        <Col md="8">
          <Container>
            <h2 className="text-center">Principais gostos</h2>
            <Row className="caracteristicas">
              <Col md="3">
                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                  <CardTitle>Pessoas</CardTitle>
                  <CardText>
                    Procuro sempre tentar entender as pessoas e incorporar isso acima da tecnologia.
                  </CardText>
                </Card>
              </Col>
              <Col md="3">
                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                  <CardTitle>Organização</CardTitle>
                  <CardText>
                    Tudo tem que ser claro, objetivo, quando as coisas estão nubladas tende à vir um temporal pela frente.
                  </CardText>
                </Card>
              </Col>
              <Col md="3">
                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                  <CardTitle>Padrões de Projeto</CardTitle>
                  <CardText>
                    Não pode ser um dogma, deve ser flexivel a ponto de poder melhorar, mas deve existir.
                  </CardText>
                </Card>
              </Col>
              <Col md="3">
                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                  <CardTitle>Valor</CardTitle>
                  <CardText>
                    É nesse ponto que tudo fica diferente!
                  </CardText>
                </Card>
              </Col>
            </Row>
            <h2 className="text-center">Habilidades</h2>
            <Row>
              <h2>Linguagens Preferidas</h2>
            </Row>
            <Row>
              <p>
                <Badge color="primary" pill>Python</Badge>&nbsp;
                <Badge color="primary" pill>PHP</Badge>&nbsp;
                <Badge color="primary" pill>Javascript</Badge>&nbsp;
                <Badge color="warning" pill>CSS</Badge>&nbsp;
                <Badge color="warning" pill>HTML</Badge>&nbsp;
              </p>
            </Row>
            <Row>
              <h2>Linguagens com curiosidade</h2>
            </Row>
            <Row>
              <p>
                <Badge color="primary" pill>Ruby</Badge>&nbsp;
                <Badge color="primary" pill>GoLang</Badge>&nbsp;
                <Badge color="warning" pill>Latex</Badge>&nbsp;
                <Badge color="warning" pill>Markdown</Badge>&nbsp;
              </p>
            </Row>
            <Row>
              <h2>Bancos de dados</h2>
            </Row>
            <Row>              
              <p>
                <Badge color="dark" pill>Mysql</Badge>&nbsp;
                <Badge color="dark" pill>Postgress</Badge>&nbsp;
                <Badge color="dark" pill>Mongo</Badge>&nbsp;
                <Badge color="dark" pill>RabbitMQ</Badge>&nbsp;
              </p>
            </Row>
            <Row>
              <h2>Dev ops</h2>
            </Row>
            <Row>
              <p>
                <Badge color="danger" pill>Ansible</Badge>&nbsp;
                <Badge color="danger" pill>Docker</Badge>&nbsp;
                <Badge color="danger" pill>Shell</Badge>&nbsp;
              </p>
            </Row>
            <Row>
              <h2>Frameworks que conheço</h2>
            </Row>
            <Row>
              <p>
                <Badge color="info" pill>Codeigniter</Badge>&nbsp;
                <Badge color="info" pill>Laravel</Badge>&nbsp;
                <Badge color="info" pill>Slim</Badge>&nbsp;
                <Badge color="info" pill>Django</Badge>&nbsp;
                <Badge color="info" pill>Flask</Badge>&nbsp;
                <Badge color="info" pill>Tornado</Badge>&nbsp;
                <Badge color="secondary" pill>React</Badge>&nbsp;
                <Badge color="secondary" pill>Bootstrap</Badge>&nbsp;
                <Badge color="secondary" pill>jQuery</Badge>&nbsp;
              </p>
            </Row>
            <Row>
              <h2>Adepto</h2><br />
            </Row>
            <Row>
              <p>
                <Badge color="success" pill>Clean code</Badge>&nbsp;
                <Badge color="success" pill>Live Software</Badge>&nbsp;
                <Badge color="success" pill>Small Acts</Badge>&nbsp;
              </p>
            </Row>
          </Container>
        </Col>
      </div>
    );
  }
}

export default App;
