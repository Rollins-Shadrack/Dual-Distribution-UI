import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

const Sidebar = ({users}) => {
    const navigate = useNavigate()
    //toogle Icons
    const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const navigateToUsers = () => {
    console.log('I was clicked')
    navigate('/manage/users', { state: { users } });
  };
  return (
    <div className="sidebar">
      <div className="sidebar-header">
      <i  onClick={() => toggleSidebar()} className="fa fa-arrow-right "></i>
      </div>
      <div className={`sidebar-content ${isOpen ? 'open' : ''}`}>
        <ul>
          <Link to='/admin'>
          <li className='mb-3 text-center' >
          <i  className="fa fa-gear h4"></i>
            {isOpen && <span>Dashboard</span>}
          </li></Link>
          <Link to='/manage/products' >
          <li className='mb-3 text-center'>
          <i className="fas fa-shopping-cart h4"></i>
            {isOpen && <span>Products</span>}
          </li></Link>
          <Link to="/manage/users" onClick={navigateToUsers}>
            <li className='mb-3 text-center' >
            <i  className="fa fa-person h4"></i>
              {isOpen && <span>Manage Customers</span>}
            </li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar