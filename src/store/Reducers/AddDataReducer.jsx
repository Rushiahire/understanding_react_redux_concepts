import { ADD_DATA_IN_LIST, RESET_ALL_DATA , DELETE_ITEM_FROM_LIST } from "../Action/ActionTypes";

const initialState  = {
  list : []
};

// const deleteItemReducer = () => {
//   return {
//     ...state,
//     items: state.items.filter((item) => action.payload !== item),
//     lastUpdated: Date.now(),
//   };
// };


export const AddDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA_IN_LIST:
      return {
        ...state,
        list : [...state.list,action.data]
      };



    case DELETE_ITEM_FROM_LIST:
      return {
        list : [
          ...state.list.filter(list => list !==action.data)
        ]
      };

    default:
      return state;
  }
};
