import React, { Component } from 'react';
import {
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import './SocialBar.css';

const FA = require('react-fontawesome')

class SocialBar extends Component {
  render() {
    return (
        <Nav pills className="social-bar" >
            <NavItem>
                <NavLink href="/">
                <FA name='home' size="2x" />
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink target="_blank" href="http://facebook.com/perceu.bertoletti">
                <FA name='facebook' size="2x" />
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink target="_blank" href="http://github.com/perceu">
                <FA name='github' size="2x" />
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink target="_blank" href="http://twitter.com/perceuLo">
                <FA name='twitter' size="2x" />
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink target="_blank" href="http://www.linkedin.com/in/perceu-bertoletti">
                <FA name='linkedin' size="2x" />
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink target="_blank" href="mailto:perceubertoletti@gmail.com">
                <FA name='envelope' size="2x" />
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink target="_blank" href="tel:54996622121">
                <FA name='phone' size="2x" />
                </NavLink>
            </NavItem>
        </Nav>      
    );
  }
}
export default SocialBar;