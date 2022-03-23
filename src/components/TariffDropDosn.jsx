import { useDispatch, useSelector } from 'react-redux';
import './TariffDropDown.scss'
import $ from 'jquery'
import { choose_wifi, choose_wifitv, choose_wifitvph } from '../store/tariffCardReducer';
import {make_activewifi_action, make_activewifitv_action, make_activewifitvph_action} from '../store/tariffBtnReducer'

const TariffDropDown = (props)=>{
    const dispatch = useDispatch()
    const value = useSelector(state => state.btns.name)

    const changeGroup = () =>{
        $("#tariff_cards").fadeToggle(200, 'linear')

        switch($('.tariff_group_select').val()){
            case "wifi":
                dispatch(choose_wifi())
                dispatch(make_activewifi_action())
                break;
            case "wifi_tv":
                dispatch(choose_wifitv())
                dispatch(make_activewifitv_action())
                break;

            case "wifi_tv_ph":
                dispatch(choose_wifitvph())
                dispatch(make_activewifitvph_action())
                break;
        }

        $("#tariff_cards").fadeToggle(200, 'linear')
    }

    return(
        <div className="tariff_drop_down_holder dropdown">
            <select 
                class="col-8 col-sm-6 tariff_group_select" 
                aria-label="Default select example"
                value={value}  
                onChange={changeGroup}         
            >
                <option class="group_item" value="wifi">Интернет</option>
                <option class="group_item" value="wifi_tv">Интернет+ТВ</option>
                <option class="group_item" value="wifi_tv_ph">Интернет+ТВ+Мобайл</option>
            </select>
        </div>
    )
}

export default TariffDropDown;