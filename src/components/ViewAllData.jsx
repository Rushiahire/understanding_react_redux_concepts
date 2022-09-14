import React from "react";
import { useSelector } from "react-redux";

const ViewAllData = () => {
  const allData = useSelector((state) => {
    return state.AddDataReducer;
  });

  return (
    <>
      <div className="text-center mt-5">
        {
        allData.map((value, index) => {
          return (
            <div key={index}>
              <h4>{value.name}</h4>
              <h3>{value.description}</h3>
            </div>
          );
        })
        }
      </div>
    </>
  );
};

export default ViewAllData;
