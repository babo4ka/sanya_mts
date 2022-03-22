const config = require('../config.json')

const initialState ={
    currentCards:config.tariffConfig.wifi
}

export const tariffCardReducer = (state = initialState, action)=>{
    switch(action.type){
    
        default:
            return state;
    }
}