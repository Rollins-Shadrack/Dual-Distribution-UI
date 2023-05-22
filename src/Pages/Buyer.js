import React from 'react'
import { useState } from 'react';
import Nav from '../Component/Nav';
import buyer from '../static/end-user.gif'
import './wholeseller.css'
import {Link} from 'react-router-dom'
import {Alert, Form, Button, Spinner}  from  'react-bootstrap'
import login from '../static/login1.jpg'
import logo from '../static/logo.png'
import register from '../static/register1.jpg'
import zxcvbn from 'zxcvbn';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Buyer = () => {
    const [strengthPassword, setStrengthPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [activeTab, setActiveTab] = useState('tab1');
    const [imagePreview, setImagePreview] = useState(null);
    const [image, setImage] = useState();
    const [valid, setValid] = useState(true);
    const navigate = useNavigate()
    const handleClick = (tab) => {
        setActiveTab(tab);
    };
    //function to check the strength of the password
const getPasswordStrength = (password) =>{
    const passwordScore = zxcvbn(password).score
    if(passwordScore === 0){
        setStrengthPassword("Very Weak!")
    }else if(passwordScore ===  1){
        setStrengthPassword("Weak!")
    }else if(passwordScore === 2){
        setStrengthPassword("Reasonable")
    }else if(passwordScore === 3){
        setStrengthPassword("Strong!")
    }else if(passwordScore === 4){
        setStrengthPassword("Very strong")
    }else{
        setStrengthPassword("Invalid Password")
    }
}

//chack if a mobile number is valid
const handlePhoneNumberChange = (phoneNumber) => {
    const regex = /^\d{9,13}$/; // Regex pattern for a 10-digit phone number
    const valid = regex.test(phoneNumber) 
    if(valid){
        setValid(true)
    }else{
        setValid(false)
    }
  };

//validate the image
    const handleFile = (e) =>{
    const file = e.target.files[0]
    setImage(file)
    setImagePreview(URL.createObjectURL(file));
    }

    //handle inputs when registering a new Buyer
    const [credentials, setCredentials] = useState({
        username: '',
        email: '',
        mobile: '',
        address: '',
        password: '',
        Cpassword: ''
        });

    //handling login inputs
    const [loginInputs, setLoginInputs] = useState({
        email: "",
        password: ""
    })
    //handling change function for registering a new buyer
    const handleChange = (e) =>{
        setCredentials((prev)=>({
            ...prev,[e.target.name]: e.target.value
        }))
        if (credentials.password !== ""){
            getPasswordStrength(credentials.password)
        }
        if(credentials.mobile !== ""){
            handlePhoneNumberChange(credentials.mobile)
        }
      }

      //handling change function for loging in a buyer
        const handleLoginChange = (e)=>{
        setLoginInputs((prev) =>({
            ...prev,[e.target.name] : e.target.value
        }))
        }


    //handling submit for registering a new buyer
    const handleRegister = async(e) =>{
        e.preventDefault()
        setLoading(true);
        //console.log(credentials)
        try{
            const response = await axios.post('http://localhost:8000/buyer/register',{
                image:image,
                credentials:credentials
            },{
                headers:{
                'Content-Type' : 'multipart/form-data'
                }
            });
            setSuccess(response.data.message);
            setLoading(false);
            setActiveTab('tab2')

        }catch(error){
            setError(error.response.data.message);
            setLoading(false)
        }
    }

    //handling submit for login of a buyer
    const handleSubmitLogin = async(e) =>{
        e.preventDefault()
        setLoading(true)
        //console.log(loginInputs)
        try{
            const response = await axios.post('http://localhost:8000/buyer/login', loginInputs )
            const token = response.data.token;
            const data = {
                token, 
                customerType:"buyer"
            }
            setSuccess(response.data.message)
            setLoading(false)
            navigate('/dashboard', { state: { data } });
        }catch (error) {
            setError(error.response.data.message);
            setLoading(false)
          }
    }

    return (
        <div style={{overflowX:"hidden"}} >
            <Nav/>
    {/* wholeseller landing page */}
    {activeTab === "tab1" ? (
    <div className="mb-5">
        <div className="text-center">
            <img src={buyer} className="imageGif" alt="" />
        </div>
        <div className="row container">
            <div className="col-md-6 m-auto">
            <div className="comment text-center">
        <p>We offer a wide range of quality electronics at competitive prices. Our website provides fast delivery, great customer service and secure payment options. We want you to have a positive shopping experience with us.</p>
        </div>
        <div className="mt-5" style={{display:"flex", flexDirection:"column"}}>
        <button className="btn btn-primary " onClick={() => handleClick('tab2')} style={{ cursor: 'pointer' }}>Sign In <i  className="fa fa-arrow-right mx-1 "></i></button>
        <span className="mt-3 text-center" onClick={() => handleClick('tab3')} style={{ cursor: 'pointer' }}>Create an Account</span>
        <Link to='/'><button className="btn btn-dark mt-3" ><i  className="fa fa-arrow-left "></i>Back </button></Link>
        </div>
            </div>
        </div>
        
    </div>) : null}
    {/* buyer login page */}
    {activeTab === "tab2" ? (
    <div className="row container mb-5">
        <div className="col-md-10 m-auto">
            <div className="text-center">
            <img src={logo} style={{width:"180px", height:"120px"}} alt="" />
            </div>
        <div className="row">
        <div className="col-md-6 text-center">
            <img src={login} style={{width:"300px", height:"300px"}} alt="" />
        </div>
        <div className="col-md-6">
        {error && 
        <Alert  variant='danger' className=" alert-dismisable fade show text-center">
          {error}
        </Alert>}
        {success && 
        <Alert variant='success' >
          {success}
        </Alert>}
        <Form onSubmit={handleSubmitLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email"  value={loginInputs.email} onChange={handleLoginChange} />
        <Form.Text className="text-muted">
            We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password"  value={loginInputs.password} onChange={handleLoginChange}  />
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
    ) : null}

    {/* wholeseller register page */}
    {activeTab === "tab3" ? (
    <div className="row">
    <div className="row container mb-5">
        <div className="col-md-10 m-auto">
            <div className="text-center">
            <img src={logo} style={{width:"180px", height:"120px"}} alt="" />
            </div>
        <div className="row">
        <div className="col-md-6 text-center">
            <img src={register} style={{width:"300px", height:"300px"}} alt="" />
        </div>
        <div className="col-md-6">
        {error && <Alert  variant='danger' className=" alert-dismisable fade show text-center">{error}</Alert>}
        {success && <Alert variant='success' >{success}</Alert>}
        <div className="signup-profile-pic__container">
            <img src={imagePreview || logo} className="signup-profile-pic" />
            <label htmlFor="file" className="image-upload-label">
                <i className="fas fa-plus-circle add-picture-icon"></i>
            </label>
            <input type="file" name='file' id='file' hidden onChange={handleFile}  />
        </div>
        <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" name="username" value={credentials.username} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  name="email" value={credentials.email} onChange={handleChange}/>
        <Form.Text className="text-muted">
            We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="text" placeholder="Enter mobile Number" name="mobile" value={credentials.mobile} onChange={handleChange} />
        {!valid && <Alert variant='warning' >Phone number is Invalid</Alert>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Postal Address</Form.Label>
        <Form.Control type="text" placeholder="Postal Address" name="address" value={credentials.address} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" className="mb-3" value={credentials.password} onChange={handleChange} />
        {strengthPassword && 
        <Alert variant='warning' >
          {strengthPassword}
        </Alert>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" name="Cpassword" value={credentials.Cpassword} onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={loading || strengthPassword === "Very Weak!" || strengthPassword === "Weak!" || !valid} >
            {loading ? <p style={{display:"flex"}}>Signing you up... <Spinner className="mx-3" animation='border' /></p> : "Create Account"}
            </Button>
        </Form>
        </div>
    </div>
        </div>
        <Link to='/'><button className="btn btn-dark mt-3" ><i  className="fa fa-arrow-left "></i>Back </button></Link>
    </div>
    </div>) : null}
        </div>
    )
}

export default Buyer