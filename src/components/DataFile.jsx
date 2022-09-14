import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFile = () => {
  let [responseData, setResponseData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/carts")

      .then((response) => {
        const data = response.data;
        // const {data} = response

        setResponseData([...data]);
        // setResponseData(responseData = [...data]);
        console.log(responseData);

        // setResponseData([...responseData,allData]);
        // const addData = {...allData}
        // setResponseData([...responseData,addData]);
        // console.log("Response object ", responseData)
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <>
        <h2>hello</h2>
        {responseData.map((value, index) => {
          const { userId, date,products } = value;

          return (
            <div  key={index}>
              <div>
                <p>{userId}</p>
                <p>{date}</p>
              </div>

              <div className="m-4">
                <div>
                  {products.map((value,index) => (
                    <div key={index}>
                      <p>{value.quantity}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </>
    </>
  );
};

export default DataFile;
