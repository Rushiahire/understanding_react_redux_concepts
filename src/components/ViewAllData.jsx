import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteItemFromList } from "../store/Action/TodoFormActions";

const ViewAllData = () => {
  

  const data = useSelector((state)=>
    state.AddDataReducer.list
  );
  
  


  return (
    <>
     <div>
      {
        data.map((value,index)=>{
          return(
            <div>
            <div key={index}>
              <p>{value.data.name}</p>
              <p>{value.data.description}</p>
            </div>
            <div>
              <button className="btn btn-primary" >
                Delete
              </button>
            </div>
            </div>
          )
        })
      }
    </div>
    </>
  );
};

export default ViewAllData;
