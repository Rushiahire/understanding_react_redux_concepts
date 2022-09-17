import React from 'react'

const BillingPage = () => {
  return (
    <>
        
    <div className="col-lg-8 col-md-12 border rounded">
            <h4 className="my-3">Billing Addresses</h4>
            <div className="row mx-lg-1">
              <div className="col-lg-4 col-md-6 col-xs-12 border ">
                <ul style={{ listStyle: "none", padding: "0" }}>
                  <li>Name</li>
                  <li>Mobile</li>
                  <li>Address</li>
                  <li>Full Address</li>
                  <li>City</li>
                  <li>Pincode</li>
                  <li>State</li>
                  <li>Country</li>
                  <li>
                    <a href="">Mail</a>
                  </li>
                  <li>
                    <a href="">Contact</a>
                  </li>
                  <button className="btn btn-warning my-2 w-100">
                    Deliver to this address
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary w-100 my-2 "
                  >
                    Edit
                  </button>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6  border mx-lg-1">
                <ul style={{ listStyle: "none", padding: "0" }}>
                  <li>Name</li>
                  <li>Mobile</li>
                  <li>Address</li>
                  <li>Full Address</li>
                  <li>City</li>
                  <li>Pincode</li>
                  <li>State</li>
                  <li>Country</li>
                  <li>
                    <a href="">Mail</a>
                  </li>
                  <li>
                    <a href="">Contact</a>
                  </li>
                  <button className="btn btn-success my-2 w-100">
                    Selected Delivery Address
                  </button>
                  <button className="btn btn-outline-primary w-100 my-2 ">
                    Edit
                  </button>
                </ul>
              </div>

              <div className="col-lg col-md-6 border mx-1 mt-lg-0 mt-md-3">
                <ul style={{ listStyle: "none", padding: "0" }}>
                  <li>Name</li>
                  <li>Mobile</li>
                  <li>Address</li>
                  <li>Full Address</li>
                  <li>City</li>
                  <li>Pincode</li>
                  <li>State</li>
                  <li>Country</li>
                  <li>
                    <a href="">Mail</a>
                  </li>
                  <li>
                    <a href="">Contact</a>
                  </li>
                  <button className="btn btn-warning my-2 w-100">
                    Deliver to this address
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary w-100 my-2"
                  >
                    Edit
                  </button>
                </ul>
              </div>
            </div>

            <button className="btn btn-primary my-3">
              Update Shipping Address
            </button>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Same as Billing Address
              </label>
            </div>

            <hr />
          </div>
    </>
   
  )
}

export default BillingPage;