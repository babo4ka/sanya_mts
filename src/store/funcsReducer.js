const initialState = {
    setCards:undefined
}

export const SET_CARDS = "SET_CARDS"

export const funcsReducer = (state = initialState, action) =>{
    switch(action.type){

        case SET_CARDS:
            return {...state, setCards:action.setFunc}

        default:
            return state
    }
}

export const set_cards_action = (setFunc) => ({type:SET_CARDS}, setFunc)