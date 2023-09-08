import React from 'react'
import { Navbar,Nav,NavDropdown, NavbarBrand, NavLink } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate()
  return (
    <Navbar collapseOnSelect expand='lg'  bg='warning' >
      <NavbarBrand as={NavLink} href='/'>Vuelele</NavbarBrand>
      <NavbarToggle aria-controls='responsive-navbar-nav'/>
      <NavbarCollapse id='responsive-navbar-nav'>
        <Nav className='ms-auto'></Nav>
        <Nav>
          <NavDropdown title='Admin'>
            <NavDropdown.Item as={NavLink} href='/admin/users'>usuarios</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} href='/admin/provedores'>Provedores</NavDropdown.Item>
          </NavDropdown>
          <NavLink onClick={() => navigate('/reservarvuelo')} >Vuelos</NavLink>
          <NavLink onClick={() => navigate('/reservarcamion')} >Camiones</NavLink>
          <NavLink onClick={() => navigate('/login')} >Inicio Sesion</NavLink>
          <NavLink onClick={() => navigate('/register')}>Registro</NavLink>
          <NavLink onClick={() => navigate('/perfil')}>Perfil</NavLink>
        </Nav> 
      </NavbarCollapse>
    </Navbar>
  )
}