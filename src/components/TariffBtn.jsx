import './TariffBtn.scss'
import icon from '../icons/gray/phone_gray.png'
import $ from 'jquery'
import { useEffect, useState } from 'react'
const config = require('../config.json')

const TariffBtn = (props) =>{
    
    useEffect(async ()=>{
        $(`#${props.id}`).on('click', ()=>{
            setClassName(active?`${config.tariffNav.inactive.className} col-2 container btn_holder`:
            `${config.tariffNav.active.className} col-2 container btn_holder`);


            active = !active;
        })
    }, [])

    const [className, setClassName] = useState(`${props.className} col-2 container btn_holder`)
    let active = props.active;

    return(
        <div className={className} id={props.id}>
            <div className="row justify-content-center mb-3" id="tariffs_icons">
                <img className="col-6 tariff_icon" src={icon} alt=""></img>
                <img className="col-6 tariff_icon" src={icon} alt=""></img>
            </div>

            <div className="row justify-content-center" id="tariffs_name">
                <span className="col-12">{props.name}</span>
            </div>
        </div>
    )
}

export default TariffBtn;