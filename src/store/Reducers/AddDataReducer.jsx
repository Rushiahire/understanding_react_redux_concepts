import { ADD_DATA_IN_LIST } from "../Action/ActionTypes";


const initialState = []


export const AddDataReducer = (state=initialState,action) => {
    switch(action.type) {
        case ADD_DATA_IN_LIST:
            return [...state,action.data]

        default :
            return state;
    }
};