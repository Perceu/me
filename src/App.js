import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Badge,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Jumbotron,
  ListGroup, 
  ListGroupItem
} from 'reactstrap';
class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar fixed='top' role color="light" light expand="md">
          <NavbarBrand href="/">Perfil</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#me">Sobre Min</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact">Contatos</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <br />
        <br />
        <br />
        <div className="text-center container">
          <h1>Perceu Gonçalves Bertoletti</h1>
          <img src="/img/foto.jpg" className="rounded img-fluid" alt=""/>
          <section>
            <h1>Como me defino</h1>
            <p>
              Primeiramente como humano, com falhas e embusca de aprimoramento, depois como nerd pois adoro filmes e series jogos eletronicos.
              Amante do open-source, ubuntu user a algum tempo 
            </p>
            <p>
              Mas tambem sou desenvolvedor com 4 anos de experiencia na area de web, 
              criando sistemas de diversas areas, adoro simplicidade e inovação sempre enxergando a todos como parceiros 
              numa jornada para solucionar problemas.
            </p>
          </section>
        </div>
        <div className='container'>
          <section>
            <h1 className="text-center">Habilidades</h1>
            <h2>Linguagens Preferidas</h2>
            <p>
              <Badge color="primary" pill>Python</Badge>&nbsp;
              <Badge color="primary" pill>PHP</Badge>&nbsp;
              <Badge color="primary" pill>Javascript</Badge>&nbsp;
              <Badge color="warning" pill>CSS</Badge>&nbsp;
              <Badge color="warning" pill>HTML</Badge>&nbsp;
            </p>
            <h2>Linguagens com curiosidade</h2>
            <p>
              <Badge color="primary" pill>Ruby</Badge>&nbsp;
              <Badge color="primary" pill>GoLang</Badge>&nbsp;
              <Badge color="warning" pill>Latex</Badge>&nbsp;
              <Badge color="warning" pill>Markdown</Badge>&nbsp;
            </p>
            <h2>Bancos de dados</h2>
            <p>
              <Badge color="dark" pill>Mysql</Badge>&nbsp;
              <Badge color="dark" pill>Postgress</Badge>&nbsp;
              <Badge color="dark" pill>Mongo</Badge>&nbsp;
              <Badge color="dark" pill>RabbitMQ</Badge>&nbsp;
            </p>
            <h2>Dev ops</h2>
            <p>
              <Badge color="danger" pill>Ansible</Badge>&nbsp;
              <Badge color="danger" pill>Docker</Badge>&nbsp;
              <Badge color="danger" pill>Shell</Badge>&nbsp;
            </p>
            <h2>Frameworks que conheço</h2>
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
            <h2>Adepto</h2>
            <p>
              <Badge color="success" pill>Clean code</Badge>&nbsp;
              <Badge color="success" pill>Live Software</Badge>&nbsp;
              <Badge color="success" pill>Small Acts</Badge>&nbsp;
            </p>
          </section>
        </div >
        <div className='container'>
          <Jumbotron>
              <h1>Contatos</h1>
              <ListGroup>
                <ListGroupItem>
                  <a href='http://facebook.com/perceu.bertoletti'>Facebook</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href='http://twitter.com/perceuLo'>Twitter</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href='http://www.linkedin.com/in/perceu-bertoletti'>Linkedin</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href='mailto:perceubertoletti@gmail.com'>perceubertoletti@gmail.com</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href='tel:54996622121'>(54) 99662-2121</a>
                </ListGroupItem>
              </ListGroup>
          </Jumbotron>
        </div >
      </div >
    );
  }
}

export default App;
