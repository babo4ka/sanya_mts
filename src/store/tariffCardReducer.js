const config = require('../config.json')

const initialState ={
    tariffCards:config.tariffConfig,
    currentCards:config.tariffConfig.wifi,
    index:0
}

export const CHOOSE_WIFI = "CHOOSE_WIFI"
export const CHOOSE_WIFITV = "CHOOSE_WIFITV"
export const CHOOSE_WIFITVPH = "CHOOSE_WIFITVPH"
export const CHANGE_INDEX = "CHANGE_INDEX"
export const LOAD_TARIFFS = "LOAD_TARIFFS"

export const tariffCardReducer = (state = initialState, action)=>{
    switch(action.type){
        case LOAD_TARIFFS:
            return {...state, tariffCards:action.tariffCards}

        case CHOOSE_WIFI:
            return {...state, currentCards:config.tariffConfig.wifi}

        case CHOOSE_WIFITV:
            return {...state, currentCards:config.tariffConfig.wifi_tv}

        case CHOOSE_WIFITVPH:
            return {...state, currentCards:config.tariffConfig.wifi_tv_ph}
    
        case CHANGE_INDEX:
            return {...state, index:action.index}

        default:
            return state;
    }
}

export const choose_wifi = () => ({type:CHOOSE_WIFI})
export const choose_wifitv = () => ({type:CHOOSE_WIFITV})
export const choose_wifitvph = () => ({type:CHOOSE_WIFITVPH})
export const change_index = (index) => ({type:CHANGE_INDEX, index})
export const load_tariffs = (tariffCards) => ({type:LOAD_TARIFFS, tariffCards})