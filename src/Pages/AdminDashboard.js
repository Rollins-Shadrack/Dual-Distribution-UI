import React,{useState, useEffect} from 'react'
import './adminDashboard.css'
import DefaultPage from '../Component/DefaultPage';
import AdminNav from '../Component/AdminNav';
import Sidebar from '../Component/Sidebar'
import axios from 'axios'




const AdminDashboard = () => {
    const [buyers, setBuyers] = useState([])
    const [retailers, setRetailers] = useState([])
    const [wholesellers,setWholesellers] = useState([])
    const [admins,setAdmins] = useState([])

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
          
      },[]);
      const data = {
        retailers,
        wholesellers,
        buyers,
        admins,
      };
console.log("adminDashboard", data)
  return (
    <>
    <AdminNav/>
    {/* section */}
    
    <section className='body'>
       <div className="sidebar">
       <Sidebar users={data}/>
        </div> 
        <div className="pages">
            <DefaultPage users={data}/>
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
    </>
  )
}
export default AdminDashboard

