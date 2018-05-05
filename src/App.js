import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './my_components/home/Home';
import Menu from './my_components/menu/Menu';
import Contacts from './my_components/contacts/Contacts';
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
      <Router>
      <Row>
        <Col id="left-container"md="3">
          <div className="perfil-container">
            <section className="text-center" >
              <img src="/img/foto.jpg" className="rounded-circle img-fluid perfil-img" alt=""/>
                <h1 className="name">
                    Perceu Bertoletti<br />
                    <small> Web Developer </small>
                </h1>
            </section>
            <Menu />
          </div>
        </Col >
        <Col id="right-container" md="9">
            <Route exact path="/" component={Home} />
            <Route exact path="/contacts" component={Contacts} />
        </Col>
      </Row>
      </Router>
    );
  }
}

export default App;
