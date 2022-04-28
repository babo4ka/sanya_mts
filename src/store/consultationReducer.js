
const initialState = {
    consultation: ""
}

export const CHANGE_CONSULTATION_TARIFF = "CHANGE_CONSULTATION_TARIFF"

export const consultationReducer = (state = initialState, action) =>{
    switch(action.type){
        case CHANGE_CONSULTATION_TARIFF:
            return {...state, consultation:action.name}

        default: 
            return state;
    }
}

export const change_consultation_tariff = (name) => ({type:CHANGE_CONSULTATION_TARIFF, name})