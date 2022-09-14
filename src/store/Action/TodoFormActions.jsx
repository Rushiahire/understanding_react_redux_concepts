import { ON_FORM_NAME_CHANGE_ACTION , ON_FORM_DESCRIPTION_CHANGE_ACTION , ADD_DATA_IN_LIST} from "./ActionTypes"; 


export const onFormNameChangeAction = (data) => {
    return {
        type : ON_FORM_NAME_CHANGE_ACTION,
        name : data
    }
}

export const onFormDiscriptionChange = (data) => {
    return {
        type : ON_FORM_DESCRIPTION_CHANGE_ACTION , 
        description : data
    }
}

export const addDataInList = (data) => {
    return {
        type : ADD_DATA_IN_LIST ,
        data : data
    }
}