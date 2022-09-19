import {
  ADD_DATA_IN_LIST,
  DELETE_ITEM_FROM_LIST,
} from "../Action/ActionTypes";

const initialState = {
  list: [],
};

// export const deleteItemReducer = (currentValue, data) => {
//   console.log(currentValue);
//   console.log(data);
//   const index = currentValue.indexOf(data);

//   if (index > -1) {
//     currentValue.splice(index, 1);
//   }
//   return [...currentValue];
// };

export const AddDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA_IN_LIST:
      const { id, data } = action.payload;

      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ]
      };

    case DELETE_ITEM_FROM_LIST:
    
   const newList = state.list.filter((elem)=> elem.id != action.id)
    return {
      ...state,
      list : [newList]
    }

    default:
      return state;
  }
};
