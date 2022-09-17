import React from "react";
import { useSelector , useDispatch } from "react-redux";
import { deleteItemFromList } from "../store/Action/TodoFormActions";

const ViewAllData = () => {

  const dispatch = useDispatch();

  const allData = useSelector((state) => {
    return state.AddDataReducer.list;
    
  });
  console.log(allData)

  return (
    <>
    
      <div className="text-center mt-5">
        {
        allData.map((value, index) => {
          return (
            <div key={index} className="d-flex justify-content-around w-25">
              <div>
              <h4>{value.name}</h4>
              <h3>{value.description}</h3>

              <div>
                <button className="btn btn-primary" 
                onClick={()=>{
                  dispatch(deleteItemFromList())
                }}>
                  Delete
                </button>
              </div>
              
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ViewAllData;
