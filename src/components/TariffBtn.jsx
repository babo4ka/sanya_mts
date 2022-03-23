import './TariffBtn.scss'
import $ from 'jquery'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const config = require('../config.json')

const TariffBtn = (props) =>{
//1043
    const dispatch = useDispatch();
    const stateObject = useSelector(state => state.btns.groups[props.groupI])

    const pics = Object.keys(stateObject).filter(key => (
        key !== 'config' && key !== 'name'
    )).map(key =>(
        stateObject[key]
    ))

    useEffect(async ()=>{

        $(`#${props.id}`).on('click', ()=>{
            $("#tariff_cards").fadeToggle(200, 'linear', function(){
                dispatch(props.choose())
            })

            dispatch(props.makeActive())
        
            $("#tariff_cards").fadeToggle(200, 'linear')
        })
    }, [])


    let className = `${stateObject.config.className} col-2 container btn_holder`
    let active = stateObject.config.active

    return(
        // контейнер кнопки навигации
        <div className={className} id={props.id}>
            <div className="row justify-content-center mb-3" id="tariffs_icons">
                {/* иконки тарифа */}
                {pics.map(pic=>(
                    <img key={pic} className="col-6 tariff_icon" src={pic} alt=""></img>
                ))}
            </div>
            {/* название тарифа   */}
            <div className="row justify-content-center" id="tariffs_name">
                <span className="col-12 text-truncate w-100 p-0">{props.name}</span>
            </div>
        </div>
    )
}

export default TariffBtn;