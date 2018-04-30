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
                <FA name='home' />
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink target="_blank" href="http://facebook.com/perceu.bertoletti">
                <FA name='facebook' />
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink target="_blank" href="http://github.com/perceu">
                <FA name='github' />
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink target="_blank" href="https://www.instagram.com/perceubertoletti/">
                <FA name='instagram' />
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink target="_blank" href="https://perceubertoletti.blogspot.com.br/">
                    <FA name='google-plus-square' />
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink target="_blank" href="http://twitter.com/perceuLo">
                <FA name='twitter' />
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink target="_blank" href="http://www.linkedin.com/in/perceu-bertoletti">
                <FA name='linkedin' />
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink target="_blank" href="mailto:perceubertoletti@gmail.com">
                <FA name='envelope' />
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