import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {Alert, Button, Container,Modal,Form,Navbar,Nav, Spinner} from 'react-bootstrap'
import axios from 'axios'
import logo from '../static/logo.png'
import TypingText from '../Component/TypingText'
import mpesa from '../static/mpesa.png'
import paypal from '../static/paypal.png'
import {Link} from  'react-router-dom'

const Checkout = () => {
    const [user, setUser] = useState([])
    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState('');
    const [customerType, setCustomerType] = useState('');
    const [text, setText] = useState(['Thank you for trusting us!', 'Be sure your goods will be delivered']);
    const [lgShow, setLgShow] = useState(false);
    const [activeTab, setActiveTab] = useState('tab1');

    const handleClick = (tab) => {
        setActiveTab(tab);
    };

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    const location = useLocation();
    const data = location.state.data;

  useEffect(() => {
      if(data.user !== user || data.cartItems !== cartItems || data.cartTotal !== cartTotal || data.customerType !== customerType){
        setUser(data.user)
        setCustomerType(localStorage.getItem('customer'))
        setCartItems(data.cartItems)
        setCartTotal(data.cartTotal)
        setCustomerType(data.customerType)
      }
    
  }, [data]);

  //logout user
const  handleLogout = (e) =>{
    e.preventDefault()
      window.location.replace("/");
  }

  //wholeseller credentials
  const [credentials, setCredentials] = useState({
    companyname: '',
    businessaddress: '',
    contact: '',
    tax: '',
    license: '',
    certificate: ''
    });
  //handling change function for updating wholeseller
  const handleChange = (e) =>{
  setCredentials((prev)=>({
  ...prev,[e.target.name]: e.target.value
  }))
  }

  //handling inputs for updating a retailer
  const [credentials1, setCredentials1] = useState({
    username: '',
    email: '',
    mobile: '',
    address: '',
    regNumber: ''
    });

    //handling change function for updating retailer
  const handleChange1 = (e) =>{
    setCredentials1((prev)=>({
        ...prev,[e.target.name]: e.target.value
    }))
    }
     //handle inputs when registering a new Buyer
    const [credentials2, setCredentials2] = useState({
      username: '',
      email: '',
      mobile: '',
      address: ''
      });

    //handling change function for updating buyer
    const handleChange2 = (e) =>{
    setCredentials2((prev)=>({
      ...prev,[e.target.name]: e.target.value
    }))
    }
  const handleOrder = async(mode) =>{
    try{
      const response = await axios.post('http://localhost:8000/product/order',{
      customer: user,
      mode,
      products:cartItems
    })
    console.log(response.data.message)
    setSuccess(response.data.message);
    }catch(error){
      setError(error.response.data.message);
          setLoading(false)
    }
    
  }

  //function to render the different types of forms
  const renderForm = () => {
    if (customerType === 'retailer') {
      return (
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text"  name="username" value={credentials1.username} onChange={handleChange1} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email"  name="email" value={credentials1.email} onChange={handleChange1} />
          <Form.Text className="text-muted">
              We'll never share your email with anyone else.
          </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="text"   name="mobile" value={credentials1.mobile} onChange={handleChange1}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Postal Address</Form.Label>
          <Form.Control type="text"   name="address" value={credentials1.address} onChange={handleChange1} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Business Registration Number</Form.Label>
          <Form.Control type="text"  name="regNumber" value={credentials1.regNumber} onChange={handleChange1} />
          </Form.Group>

          <Button variant="primary" type="submit" disabled={loading} >
          {loading ? <p style={{display:"flex"}}>Updating your details... <Spinner className="mx-3" animation='border' /></p> : "Update"}
          </Button>
          </Form>
      );
    } else if (customerType === 'wholeseller') {
      return (
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Company Name</Form.Label>
        <Form.Control type="text"   name='companyname' value={credentials.companyname} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Company email address</Form.Label>
        <Form.Control type="email"  name='businessaddress' value={credentials.businessaddress} onChange={handleChange} />
        <Form.Text className="text-muted">
            We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contact Phone</Form.Label>
        <Form.Control type="text"   name='contact' value={credentials.contact} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Tax ID</Form.Label>
        <Form.Control type="text" name='tax' value={credentials.tax} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Business License</Form.Label>
        <Form.Control type="text"   name='license' value={credentials.licence} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Resale Certificate</Form.Label>
        <Form.Control type="text"   name='certificate' value={credentials.certificate} onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={loading} >
        {loading ? <p style={{display:"flex"}}>Updating your details... <Spinner className="mx-3" animation='border' /></p> : "Update"}
        </Button>
        </Form>
      );
    } else if (customerType === 'buyer') {
      return (
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" name="username" value={credentials2.username} onChange={handleChange2} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" value={credentials2.email} onChange={handleChange2}/>
        <Form.Text className="text-muted">
            We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="text" name="mobile" value={credentials2.mobile} onChange={handleChange2} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Postal Address</Form.Label>
        <Form.Control type="text"  name="address" value={credentials2.address} onChange={handleChange2} />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={loading} >
            {loading ? <p style={{display:"flex"}}>Updating yout details... <Spinner className="mx-3" animation='border' /></p> : "Update"}
            </Button>
      </Form>
      );
    } else {
      return (
        <div>
          Invalid customer type!
        </div>
      );
    }
  };

  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img src={logo} style={{width:"100px", height:"100px"}} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Form className="d-flex" style={{ width: '40%' }}>
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
              
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="ms-auto my-2 " navbarScroll>
            <Container style={{display:"flex"}}>
                <Nav.Link className="mx-4 mt-3"><i className="fas fa-shopping-cart h2"></i><span className="badge">{cartItems.length}</span> </Nav.Link>
                <Nav.Link >
                    {customerType === 'wholeseller' ? <>rollins</> : 
                    <> {user &&  (<div className="row">
                    <div className="col-6 text-center">
                    <img src={`http://localhost:8000/product/image/${user.image}`} style={{width:"60px", height:"60px", borderRadius:"50%"}} alt="" />
                    </div>
                    <div className="col-6">
                    <p ><strong>{user.username}</strong></p>
                    </div>
                  </div>)}
                    </>}
                  </Nav.Link>
                <Nav.Link>
                <Button variant="danger" onClick={handleLogout}>Logout</Button>
                </Nav.Link>
            </Container>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <section>
        <div className="row container">
        <div className="text-center">
        <TypingText texts={text} />
        </div>
            <div className="col-md-6">
            <div className="card container">
              <h3 className="text-center mb-3"> Cart Products</h3>
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ):(
              <ol>
                {cartItems.map((cartItem) =>(
                  <li key={cartItem.id} style={{borderBottom:"1px solid black", marginBottom:"3px"}}>
                    <div style={{display:"flex"}}>
                            <img src={`http://localhost:8000/product/image/${cartItem.productimage}`} alt="" style={{width:"100px", height:"60px", borderRadius:"5px"}} />
                            <div style={{padding:"0 calc(20%)"}}>
                                <div style={{display:"flex", justifyContent:"space-between"}}>
                                    <p className="shoppingbutton ">{cartItem.productname}</p>
                                    <p className="shoppingbutton px-5"> <span style={{fontWeight:"bolder"}}>quantity:</span> {cartItem.quantity}</p>
                                </div>
                                <div style={{display:"flex",justifyContent:"space-between"}}>
                                    <p className="shoppingbutton"><span style={{fontWeight:"bolder"}}>Price:</span> <span style={{fontSize:"9px"}}>$</span> {(cartItem.productprice * cartItem.quantity).toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                  </li>
                ))}
                <p><span style={{fontWeight:"bolder"}}>Total: </span><span style={{fontSize:"9px"}}>$</span>{cartTotal}</p>
              </ol>
            )}
            </div>
            <div className="">
            <p>If any of your details has changed over time please update</p>
                <div className="mx-5 mb-3" >
                    <span style={{float:"right"}} className='shoppingCartButton' onClick={() => setLgShow(true)}> Update</span>
                </div>
            </div>
            </div>
            <div className="col-md-6">
                <div className="mt-4">
                    <div className="card">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-6 text-center" onClick={() => handleClick('tab1')}>
                                    <img src={mpesa} style={{width:"50px", height:"50px"}} alt="" />
                                </div>
                                <div className="col-6 text-center "onClick={() => handleClick('tab2')}>
                                    <img src={paypal} style={{width:"50px", height:"50px"}} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            {activeTab === 'tab1' ? (<>
                                {error && <Alert  variant='danger' >{error}</Alert>}
                                {success && <Alert variant='success' >{success}</Alert>}
                                <Form onSubmit={() => handleOrder({mode: 'm-pesa'})}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="number" placeholder="Enter Phone Number" />
                                    </Form.Group>
                                    <p>Pay Ksh.{cartTotal} via m~pesa</p>
                                    <Button style={{background:"#3aa335", color:"white"}} type="submit" onClick={() => handleOrder({mode: 'm-pesa'})}>
                                        Continue
                                    </Button>
                                </Form>
                            </>) : null}
                            {activeTab === 'tab2' ? (<>
                                {error && <Alert  variant='danger' >{error}</Alert>}
                                {success && <Alert variant='success' >{success}</Alert>}
                                <Form onSubmit={() => handleOrder({mode: 'paypal'})}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Your Name"
                                        autoFocus
                                    />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Signature</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your Signature" />
                                </Form.Group>
                                <p>Pay Ksh.{cartTotal} with Paypal</p>
                                <Button style={{background:"#253B80", color:"white"}} onClick={() => handleOrder({mode: 'paypal'})}>
                                    Continue
                                </Button>
                                </Form>
                            </>) : null}
                        </div>
                    </div>
                </div>
            </div>
            <Link to='/dashboard'><button className="btn btn-dark mt-3" ><i  className="fa fa-arrow-left "></i>Back </button></Link>
        </div>
    </section>
    <footer className='position-relative'>
      <div className="text-center">
        <h5>&copy; 2023</h5>
        <a href="#top" className="position-absolute bottom-0 end-0 p-3">
        <i style={{color: 'black'}} className="fa fa-arrow-up h3"></i>
    </a>
      </div>
    </footer>
    {/* modal for update form */}
    <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Update your Details <small style={{fontSize:"10px"}}>{customerType}</small>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {renderForm()}
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Checkout