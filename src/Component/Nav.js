import React from 'react'
import {Navbar, Container} from 'react-bootstrap'
import logo from '../static/logo.png'

const Nav = () => {
return (
<div>
    <Navbar>
    <Container>
        <Navbar.Brand href="#home">
        <img src={logo} style={{width:"100px", height:"100px"}} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
            <strong>Welcome</strong>
        </Navbar.Text>
        </Navbar.Collapse>
    </Container>
    </Navbar>
</div>
)
}

export default Nav