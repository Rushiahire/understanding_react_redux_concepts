import { ON_FORM_NAME_CHANGE_ACTION , ON_FORM_DESCRIPTION_CHANGE_ACTION , ADD_DATA_IN_LIST , RESET_ALL_DATA , DELETE_ITEM_FROM_LIST} from "./ActionTypes"; 



export const addDataInList = (data) => {
    return {
        type : ADD_DATA_IN_LIST ,

        payload: {
        id : new Date().getTime().toString(),
        data : data
        }
    }
};


export const deleteItemFromList = (id) => {
    return {
        type : DELETE_ITEM_FROM_LIST ,
        id 
    }
}

