import { ON_FORM_NAME_CHANGE_ACTION , ON_FORM_DESCRIPTION_CHANGE_ACTION , ADD_DATA_IN_LIST } from '../Action/ActionTypes';

const initialState = {
    name : '',
    description : '',
    
}


const onFormNameChangeReducer = (currentValue , newValue) => {
    return {
        ...currentValue,
        name : newValue
    }
    
    
}

const onFormDescriptionChangeReducer = (currentValue , newValue) => {
    return {
        ...currentValue,
        description : newValue 
    }
};


// const onFormSubmitDataAdd = (oldData , newData) => {
//     return {
//         list:[...oldData,newData]
        
//     }
// }



export const FormReducer = (state=initialState,action) => {
    switch(action.type) {
        case ON_FORM_NAME_CHANGE_ACTION:
            return onFormNameChangeReducer(state,action.name);

        case ON_FORM_DESCRIPTION_CHANGE_ACTION:
            return onFormDescriptionChangeReducer(state,action.description);


       
        
        default :
            return state;
    }

}