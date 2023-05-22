import React,{useState, useEffect} from 'react'
import {Alert,Button,Col,Form, Spinner,Row, ListGroup} from 'react-bootstrap'
import axios from 'axios'
import AdminNav from './AdminNav'
import Sidebar from './Sidebar'

const Products = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [products, setProducts] = useState([])
    const [activeTab, setActiveTab] = useState('tab1');
    const [image, setImage] = useState(null);
    const handleClick = (tab) => {
        setActiveTab(tab);
    };

//deleting a product
const deleteProduct = async(id) =>{
    await axios.post(`http://localhost:8000/product/deleteproduct/${id}`).catch(err => console.log(err));
}

    //handling inputs for adding a new product
const [credentials, setCredentials] = useState({
    pname: '',
    pdesc: '',
    pqty: '',
    pprice: ''
    });

    //handle change for other input in product form
    const handleChange = (e) =>{
        setCredentials((prev)=>({
            ...prev,[e.target.name]: e.target.value
        }))
    }

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    }

    const handleAddProduct = async(e) =>{
        e.preventDefault()
        setLoading(true);
        // console.log(image)
        // console.log(credentials)
        try{
            const response = await axios.post("http://localhost:8000/product/addproduct",{
            image:image,
            credentials:credentials
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
    const getProducts = async() =>{
        const response = await axios.post('http://localhost:8000/product/products')
        setProducts(response.data)
    }
    useEffect(() =>{
        getProducts()
    })
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
                    <div className="manage mt-2" onClick={() => handleClick('tab1')}>
                        <p>Manage Products</p>
                    </div>
                    <div className="add mt-2" onClick={() => handleClick('tab2')}>
                        <p>Add a Product</p>
                    </div>
                </div>
                </div>
                <div className="col-md-9">
                {activeTab === 'tab1' ? (
            <>
                <h2 className="text-center">Manage Products</h2>
                <div className="row">
            <div className="col-md-9 m-auto">
            <ListGroup>
                <ListGroup.Item>
                    <h3 className="text-center">All Products <span className="badge rounded-pill bg-success">{products.length}</span> </h3>
                </ListGroup.Item>
            </ListGroup>
            <ListGroup className='customers'>
                {products.map((product) => (
                    <ListGroup.Item key={product.id}>
                        <Row>
                            <Col xs={3}>
                                <img src={`http://localhost:8000/product/image/${product.productimage}`} style={{width:"50px",height:"50px",borderRadius:"50%"}}  alt="" />
                            </Col>
                            <Col xs={3}>
                                <p>{product.productname}</p>
                            </Col>
                            <Col xs={3}>
                                <p>{product.productprice}</p>
                            </Col>
                            <Col xs={3}>
                            <div style={{display:"block"}}>
                                <span onClick={()=> deleteProduct(product.id)}><i className="fas fa-trash px-1   text-danger" ></i></span>
                            </div>
                            </Col>
            </Row>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            </div>
        </div>
            </>
        ) : null}
        {activeTab === 'tab2' ? (
            <div className='container row mb-4'> 
            <div className="col-md-8 m-auto">
            <h2>Add Products</h2>
            {error && 
        <Alert  variant='danger' className=" alert-dismisable fade show text-center">
          {error}
        </Alert>}
        {success && 
        <Alert variant='success' >
          {success}
        </Alert>}
            <Form onSubmit={handleAddProduct} encType="multipart/form-data">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Product Name" name="pname" value={credentials.pname} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product Description</Form.Label>
                <Form.Control type="text" placeholder="Enter Product description" name="pdesc" value={credentials.pdesc} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product Quantity</Form.Label>
                <Form.Control type="number" placeholder="Enter Product Quantity" name="pqty" value={credentials.pqty} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product Price</Form.Label>
                <Form.Control type="number" placeholder="Enter Product Price" name="pprice" value={credentials.pprice} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product Image</Form.Label>
                <Form.Control type="file" placeholder="Enter Product image" name="image" accept="image/*" onChange={handleImageChange} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={loading}>
                {loading ? <p style={{display:"flex"}}>Adding Product... <Spinner className="mx-3" animation='grow' /></p> : "Add Product"}
                </Button>
                </Form>
            </div>
            </div>
        ) : null}
                </div>
            </div>
        
    </div>
        </div>
    </section>
    </>
  )
}

export default Products