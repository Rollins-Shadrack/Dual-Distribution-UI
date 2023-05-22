import React,{ useState } from 'react';
import logo from '../static/logo.png'
import login from '../static/login1.jpg'
import axios from 'axios'
import {Alert, Form, Button, Spinner}  from  'react-bootstrap'
import {Link} from 'react-router-dom'

const AdminLogin = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    // handling login inputs for retailers
    const [loginInputs, setLoginInputs] = useState({
    email: "",
    password: ""
    })

    //handling change function for loging in a retailer
    const handleLoginChange = (e)=>{
    setLoginInputs((prev) =>({
        ...prev,[e.target.name] : e.target.value
    }))
    }
    const handleSubmitLogin = async(e) => {
        e.preventDefault();
        setLoading(true)
        //console.log(loginInputs)
        try{
            const response = await axios.post('http://localhost:8000/admin/login', loginInputs )
            const token = response.data.token;
            localStorage.setItem('admintoken',token)
            setSuccess(response.data.message)
            setLoading(false)
            window.location ='/admin'
        }catch (error) {
            setError(error.response.data.message);
            setLoading(false)
          }
    }
  return (
    <div>
        <div className="row container mb-5">
        <div className="col-md-10 m-auto">
            <h3 className="text-center mt-2">Admin Login</h3>
            <div className="text-center">
            <img src={logo} style={{width:"180px", height:"120px"}} alt="" />
            </div>
        <div className="row">
        <div className="col-md-6 text-center">
            <img src={login} style={{width:"300px", height:"300px"}} alt="" />
        </div>
        <div className="col-md-6">
        {error && <Alert  variant='danger' className=" alert-dismisable fade show text-center">{error}</Alert>}
        {success && <Alert variant='success' >{success}</Alert>}
        <Form onSubmit={handleSubmitLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" value={loginInputs.email} onChange={handleLoginChange} />
        <Form.Text className="text-muted">
            We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" id='password' value={loginInputs.password} onChange={handleLoginChange} />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={loading}>
        {loading ? <p style={{display:"flex"}}>Logging you in... <Spinner className="mx-3" animation='grow' /></p> : "Sign In"}
        </Button>
        </Form>
        </div>
    </div>
        </div>
        <Link to='/'><button className="btn btn-dark mt-3" ><i  className="fa fa-arrow-left "></i>Back </button></Link>
    </div>
    </div>
  )
}

export default AdminLogin