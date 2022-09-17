import { ON_FORM_NAME_CHANGE_ACTION , ON_FORM_DESCRIPTION_CHANGE_ACTION ,RESET_ALL_DATA } from '../Action/ActionTypes';

const initialState = {
    name : '',
    description : '',
    list : []
};


const onFormNameChangeReducer = (currentValue , newValue) => {
    return {
        ...currentValue,
        name : newValue
    }
    
    
};

const onFormDescriptionChangeReducer = (currentValue , newValue) => {
    return {
        ...currentValue,
        description : newValue 
    }
};

const resetFormReducer = () => {
    return initialState
}


export const FormReducer = (state=initialState,action) => {
    switch(action.type) {
        case ON_FORM_NAME_CHANGE_ACTION:
            return onFormNameChangeReducer(state,action.payload);

        case ON_FORM_DESCRIPTION_CHANGE_ACTION:
            return onFormDescriptionChangeReducer(state,action.payload);

        case RESET_ALL_DATA:
            return resetFormReducer();

        default :
            return state;
    }

};