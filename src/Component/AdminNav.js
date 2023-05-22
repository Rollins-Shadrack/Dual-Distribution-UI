import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Button, Container, Form, Nav, Navbar} from 'react-bootstrap';
import jwtDecode from 'jwt-decode'
import logo from '../static/logo.png'


const AdminNav = () => {
    const [user, setUser] = useState()

        //logout user
const  handleLogout = (e) =>{
    e.preventDefault()
    localStorage.removeItem('admintoken')
      window.location.replace("/");
  }

      //get admin
  const getAdmin = async() =>{
    const token = localStorage.getItem('admintoken');
    const decodeToken = jwtDecode(token);
    try{
      const response = await axios.post(`http://localhost:8000/admin/getadmin/${decodeToken.id}`)
      setUser(response.data.user)

    }catch(error){
      console.log(error)
    }
  }
  
  useEffect(() =>{
    getAdmin()
  })
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img src={logo} style={{width:"100px", height:"100px"}} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Form className="d-flex" style={{ width: '55%' }}>
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
              
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="ms-auto my-2 " navbarScroll>
                  <Nav.Link>
                    {user && (<div className="row">
                      <div className="col-6 text-center">
                      <img src={`http://localhost:8000/product/image/${user[0].image}`} style={{width:"60px", height:"60px", borderRadius:"50%"}} alt="" />
                      </div>
                      <div className="col-6">
                      <p ><strong>{user[0].name}</strong></p>
                      </div>
                    </div>)}
                  </Nav.Link>
                  <Nav.Link>
                  <Button variant="danger" onClick={handleLogout}>Logout</Button>
                  </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AdminNav