import React,{useState} from 'react'
import Footer from '../Component/Footer'
import {Accordion, Button, Carousel, Modal } from 'react-bootstrap'
import Navigation from '../Component/Navigation'
import TypingText from '../Component/TypingText'
import './home.css'

const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [text, setText] = useState(['Want to speak with a representative? Call us at 0746179246', 'Need to get in touch? Send us a message on WhatsApp!', 'Connect with us on social media to join our community of fans and supporters.']);

  return (
    <div style={{background:"#E2E6EC", overflowX:"hidden"}}>
      <Navigation/>
      <section  id="home" className="image-fluid">
        <div className="container" >
          <div className="row">
            <div className="home-text col-md-6">
            <h1 style={{color:"#fa4917"}} className="fw-bold fs-50 bigtext animate__animated animate__backInLeft">Looking for a one-stop shop <br/>for all your electronics need!</h1>
            <p style={{color:"white"}} className="lead smalltext animate__animated animate__backInRight ">We've got you covered <br /> We offer Guaranteed fast delivery, excellent customer service, shop with us for best electronics deals.</p>
            <TypingText texts={text} />
            </div>
          </div>
          <div className="overlay"></div>
        </div>
      </section>
    <section id="about" className="mt-4">
      <h2 className="text-center">About Us</h2>
      <div className="text-center row">
        <div className="col-md-7 m-auto">
          <p style={{fontStyle:"monospaced"}}>Are you looking for a reliable dual distribution system for your electronics business? Look no further! Our dual distribution system is the perfect solution for all your electronics needs. With our system, you can easily manage inventory, track orders, and ensure that your customers receive their products in a timely manner. Our system is designed to provide maximum efficiency and accuracy, so you can rest assured that your orders will be processed quickly and accurately. With our system, you can also take advantage of our advanced analytics and reporting capabilities, allowing you to make informed decisions about your business. With our dual distribution system, you can be sure that your electronics business is running smoothly and efficiently.</p>
          <Button style={{background:"#fa4917", color:"#2a293e",borderRadius:"20px", border:"none"}} onClick={handleShow}>
            Learn More
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>About Us</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Our Operations</h4>
              <hr />
              <p>Welcome to the Dual Distribution System! We are a major electronics distributor, providing quality products to businesses and consumers alike. Our operations are streamlined and efficient, allowing us to offer competitive prices and fast delivery. We have a wide range of products, including components, tools, and materials, so you can find the perfect item for your needs. Our customer service team is always available to answer any questions you may have. With our dual distribution system, you can be sure you’re getting the best products at the best prices.</p>
              <hr />
            <h4 >Shippings</h4>
            <hr />
              <p>Are you looking for a reliable dual distribution system to help you with your electronics needs? Look no further! Our shipping system is the perfect solution for all your needs. We specialize in providing fast and efficient shipping services to ensure that your products are delivered on time. We also offer a wide range of options for shipping, including express, overnight, and international services. Our team of experienced professionals will work with you to find the best solution for your needs. We guarantee that your products will arrive safely and on time. With our dual distribution system, you can rest assured that your electronics needs are taken care of.</p>
              <hr />
              <h4>Warranty</h4>
              <hr />
              <p>Are you in the market for a reliable dual distribution system that specializes in electronics? Look no further! Our dual distribution system is designed to provide you with the highest quality products and services. We understand that electronics can be a costly investment, which is why we offer an unbeatable warranty. Our warranty covers all parts and labor for a full year, ensuring that any issues you may have are taken care of quickly and efficiently. With our dual distribution system, you can be sure that you are getting the best value for your money. Invest in our dual distribution system today and rest assured that you are getting the best in the industry.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button style={{background:"#fa4917", color:"#2a293e",borderRadius:"20px", border:"none"}} onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </section>
    <section id="offices" className="mt-4">
      <h2 className="text-center">Our Offices</h2>
      <div className="row mt-4 container">
      <h2>In Qatar</h2>
        <div className="col-md-6 g-2 animate__animated animate__backInLeft">
        <div className="container ">
        <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" style={{width:"90%", height:"400px", borderRadius:"10px"}} src="https://media.istockphoto.com/id/1320764737/photo/a-worker-is-using-tablet-to-review-storage-report-business-management-and-technology-concept.jpg?s=612x612&w=0&k=20&c=OESl7QvhV0dOx_3HxMQoHy9GA2ZWIy8pTxi-PmHJ2KI=" alt="First slide"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" style={{width:"90%", height:"400px" , borderRadius:"10px"}} src="https://media.istockphoto.com/id/1206225982/photo/engineer-using-digital-tablet-in-factory.jpg?s=612x612&w=0&k=20&c=8YeRSpcJ3QsMkH2usgeaEf7x8WvrhU6j6xD-pfogfVo=" alt="Second slide"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" style={{width:"90%", height:"400px", borderRadius:"10px"}} src="https://media.istockphoto.com/id/1156165807/photo/smart-retail-concept-man-hand-tyr-to-use-machine-deep-learning-with-artificial-intelligence.jpg?s=612x612&w=0&k=20&c=92-zPOO0Iw1Bo3D4X4cqMWq0qUKrVgj__5DO5GxQHfQ="alt="Third slide"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" style={{width:"90%", height:"400px", borderRadius:"10px"}} src="https://media.istockphoto.com/id/1352803596/photo/cargo-staff-using-computer-laptop-to-monitor-distribution-flow-control-inventory-products.jpg?s=612x612&w=0&k=20&c=Q78bRpRlWWOTbKqbHVRUbq2eGYRw6PcfNFteaXkCxFo="alt="Third slide"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
        </div>
        <div className="col-md-6 g-2 animate__animated animate__backInRight">
          <div className="container">
            <div className=""  style={{background:"#E2E6EC"}}>
            <p className="px-4 py-2">Are you looking for an efficient and reliable electronic distribution system based in Qatar? Look no further! Our electronic distribution system is the perfect solution for all your needs. Our system is designed to provide you with the highest quality of service,
            with fast and secure delivery of your goods. Our team of experienced professionals is dedicated to providing you with the best customer service and support. We understand the importance of having a reliable and secure system, and we strive to make sure that your goods 
            are delivered on time and in perfect condition. With our system, you can rest assured that your goods will be delivered safely and securely. Contact us today to learn more about our electronic distribution system and how it can help you.</p>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <div className="row mt-4 container">
      <h2>In USA</h2>
      <div className="col-md-6 g-2 animate__animated animate__backInRight">
          <div className="container">
            <div className=""  style={{background:"#E2E6EC"}}>
            <p className="px-4 py-2">Introducing the new dual distribution system in the USA! This revolutionary system is designed to provide customers with the convenience of shopping both online
            and in-store. With this system, customers can enjoy the convenience of shopping from the comfort of their own home, while also having the option of visiting a store for a more personal shopping experience. The dual distribution system also offers customers the ability to compare prices and products, as well as the ability to check stock availability online. With this system, customers can save time and money, and enjoy a seamless shopping experience.
</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 g-2">
        <div className="container animate__animated animate__backInLeft">
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
        </div>
        </div>
      </div>
      <hr />
      <div className="row mt-4 container">
        <h2>In Canada</h2>
        <div className="col-md-6 g-2">
        <div className="container ">
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
        </div>
        </div>
        <div className="col-md-6 g-2 animate__animated animate__backInRight">
          <div className="container">
            <div className=""  style={{background:"#E2E6EC"}}>
            <p className="px-4 py-2">Need a reliable electronic distribution system? Our cutting-edge solution has got you covered, including in Canada. With state-of-the-art technology, you can expect secure and speedy delivery worldwide. Our experienced team prioritizes customer service and ensures timely and perfect delivery of your goods. Contact us to learn more about our system and streamline your business operations for greater success.</p>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <div className="row mt-4 container">
      <div className="col-md-6 g-2 animate__animated animate__backInRight">
        <h2>Locally</h2>
          <div className="container">
            <div className=""  style={{background:"#E2E6EC"}}>
            <p className="px-4 py-2">Are you looking for a reliable dual distribution service in Kenya, Uganda, Tanzania, and Rwanda? Look no further than Dual Distribution! We offer a comprehensive range of services, including warehousing, inventory management, order fulfillment, and more. Our experienced team of professionals is dedicated to providing the highest quality of service and the most efficient delivery of products to our customers. We understand the importance of customer satisfaction and are committed to providing the best possible service. With our wide network of warehouses, we can ensure that your products are delivered quickly and safely to their destination. Contact us today to learn more about how Dual Distribution
            can help you with your distribution needs.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 g-2">
        <div className="container animate__animated animate__backInLeft">
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
        </div>
        </div>
      </div>
    </section>
    <section id="faqs" className="mt-5">
      <h3 className="text-center">FAQs</h3>
    <div className="row">
      <div className="col-md-8 m-auto">
      <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What are your delivery options?</Accordion.Header>
        <Accordion.Body>
        We offer a range of delivery options, including standard and express shipping, and can accommodate special requests as needed. Please contact us for more information.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How do I track my shipment?</Accordion.Header>
        <Accordion.Body>
        Once your order has been processed and shipped, you will receive a tracking number via email. You can use this number to track the status of your shipment on our website or through the carrier's website.
          </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What happens if my shipment is lost or damaged?</Accordion.Header>
        <Accordion.Body>
        In the unlikely event that your shipment is lost or damaged, please contact us immediately. We will work with you to file a claim with the carrier and provide a replacement or refund as appropriate.
          </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Can I cancel or modify my order?</Accordion.Header>
        <Accordion.Body>
        If you need to cancel or modify your order, please contact us as soon as possible. We will do our best to accommodate your request, but please note that orders that have already been processed or shipped may not be eligible for cancellation or modification.
          </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>What is your return policy?</Accordion.Header>
        <Accordion.Body>
        We have a 30-day return policy for most items. If you are not satisfied with your purchase for any reason, please contact us to initiate a return. Please note that some items may be subject to a restocking fee or other terms and conditions.
          </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </div>
    </div>
    </section>
        <Footer/>
    </div>
  )
}

export default Home