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
                    <FA name='home' size="2x"/>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink target="_blank" href="http://facebook.com/perceu.bertoletti">
                    <FA name='facebook' size="2x"/>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink target="_blank" href="http://github.com/perceu">
                    <FA name='github' size="2x"/>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink target="_blank" href="https://www.instagram.com/perceubertoletti/">
                    <FA name='instagram' size="2x"/>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink target="_blank" href="https://perceubertoletti.blogspot.com.br/">
                    <FA name='google-plus-square' size="2x"/>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink target="_blank" href="http://twitter.com/perceuLo">
                    <FA name='twitter' size="2x"/>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink target="_blank" href="http://www.linkedin.com/in/perceu-bertoletti">
                <FA name='linkedin' size="2x"/>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink target="_blank" href="mailto:perceubertoletti@gmail.com">
                    <FA name='envelope' /> perceubertoletti@gmail.com <br />
                </NavLink>
                <NavLink target="_blank" href="tel:54996622121">
                    <FA name='phone' /> (54) 99662-2121 <br />
                </NavLink>
            </NavItem>
        </Nav>      
    );
  }
}
export default SocialBar;