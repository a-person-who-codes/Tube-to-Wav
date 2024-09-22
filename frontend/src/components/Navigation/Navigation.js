import React from 'react';
import { NavLink } from 'react-router-dom';
// Components
import Home from '../Home/Home';
// React
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Soundwave from 'react-bootstrap-icons/dist/icons/soundwave';
// CSS
import './Navigation.css'

function Navigation() {


    return (
        <Navbar className='navigation-container'>
            <Container fluid>
                <Navbar.Brand className='navigation-brand' as={NavLink} to='/'>
                    <Soundwave />
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Navigation;