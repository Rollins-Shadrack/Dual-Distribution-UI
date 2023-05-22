import React, {useState} from 'react'
import {Button, Container, Nav, Navbar, NavDropdown, Modal} from 'react-bootstrap'
import logo from '../static/logo.png'
import TypingText from '../Component/TypingText'
import {Link} from 'react-router-dom'
import './styles.css'

const Navigation = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [text, setText] = useState(['Please Login to access our shop', "Don't have an account?, Register"]);
    return (
            <Navbar style={{background:"#E2E6EC", zIndex:"1000"}} expand="lg">
        <Container>
            <Navbar.Brand href="#home" className="animate__animated animate__backInLeft">
            <img src={logo} style={{width:"100px", height:"100px"}} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto animate__animated animate__backInRight" >
                <Nav.Link  href="#home">Home <i className="fas fa-house"></i></Nav.Link>
                <Nav.Link onClick={handleShow}  href="#link">Shop <i className="fas fa-shopping-cart"></i></Nav.Link>
            </Nav>
            </Navbar.Collapse>
            <Modal  show={show} onHide={handleClose}>
            <Modal.Header style={{background:"#FA4917", color:"white"}} closeButton>
              <Modal.Title ><TypingText texts={text} /></Modal.Title>
            </Modal.Header>
            <Modal.Body>
          <h6 className="text-center animate__animated animate__backInDown">Choose an Account</h6>
          <Link to='/wholeseller' className="btnsLink mt-3">
            <div className="btns animate__animated animate__backInRight">
                <h3 className="text-center">Wholeseller <i  className="fa fa-arrow-right "></i></h3>
            </div>
          </Link>
          <Link to="/retailer" className="btnsLink mt-3">
            <div className="btns mt-3 animate__animated animate__backInLeft">
                <h3 className="text-center">Retailer <i  className="fa fa-arrow-right "></i></h3>
            </div>
          </Link>
          <Link to="/buyer" className="btnsLink">
            <div className="btns mt-3 animate__animated animate__backInRight">
                <h3 className="text-center">Buyer <i  className="fa fa-arrow-right "></i></h3>
            </div>
          </Link>
            </Modal.Body>
            <Modal.Footer>
              <Button style={{background:"#FA4917", color:"white"}} onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
        </Navbar>
    )
}

export default Navigation