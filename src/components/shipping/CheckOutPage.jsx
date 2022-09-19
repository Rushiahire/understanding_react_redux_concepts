import React from "react";
import scott from "../images/scott.jpg";
import BillingPage from "./BillingPage";

const CheckOutPage = () => {
  return (
    <>
      <div className="container bg-secondary bg-opacity-10">
        <div className="row border rounded p-1 mt-2">
          <h4 className="my-2">CHECKOUT DETAILS</h4>
          <div className=" card col-lg-8 col-md-12 order-lg-1 order-md-2 order-2 rounded">
            <h4 className="my-3">Shipping Addresses</h4>
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
                    <a href="...">Mail</a>
                  </li>
                  <li>
                    <a href="...">Contact</a>
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
                    <a href="...">Mail</a>
                  </li>
                  <li>
                    <a href="...">Contact</a>
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
                    <a href="...">Mail</a>
                  </li>
                  <li>
                    <a href="...">Contact</a>
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

            <div>
              <button className="btn btn-primary my-3">
                Update Shipping Address
              </button>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Same as Billing Address
              </label>
            </div>

            <hr />

            <BillingPage />
          </div>

          <div className="col-lg-4 col-sm-12 col-md-push-12 order-lg-2 order-md-1 order-1">
            <div>
              <button className="btn btn-warning w-100">Place Order</button>

              <div className="row card rounded mx-1 my-3 p-3">
                <div className="col">
                  <div
                    className="accordion accordion-flush border"
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          Apply Coupon Code
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <input type="text" className="form-control mt-2" />

                          <button
                            type="button"
                            className="btn btn-outline-primary w-100 my-2"
                          >
                            <span className="text-dark">Apply Coupon</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="accordion mt-1 "
                    id="accordionPanelsStayOpenExample"
                  >
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingOne"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseOne"
                          aria-expanded="true"
                          aria-controls="panelsStayOpen-collapseOne"
                        >
                          Use Store Credit
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="panelsStayOpen-headingOne"
                      >
                        <div className="accordion-body">Order</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <hr />
                  <h5>ORDER SUMMARY</h5>
                  <div style={{ fontSize: "15px" }}>
                    <div className="d-flex justify-content-between">
                      <p>Sub total(Excl.Tax)</p>
                      <p>₹9514</p>
                    </div>
                    <div className="d-flex justify-content-between ">
                      <p>Tax</p>
                      <p>₹476.0</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>Sub total(Incl.Tax)</p>
                      <p>₹9990</p>
                    </div>
                    <hr className="my-0" />
                    <div className="d-flex justify-content-between">
                      <p>Order Total</p>
                      <p>₹9990</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>Discount</p>
                      <p>₹1000</p>
                    </div>
                    <hr className="my-0" />
                    <div className="d-flex justify-content-between ">
                      <p>TOTAL</p>
                      <p>₹9990</p>
                    </div>
                  </div>

                  <div className="row ">
                    <div className="col-4">
                      <img
                        src={scott}
                        className="img-fluid w-100"
                        alt="not found"
                      />
                    </div>
                    <div className="col-8">
                      <h6>SCOTT PLASMA TANK</h6>
                      <div className="row" style={{ fontSize: "14px" }}>
                        <div className="col-5">Model No</div>
                        <div className="col-6"> :241852</div>
                        <div className="col-5">Price</div>
                        <div className="col-6"> :9990</div>
                        <div className="col-5">Size</div>
                        <div className="col-6"> :S</div>
                        <div className="col-5">Color</div>
                        <div className="col-6"> :/Neon Yellow</div>
                        <div className="col-5">Qty</div>
                        <div className="col-6"> :1</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOutPage;
