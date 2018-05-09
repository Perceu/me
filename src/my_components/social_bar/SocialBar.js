import React, { Component } from 'react';
import {
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import './SocialBar.css';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import faCheckSquare from '@fortawesome/fontawesome-free-solid/faCheckSquare'


class SocialBar extends Component {
  render() {
    return (
        <Nav pills className="social-bar" >
            <NavItem>
                <NavLink target="_blank" href="http://facebook.com/perceu.bertoletti">
                    <FontAwesomeIcon icon={["fab", "facebook"]} size="3x" />
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink target="_blank" href="http://github.com/perceu">
                    <FontAwesomeIcon icon={["fab", "github"]} size="3x" />
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink target="_blank" href="https://www.instagram.com/perceubertoletti/">
                    <FontAwesomeIcon icon={["fab", "instagram"]} size="3x" />
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink target="_blank" href="https://perceubertoletti.blogspot.com.br/">
                    <FontAwesomeIcon icon={["fab", "blogger"]} size="3x" />
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink target="_blank" href="http://twitter.com/perceuLo">
                    <FontAwesomeIcon icon={["fab", "twitter"]} size="3x" />
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink target="_blank" href="http://www.linkedin.com/in/perceu-bertoletti">
                    <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" />
                </NavLink>
            </NavItem>
        </Nav>      
    );
  }
}
export default SocialBar;