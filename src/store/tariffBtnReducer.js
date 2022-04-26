const config = require('../config.json')

const initialState ={
    tags:[]
}

const SET_TAGS = "SET_TAGS"

export const tariffBtnReducer = (state = initialState, action) =>{
    
    switch(action.type){

        case SET_TAGS:
            return {...state, tags:action.tags}

        default:
            return state;
    }
}

export const set_tags_action = (tags) => ({type:SET_TAGS, tags})