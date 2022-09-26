const config = require('../config.json')

const initialState ={
    tariffCards:undefined,
    index:0,
    posts:undefined
}

export const LOAD_POSTS = "LOAD_POSTS"
export const CHANGE_INDEX = "CHANGE_INDEX"
export const LOAD_TARIFFS = "LOAD_TARIFFS"

export const tariffCardReducer = (state = initialState, action)=>{
    switch(action.type){
        case LOAD_TARIFFS:
            return {...state, tariffCards:action.tariffCards}

        case CHANGE_INDEX:
            return {...state, index:action.index}

        case LOAD_POSTS:
            return{...state, posts:action.posts}

        default:
            return state;
    }
}

export const change_index = (index) => ({type:CHANGE_INDEX, index})
export const load_tariffs = (tariffCards) => ({type:LOAD_TARIFFS, tariffCards})
export const load_posts = (posts) => ({type:LOAD_POSTS, posts})