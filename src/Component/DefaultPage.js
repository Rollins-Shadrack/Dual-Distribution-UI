import React from 'react'
import './styles.css'

const DefaultPage = ({users}) => {
    console.log("default", users)
  return (
    <div>
        <div>
            <div className="row container">
                <div className="col-md-4">
                    <div className="box" style={{background:"#FFA726"}}>
                        <div className="row container">
                            <div className="col-9">
                                <h1>94</h1>
                                <h6>Registered Wholesellers</h6>
                                <p><small>Other hand, we denounce</small></p>
                            </div>
                            <div className="col-3 mt-5">
                                <h1><i  className="fa fa-building "></i></h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="box" style={{background:"#FF6F26"}}>
                    <div className="row container">
                            <div className="col-9">
                                <h1>45</h1>
                                <h6>Registered Retailers</h6>
                                <p><small>Other hand, we denounce</small></p>
                            </div>
                            <div className="col-3 mt-5">
                                <h1><i  className="fa fa-house "></i></h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                <div className="box" style={{background:"#5E35B1"}}>
                <div className="row container">
                            <div className="col-9">
                                <h1>76</h1>
                                <h6>Registered Buyers</h6>
                                <p><small>Other hand, we denounce</small></p>
                            </div>
                            <div className="col-3 mt-5">
                                <h1><i  className="fa fa-person "></i></h1>
                            </div>
                        </div>
                </div>
                </div>
            </div>
        </div>
        <div>
            <div className="row mt-3 container">
                <div className="col-md-6 g-2">
                    <div className="card container size">
                        <div className="card-title my-2">
                            <h5>RECENT PRODUCTS</h5>
                        </div>
                        <div className="card-body">
                            <table className="table table-striped table-hover">
                            <tr>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Country</th>
                                <th>Quantity</th>
                            </tr>
                            <tr>
                                <td>Rosecoco</td>
                                <td>50000</td>
                                <td>Kenya</td>
                                <td>2000</td>
                            </tr>
                            <tr>
                                <td>Smart Phone</td>
                                <td>6000</td>
                                <td>Japan</td>
                                <td>100</td>
                            </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 g-2">
                    <div className="card container size">
                            <div className="card-title my-2">
                                <h5>WORLD MARKET</h5>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <div>
            <div className="row mt-4 container">
                <div className="col-md-6 g-2 ">
                    <div className="card container size">
                        <div className="card-title">
                            <h3>SALES</h3>
                        </div>
                        <div className="card-body">
                        <table className="table table-striped table-hover">
                            <tr>
                                <th>Product Name</th>
                                <th>Status</th>
                                <th>Destination</th>
                            </tr>
                            <tr>
                                <td>Rosecoco</td>
                                <td>Completed</td>
                                <td>Uganda</td>
                            </tr>
                            <tr>
                                <td>Smart Phone</td>
                                <td>Pending</td>
                                <td>Japan</td>
                            </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 g-2">
                    <div className="card container">
                        <div className="card-title">
                            <h3>SALES ANALYTICS</h3>
                        </div>
                        <div className="card-body">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DefaultPage