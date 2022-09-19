import React,{useState } from "react";
import { useDispatch } from "react-redux";
import { addDataInList } from "../store/Action/TodoFormActions";
import { useNavigate } from "react-router-dom";


const AddData = () => {

  const [ inputData , setInputData ] = useState("");


  const dispatch = useDispatch();
  const navigate = useNavigate();

  

 const onHandleInput = (event) => {
    const { name , value } = event.target;

    setInputData({
      ...inputData,
      [name]:value
    })
 }


  const onFormSubmit = (event) => {
    event.preventDefault();
   
    dispatch(addDataInList(inputData),
    setInputData(""))
    navigate('/viewData')
  }

  return (
    <>
      <form className="w-50 mx-auto my-5" onSubmit={onFormSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
            autoComplete="off"
            value={inputData.name}
            onChange={onHandleInput}
          />
         
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Add Description
          </label>
          <textarea
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={inputData.description}
            rows="5"
            autoComplete="off"
            onChange={onHandleInput}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Data
        </button>
      </form>
    </>
  );
};

export default AddData;
