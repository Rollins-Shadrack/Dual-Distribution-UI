import React,{useState, useEffect} from 'react'
import truckDeliveryGif from '../static/truck-delivery.gif'
import {Alert, Button, Col, ListGroup,Form, Row } from 'react-bootstrap'
import axios from 'axios'
import { useLocation} from 'react-router-dom';
import './styles.css'
import logo from '../static/logo.png'
import zxcvbn from 'zxcvbn';
import AdminNav from './AdminNav'
import Sidebar from './Sidebar'

const Users = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const [buyers, setBuyers] = useState([])
    const [retailers, setRetailers] = useState([])
    const [wholesellers,setWholesellers] = useState([])
    const [admins,setAdmins] = useState([])
    const [image, setImage] = useState();
    const [imagePreview, setImagePreview] = useState(null);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [strengthPassword, setStrengthPassword] = useState('');

    const [activeAdminTab, setActiveAdminTab] = useState("admin1")
    const location = useLocation();
    const data = location.state?.users;
    //console.log('users', data)

    //check the strength of a password
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

    //validate the image
    const handleFile = (e) =>{
    const file = e.target.files[0]
    setImage(file)
    setImagePreview(URL.createObjectURL(file));
    }

    const [inputs, setInputs] = useState({
        name:"",
        email:"",
        password:"",
        Cpassword:''
    })

      //handle inputs
    const handleChange = (e) =>{
    setInputs((prev)=>({
    ...prev,
    [e.target.name]: e.target.value
    }))
    if (inputs.password !== ""){
        getPasswordStrength(inputs.password)
    }
    }
    const handleSubmit = async(e) =>{
        e.preventDefault()
        setLoading(true);
        try{
            const response = await axios.post("http://localhost:8000/admin/register",{
            image:image,
            credentials:inputs
        },{
            headers:{
                'Content-Type' : 'multipart/form-data'
            }
        })
        setSuccess(response.data.message)
        setLoading(false)
        }catch(error){
            setError(error.response.data.message);
            setLoading(false)
        }
        
    } 

    const handleAminTab = (tab) =>{
        setActiveAdminTab(tab)
    }
    const handleClick = (tab) => {
        setActiveTab(tab);
    };

    //deleting a buyer
    const deleteBuyer = async(id) =>{
        await axios.post(`http://localhost:8000/buyer/deletebuyer/${id}`).catch(err => console.log(err));
    }
    //deleting a retailer
    const deleteRetailer = async(id) =>{
        await axios.post(`http://localhost:8000/retailer/deleteretailer/${id}`).catch(err => console.log(err));
    }
    //deleting a wholeseller
    const deleteWholeseller = async(id) =>{
        await axios.post(`http://localhost:8000/wholeseller/deletewholeseller/${id}`).catch(err => console.log(err));
    }

    //deleting a admin
    const deleteAdmin = async(id) =>{
        await axios.post(`http://localhost:8000/admin/admin/${id}`).catch(err => console.log(err));
    }

    useEffect(() =>{
    //getting buyers
        const getBuyers = async() =>{
        const response = await axios.post('http://localhost:8000/buyer/buyers')
        //console.log(response)
        setBuyers(response.data)
        }
    //getting retailers
    const getRetailers = async() =>{
        const response = await axios.post('http://localhost:8000/retailer/retailers')
        setRetailers(response.data)
    }
    const getWholesellers = async() =>{
        const response = await axios.post('http://localhost:8000/wholeseller/wholesellers')
        setWholesellers(response.data)
    }
    const getAdmins = async() =>{
        const response = await axios.post('http://localhost:8000/admin/admins')
        setAdmins(response.data)
    }
        getBuyers()
        getRetailers()
        getWholesellers()
        getAdmins()
        
    });

    
  return (
    <>
    <AdminNav/>
    <section className="body">
        <div className="sidebar">
            <Sidebar/>
        </div>
        <div className="pages">
        <div className='container'>
            <div className="row">
                <div className="col-md-3">
                <div className="contain mt-4">
                    <div className="home mt-2" onClick={() => handleClick('tab1')}>
                        <p>Home</p>
                    </div>
                    <div className="admin mt-2" onClick={() => handleClick('tab2')}>
                        <p>Admin</p>
                    </div>
                    <div className="wholeseller mt-2" onClick={() => handleClick('tab3')}>
                        <p>WholeSellers</p>
                    </div>
                    <div className="retailer mt-2" onClick={() => handleClick('tab4')}>
                        <p>Retailers</p>
                    </div>
                    <div className="buyer mt-2" onClick={() => handleClick('tab5')}>
                        <p>Buyer</p>
                    </div>
            </div>
                </div>
                <div className="col-md-9">
                <div className="mt-4 container">
        {activeTab === 'tab1' ? (
            <div style={{background: `linear-gradient(rgb(0,0,0,0.3), rgb(0,0,0,0.2)), url(${truckDeliveryGif})`,width:"100%", height: '50vh',backgroundRepeat:'no-repeat', backgroundSize:"cover",display:"flex", backgroundPosition:"center center", borderRadius:"10px"}}>
                <div className="container" >
          <div className="row">
            <div className="home-text col-md-7">
            <h3 style={{color:"#fa4917"}} className="fw-bold fs-50 bigtext animate__animated animate__backInLeft">Manage All Users in your App</h3>
            <p style={{color:"#2a293e"}} className="lead smalltext animate__animated animate__backInRight ">We've Got you covered <br /></p>
            </div>
          </div>
          <div className="overlay"></div>
        </div>
            </div>
        ) : null}
        {activeTab === 'tab2' ? (
            <>
            <div className="row">
                <div className="col-md-3">
                <div className="contain mt-4">
            <div className="manage mt-2" onClick={() => handleAminTab('admin1')}>
                <p>All Admin</p>
            </div>
            <div className="add mt-2" onClick={() => handleAminTab('admin2')}>
                <p>Add Admin</p>
            </div>
        </div>
                </div>
                <div className="col-md-9">
                {activeAdminTab === 'admin1' ? (
            <>
            <div className="row">
                <div className="col-md-10 m-auto">
                <ListGroup>
                <ListGroup.Item>
                    <h3 className="text-center">All Admins <span className="badge rounded-pill bg-success">{admins.length}</span> </h3>
                </ListGroup.Item>
            </ListGroup>
            <ListGroup className='customers'>
                {admins.map((admin) => (
                    <ListGroup.Item key={admin.id}>
                        <Row>
                            <Col xs={4}>
                                <img src={`http://localhost:8000/product/image/${admin.image}`} style={{width:"50px",height:"50px",borderRadius:"50%"}}  alt="" />
                            </Col>
                            <Col xs={4}>
                                <p>{admin.name}</p>
                            </Col>
                            <Col xs={4}>
                            <div style={{display:"block"}}>
                                {admin.email !== 'rollins@gmail.com' &&   <span onClick={()=> deleteAdmin(admin.id)} disabled={admin.email} ><i className="fas fa-trash px-1   text-danger" ></i></span>}
                            </div>
                            </Col>
            </Row>
                    </ListGroup.Item>
                ))}
            </ListGroup>
                </div>
            </div>
            </>
        ):null}
        {activeAdminTab === 'admin2' ? (
            <>
            <div className="row">
                <div className="col-md-7 m-auto">
                    <Form onSubmit={handleSubmit}>
                        <h3 className="text-center">Add Admin</h3>
                        {error && <Alert  variant='danger' className=" alert-dismisable fade show text-center">{error}</Alert>}
                        {success && <Alert variant='success' >{success}</Alert>}
                        <div className="signup-profile-pic__container">
                          <img src={imagePreview || logo} className="signup-profile-pic" />
                          <label htmlFor="file" className="image-upload-label">
                              <i className="fas fa-plus-circle add-picture-icon"></i>
                          </label>
                          <input type="file" name='file' id='file' hidden onChange={handleFile}  />
                      </div>
                      <Form.Group className="mb-3" controlId="formBasicName">
                          <Form.Label>Name</Form.Label>
                          <Form.Control type="text" name="name" value={inputs.name}  placeholder="Your name" onChange={handleChange} />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control type="email" name="email" value={inputs.email}  placeholder="Enter email" onChange={handleChange}  />
                          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" name="password" className="mb-3"  value={inputs.password}  placeholder="Password" onChange={handleChange}  />
                          {strengthPassword && <Alert variant='warning' >{strengthPassword}</Alert>}
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Confirm Password</Form.Label>
                          <Form.Control type="password" name="Cpassword" value={inputs.Cpassword}  placeholder="Confirm Password" onChange={handleChange}  />
                      </Form.Group>

                      <Button variant="primary" type="submit" disabled={loading || strengthPassword === "Very Weak!" || strengthPassword === "Weak!"} onClick={handleSubmit}>
                      {loading ? "Signing you up..." : "Signup"}
                      </Button>
                    </Form>
                </div>
            </div>
            </>
        ):null}
                </div>
            </div>
        
            </>
        ): null}
        {activeTab === 'tab3' ? (
            <div className="row">
            <div className="col-md-11 m-auto">
            <ListGroup>
                <ListGroup.Item>
                    <h3 className="text-center">All Wholesellers <span className="badge rounded-pill bg-success">{wholesellers.length}</span> </h3>
                </ListGroup.Item>
            </ListGroup>
            <ListGroup className='customers'>
                {wholesellers.map((wholeseller) => (
                    <ListGroup.Item key={wholeseller.id}>
                        <Row>
                            <Col xs={3}>
                                <img src={`http://localhost:8000/product/image/${wholeseller.image}`} style={{width:"50px",height:"50px",borderRadius:"50%"}}  alt="" />
                            </Col>
                            <Col xs={3}>
                                <p>{wholeseller.companyname}</p>
                            </Col>
                            <Col xs={3}>
                                <p>{wholeseller.businessaddress}</p>
                            </Col>
                            <Col xs={3}>
                            <div style={{display:"block"}}>
                                <span onClick={()=> deleteWholeseller(wholeseller.id)}><i className="fas fa-trash px-1   text-danger" ></i></span>
                            </div>
                            </Col>
            </Row>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            </div>
        </div>
        ): null}
        {activeTab === 'tab4' ? (
            <div className="row">
            <div className="col-md-12 m-auto">
            <ListGroup>
                <ListGroup.Item>
                    <h3 className="text-center">All Retailers <span className="badge rounded-pill bg-success">{retailers.length}</span> </h3>
                </ListGroup.Item>
            </ListGroup>
            <ListGroup className='customers'>
                {retailers.map((retailer) => (
                    <ListGroup.Item key={retailer.id}>
                        <Row>
                            <Col xs={3}>
                                <img src={`http://localhost:8000/product/image/${retailer.image}`} style={{width:"50px",height:"50px",borderRadius:"50%"}}  alt="" />
                            </Col>
                            <Col xs={3}>
                                <p>{retailer.username}</p>
                            </Col>
                            <Col xs={3}>
                                <p>{retailer.email}</p>
                            </Col>
                            <Col xs={3}>
                            <div style={{display:"block"}}>
                                <span onClick={()=> deleteRetailer(retailer.id)}><i className="fas fa-trash px-1   text-danger" ></i></span>
                            </div>
                            </Col>
            </Row>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            </div>
        </div>
        ): null}

        {activeTab === 'tab5' ? (
            <div className="row">
                <div className="col-md-12 m-auto">
                <ListGroup>
                    <ListGroup.Item>
                        <h3 className="text-center">All Buyers <span className="badge rounded-pill bg-success">{buyers.length}</span> </h3>
                    </ListGroup.Item>
                </ListGroup>
                <ListGroup>
                    {buyers.map((buyer) => (
                        <ListGroup.Item key={buyer.id}>
                            <Row>
                                <Col xs={3}>
                                    <img src={`http://localhost:8000/product/image/${buyer.image}`} style={{width:"50px",height:"50px",borderRadius:"50%"}}  alt="" />
                                </Col>
                                <Col xs={3}>
                                    <p>{buyer.username}</p>
                                </Col>
                                <Col xs={3}>
                                    <p>{buyer.email}</p>
                                </Col>
                                <Col xs={3}>
                                <div style={{display:"block"}}>
                                    <span onClick={()=> deleteBuyer(buyer.id)}><i className="fas fa-trash px-1   text-danger" ></i></span>
                                </div>
                                </Col>
                </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
                </div>
            </div>
        ): null}
        </div>
                </div>
            </div>
        
        </div>
        </div>
    </section>
    </>
  )
}

export default Users