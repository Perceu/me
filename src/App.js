import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './my_components/home/Home';
import Menu from './my_components/menu/Menu';
import Contacts from './my_components/contacts/Contacts';
import Personal from './my_components/infos/Personal';
import Professional from './my_components/infos/Professional';
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
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faArrowUp from '@fortawesome/fontawesome-free-solid/faArrowUp'

class App extends Component {
  moveUp(){
    window.scrollTo(0, 0); 
  }
  render() {
    return (
      <Router>
      <Row>
        <Col id="left-container"md="3">
          <div className="perfil-container">
            <section className="text-center" >
              <img src={process.env.PUBLIC_URL + '/img/foto.jpg'} className="rounded-circle img-fluid perfil-img" alt=""/>
                <h1 className="name">
                    Perceu Bertoletti  <br />
                    <small> Web Developer </small>
                </h1>
            </section>
            <Menu />
          </div>
        </Col >
        <Col id="right-container" md="9">
            <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
            <Route exact path={process.env.PUBLIC_URL + '/contacts'} component={Contacts} />
            <Route exact path={process.env.PUBLIC_URL + '/personal'} component={Personal} />
            <Route exact path={process.env.PUBLIC_URL + '/professional'} component={Professional} />
        </Col>
        <button className="goto_up btn btn-small btn-dark d-block d-sm-none" onClick={this.moveUp}>
          <FontAwesomeIcon  icon={faArrowUp}/>
        </button>
      </Row>
      </Router>
    );
  }
}

export default App;
