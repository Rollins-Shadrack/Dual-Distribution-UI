import React,{useState, useEffect} from 'react'
import { Button,Carousel, Container, Form, Nav, Navbar, Modal} from 'react-bootstrap';
import logo from '../static/logo.png'
import TypingText from '../Component/TypingText'
import './dashboard.css'
import {useLocation, useNavigate} from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import axios from 'axios'

const Dashboard = () => {
  //state for the shoppong cart modal
  const [lgShow, setLgShow] = useState(false);
  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(false);

const [cartItems, setCartItems] = useState([]);
const [products, setProducts] = useState([])
const [text, setText] = useState(['Welcome back!', 'Happy to see you again']);

//adding items to cart
const addToCart = (product) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );

  if (existingCartItem) {
    const updatedCart = cartItems.map((cartItem) =>
      cartItem.id === product.id
        ? {
            ...cartItem,
            quantity:
              cartItem.quantity + 1 <= product.productquantity 
                ? cartItem.quantity + 1 
                : cartItem.quantity 
                
          }
        : cartItem
    );
    setCartItems(updatedCart);

    if (existingCartItem.quantity === product.productquantity) {
      alert("Quantity limit is reached");
    }
  } else {
    const updatedCart = [...cartItems, { ...product, quantity: 1 }];
    setCartItems(updatedCart);
  }
};

//removing items from the cart

