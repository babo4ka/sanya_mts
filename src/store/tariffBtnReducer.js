const config = require('../config.json')

const initialState ={
    groups:[
        {
            wifi:require(`../icons/white/wifi_white.png`),
            config:{className:config.tariffNav.active.className, active:true}
        },
        {
            wifi:require(`../icons/gray/wifi_gray.png`),
            tv:require(`../icons/gray/tv_gray.png`),
            config:{className:config.tariffNav.inactive.className, active:false}
        },
        {
            wifi:require(`../icons/gray/wifi_gray.png`),
            tv:require(`../icons/gray/tv_gray.png`),
            phone:require(`../icons/gray/phone_gray.png`),
            config:{className:config.tariffNav.inactive.className, active:false}
        }
    ]   
}

const MAKE_ACTIVE_WIFI = "MAKE_ACTIVE_WIFI";
const MAKE_ACTIVE_WIFITV = "MAKE_ACTIVE_WIFITV";
const MAKE_ACTIVE_WIFITVPH = "MAKE_ACTIVE_WIFITVPH";

export const tariffBtnReducer = (state = initialState, action) =>{
    
    switch(action.type){
        case MAKE_ACTIVE_WIFI:
            return {...state, groups: [
                {wifi:require(`../icons/white/wifi_white.png`),
                config:{className:config.tariffNav.active.className, active:true}},
                {
                    wifi:require(`../icons/gray/wifi_gray.png`), 
                    tv:require(`../icons/gray/tv_gray.png`),
                    config:{className:config.tariffNav.inactive.className, active:false}
                },
                {
                    wifi:require(`../icons/gray/wifi_gray.png`), 
                    tv:require(`../icons/gray/tv_gray.png`),
                    phone:require(`../icons/gray/phone_gray.png`),
                    config:{className:config.tariffNav.inactive.className, active:false}
                }
            ]
            }


        case MAKE_ACTIVE_WIFITV:
            return {...state, groups: [
                {
                    wifi:require(`../icons/gray/wifi_gray.png`),
                    config:{className:config.tariffNav.inactive.className, active:false}
                },
                {
                    wifi:require(`../icons/white/wifi_white.png`), 
                    tv:require(`../icons/white/tv_white.png`),
                    config:{className:config.tariffNav.active.className, active:true}
                },
                {
                    wifi:require(`../icons/gray/wifi_gray.png`), 
                    tv:require(`../icons/gray/tv_gray.png`),
                    phone:require(`../icons/gray/phone_gray.png`),
                    config:{className:config.tariffNav.inactive.className, active:false}
                }
            ]
            }


        case MAKE_ACTIVE_WIFITVPH:
            return {...state, groups: [
                {wifi:require(`../icons/gray/wifi_gray.png`),
                config:{className:config.tariffNav.inactive.className, active:false}},
                {
                    wifi:require(`../icons/gray/wifi_gray.png`), 
                    tv:require(`../icons/gray/tv_gray.png`),
                    config:{className:config.tariffNav.inactive.className, active:false}
                },
                {
                    wifi:require(`../icons/white/wifi_white.png`), 
                    tv:require(`../icons/white/tv_white.png`),
                    phone:require(`../icons/white/phone_white.png`),
                    config:{className:config.tariffNav.active.className, active:true}
                }
            ]
            }


        default:
            return state;
    }
}

export const make_activewifi_action = () => ({type:MAKE_ACTIVE_WIFI})
export const make_activewifitv_action = () => ({type:MAKE_ACTIVE_WIFITV})
export const make_activewifitvph_action = () => ({type:MAKE_ACTIVE_WIFITVPH})
