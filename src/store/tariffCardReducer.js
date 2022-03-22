const config = require('../config.json')

const initialState ={
    currentCards:config.tariffConfig.wifi
}

export const CHOOSE_WIFI = "CHOOSE_WIFI"
export const CHOOSE_WIFITV = "CHOOSE_WIFITV"
export const CHOOSE_WIFITVPH = "CHOOSE_WIFITVPH"

export const tariffCardReducer = (state = initialState, action)=>{
    switch(action.type){
        case CHOOSE_WIFI:
            return {...state, currentCards:config.tariffConfig.wifi}

        case CHOOSE_WIFITV:
            return {...state, currentCards:config.tariffConfig.wifi_tv}

        case CHOOSE_WIFITVPH:
            return {...state, currentCards:config.tariffConfig.wifi_tv_ph}
    
        default:
            return state;
    }
}

export const choose_wifi = () => ({type:CHOOSE_WIFI})
export const choose_wifitv = () => ({type:CHOOSE_WIFITV})
export const choose_wifitvph = () => ({type:CHOOSE_WIFITVPH})