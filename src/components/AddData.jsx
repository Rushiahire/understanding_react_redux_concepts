import React from "react";
import { useSelector , useDispatch } from "react-redux";
import { onFormDiscriptionChange , onFormNameChangeAction ,addDataInList } from "../store/Action/TodoFormActions";
import { useNavigate } from "react-router-dom";


const AddData = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formName = useSelector((state)=>{
    return state.FormReducer.name;
  });

  const formDescription = useSelector((state)=>{
    return state.FormReducer.description;
  });

 

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(addDataInList({
      name : formName,
      description : formDescription   
    }));
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
            value={formName}
            onChange={(event)=>{
              const { value } = event.target;
              dispatch(onFormNameChangeAction(value))
            }}
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
            rows="5"
            autoComplete="off"
            onChange={(event)=>{
              const { value } = event.target;
              dispatch(onFormDiscriptionChange(value))
            }}
          />
        </div>

        {/* <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div> */}

        <button type="submit" className="btn btn-primary">
          Add Data
        </button>
      </form>

     
    </>
  );
};

export default AddData;
