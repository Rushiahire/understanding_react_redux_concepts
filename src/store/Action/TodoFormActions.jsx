import { ON_FORM_NAME_CHANGE_ACTION , ON_FORM_DESCRIPTION_CHANGE_ACTION , ADD_DATA_IN_LIST , RESET_ALL_DATA , DELETE_ITEM_FROM_LIST} from "./ActionTypes"; 


export const onFormNameChangeAction = (data) => {
    return {
        type : ON_FORM_NAME_CHANGE_ACTION,
        payload : data
    }
}

export const onFormDiscriptionChange = (data) => {
    return {
        type : ON_FORM_DESCRIPTION_CHANGE_ACTION , 
        payload : data
    }
}

export const addDataInList = (data) => {
    return {
        type : ADD_DATA_IN_LIST ,
        data : data
    }
};

export const resetFormAction = () => {
    return {
        type : RESET_ALL_DATA
    }
}

export const deleteItemFromList = (id) => {
    return {
        type : DELETE_ITEM_FROM_LIST ,
        id : id
    }
}

