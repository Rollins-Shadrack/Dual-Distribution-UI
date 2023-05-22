import React,{useState} from 'react'
import TypingText from '../Component/TypingText'
import NotFound from '../static/404.jpg'
import {Link} from 'react-router-dom'

const Undefined = () => {
    const [text, setText] = useState(['Page not found. Try again!!.', 'If issue persists, contact us. Thanks!!.']);
  return (
    <div className="row " style={{overflowX:"hidden",overflowY:"hidden", marginTop:"100px"}}>
        
        <div className="col-md-6 text-center">
            <img src={NotFound} alt="" className='image-fluid' style={{width:"450px", height:"350px"}} />
        </div>
        <div className="col-md-6">
            <h1>Oops, <br /> <span style={{color:"#FA4917"}}>nothing</span> here...</h1>
            <TypingText texts={text} />
            <p className='mt-2'>Uh oh, we can't seem to find the page you are looking for. <br />
            Try going back to the previous page or Contact us for more information</p>

            <Link to='/'><button style={{background:"#FA4917", color:"white"}} className="btn  mt-3" ><i  className="fa fa-arrow-left "></i>Back </button></Link>
        </div>
    </div>
  )
}

export default Undefined