const removeFromCart = (product) => {
const existingCartItem = cartItems.find(
  (cartItem) => cartItem.id === product.id
);

if (existingCartItem.quantity === 1) {
  const updatedCart = cartItems.filter(
  (cartItem) => cartItem.id !== product.id
  );
  setCartItems(updatedCart);
} else {
  const updatedCart = cartItems.map((cartItem) =>
  cartItem.id === product.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
  setCartItems(updatedCart);
}
};

const cartTotal = Number(cartItems.reduce(
  (total, cartItem) => total + cartItem.productprice * cartItem.quantity,0
).toFixed(2));


//getting products
const getProducts = async() =>{
  const response = await axios.post('http://localhost:8000/product/products')
  setProducts(response.data)
}
getProducts()

useEffect(() => {
  const cart = localStorage.getItem("cart");
  if (cart) {
    setCartItems(JSON.parse(cart));
    const clearCart = () => {
      localStorage.removeItem("cart");
      setCartItems([]);
    };
    const timeoutId = setTimeout(clearCart, 2 * 24 * 60 * 60 * 1000);
    return () => clearTimeout(timeoutId);
  }
}, []);




    const location = useLocation();
    const customerType = location.state.data?.customerType
    const token = location.state.data?.token;
    const decodedToken = jwtDecode(token);


  useEffect(() => {
    if (decodedToken.user !== user) {
      setUser(decodedToken.user);
    }
  }, [decodedToken.user, user]);

//logout user
const  handleLogout = (e) =>{
  e.preventDefault()
  localStorage.removeItem('customer')
  localStorage.removeItem('token')
    window.location.replace("/");
}

const navigate = useNavigate()
const data = {
  cartItems, cartTotal, user,customerType
}
const navigateToCashout = () =>{
  navigate('/cashout', { state: { data } });
}
console.log(data)
  return (
    <>
      {/* navbar */}
      
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
            <Container style={{display:"flex"}}>
                <Nav.Link className="mx-4 mt-3" onClick={() => setLgShow(true)}><i className="fas fa-shopping-cart h2"></i><span className="badge">{cartItems.length}</span> </Nav.Link>
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
                    
                    <TypingText texts={text} />
                  </Nav.Link>
                <Nav.Link>
                <Button variant="danger" onClick={handleLogout}>Logout</Button>
                </Nav.Link>
            </Container>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* corousel */}
    <Container>
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" style={{width:"90%", height:"400px", borderRadius:"20px"}} src="https://media.istockphoto.com/id/1320764737/photo/a-worker-is-using-tablet-to-review-storage-report-business-management-and-technology-concept.jpg?s=612x612&w=0&k=20&c=OESl7QvhV0dOx_3HxMQoHy9GA2ZWIy8pTxi-PmHJ2KI=" alt="First slide"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" style={{width:"90%", height:"400px" , borderRadius:"20px"}} src="https://media.istockphoto.com/id/1206225982/photo/engineer-using-digital-tablet-in-factory.jpg?s=612x612&w=0&k=20&c=8YeRSpcJ3QsMkH2usgeaEf7x8WvrhU6j6xD-pfogfVo=" alt="Second slide"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" style={{width:"90%", height:"400px", borderRadius:"20px"}} src="https://media.istockphoto.com/id/1156165807/photo/smart-retail-concept-man-hand-tyr-to-use-machine-deep-learning-with-artificial-intelligence.jpg?s=612x612&w=0&k=20&c=92-zPOO0Iw1Bo3D4X4cqMWq0qUKrVgj__5DO5GxQHfQ="alt="Third slide"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" style={{width:"90%", height:"400px", borderRadius:"20px"}} src="https://media.istockphoto.com/id/1352803596/photo/cargo-staff-using-computer-laptop-to-monitor-distribution-flow-control-inventory-products.jpg?s=612x612&w=0&k=20&c=Q78bRpRlWWOTbKqbHVRUbq2eGYRw6PcfNFteaXkCxFo="alt="Third slide"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
    <section>
    <div class="ticker">
        <div class="ticker__inner">
          <span>Check out our amaizing deals!!</span>
          <span>Announcing our Spring Sale! Get 20% off all products.</span>
          <span>Free shipping on all orders over 10000 Ksh.</span>
          <span>Don't miss out on our limited-time offer.</span>
        </div>
      </div>
    </section>
    <section className= "mt-4">
    <div className='container1 container'>
            {products.map((product) => (
            <div key={product.id} className="item ">
                <div className="text-center mb-4">
                <img src={`http://localhost:8000/product/image/${product.productimage}`}  className="productsImage" alt="" />
                </div>
                <p style={{fontSize:"12px"}} className="text-center mt-2">{product.productname} </p>
                <div className="px-1" style={{display:"flex" ,justifyContent:"space-between"}}>
                    <p className="productprice"><span style={{fontSize:"8px"}}>$</span>{product.productprice}</p>
                    <p className="addtocartButton text-center" onClick={() => addToCart(product)}>Add to Cart</p>
                </div>
            </div>
            ))}
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

    {/* shopping cart modal */}
    <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          <i className="fas fa-shopping-cart h4"></i> Shopping Cart 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {cartItems.length === 0 ? (
          <p>Your cart is Empty</p>
        ):(
          <div>
            {cartItems.map((cartItem) =>(
              <div key={cartItem.id}>
                <div className="row">
                  <div className="col-4" style={{display:"flex"}}>
                    <img src={`http://localhost:8000/product/image/${cartItem.productimage}`} alt="" style={{width:"80px", height:"50px", borderRadius:"5px"}} />
                    <div >
                      <p className="shoppingbutton px-4">{cartItem.productname} <br /> <i>{cartItem.desc}</i> </p>
                    </div>
                  </div>
                  <div className="col-4">
                  <p className="shoppingbutton"> <span style={{fontWeight:"600"}}>Price:   $</span>{cartItem.productprice}</p>
                  </div>
                  <div className="col-4" style={{display:"flex"}}>
                    <p onClick={() => removeFromCart(cartItem)}><i className="fas fa-minus shoppingCartButton "aria-hidden="true" ></i></p>
                    <p style={{padding:"0 12px"}}>{cartItem.quantity}</p>
                    <p onClick={() => addToCart(cartItem)}><i className="fas fa-plus shoppingCartButton"></i></p>
                  </div>
                </div>
              </div>
            ))}
            <hr/>
          <div style={{display:"flex",justifyContent:"space-between"}}>
              <strong>Total: <span style={{fontSize:"17px", fontWeight:"600"}}>$</span> {cartTotal.toFixed(2)}</strong>
              <p className=" shoppingCartButtonn" onClick={navigateToCashout} >CashOut</p>
          </div>
          </div>
        )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Dashboard;

