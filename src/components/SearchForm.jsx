import React, { useState } from "react";

const SearchForm = () => {
  const [data, setData] = useState({
    state: "",
    city: "",
    brand: "",
    store: "",
  });

  const [record, setRecord] = useState([]);

  const onHandleInput = (event) => {
    const { name, value } = event.target;
    // console.log(name , value)

    setData({
      ...data,
      [name]: value,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newData = { ...data };

    setRecord([...record, newData]);

    console.log(record);
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <div className="container ">
          <h2 className="text-uppercase mt-4">Find a Dealer</h2>

          <div className="row mx-auto ">
            <div className="col-lg-6 ">
              <label className="w-100  py-3">
                State
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="state"
                  name="state"
                  value={data.value}
                  onChange={onHandleInput}
                >
                  <option value="DEFAULT">Select State</option>
                  <option>Maharashtra</option>
                  <option>Two</option>
                  <option>Three</option>
                </select>
              </label>

              <div className="col-lg-6 w-100  ">
                <label className="w-100 py-3 ">
                  Brands
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    value={data.brand}
                    onChange={onHandleInput}
                    name="brand"
                    id="brand"
                  >
                    <option value="DEFAULT">Select Brand</option>
                    <option>Brand1</option>
                    <option>Brand2</option>
                    <option>Brand3</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="col-lg-6 ">
              <label className="w-100 py-3">
                City
                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={data.city}
                  onChange={onHandleInput}
                  id="city"
                  name="city"
                >
                  <option value="DEFAULT">Select City</option>
                  <option>Mumbai</option>
                  <option>Nashik</option>
                  <option>Pune</option>
                </select>
              </label>

              <div className="col-lg-6 w-100 py-3">
                Store Name 
                <input
                  type="text"
                  className="form-control"
                  value={data.store}
                  onChange={onHandleInput}
                  id="store"
                  name="store"
                  autoComplete="off"
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-warning w-auto mx-auto mt-3"
            >
              Search
            </button>
          </div>

          <div>
            {
              record.map((value,index)=> {

                const {state , city , brand , store} = value

                return(
                  <ul key={index}>
                    <li>The State is {state}</li>
                    <li>The city is {city}</li>
                    <li>The brand is {brand}</li>
                    <li>The Store is {store}</li>

                  </ul>
                )
              })
            }
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchForm;
