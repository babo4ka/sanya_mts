import './TariffBtn.scss'
import $ from 'jquery'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const config = require('../config.json')

const TariffBtn = (props) =>{

    const dispatch = useDispatch();
    const stateObject = useSelector(state => state.groups[props.groupI])



    const pics = Object.keys(stateObject).filter(key => (
        key !== 'config'
    )).map(key =>(
        stateObject[key]
    ))

    useEffect(async ()=>{

        $(`#${props.id}`).on('click', ()=>{
            if(active){
                return;
            }

            dispatch(props.dispatch())

            setClassName(`${stateObject.config.className} col-2 container btn_holder`);

            active = stateObject.config.active;
        })
    }, [])


    const [className, setClassName] = useState(`${stateObject.config.className} col-2 container btn_holder`)
    let active = stateObject.config.active;

    return(
        <div className={className} id={props.id}>
            <div className="row justify-content-center mb-3" id="tariffs_icons">
                {pics.map(pic=>(
                    <img className="col-6 tariff_icon" src={pic} alt=""></img>
                ))}
            </div>

            <div className="row justify-content-center" id="tariffs_name">
                <span className="col-12">{props.name}</span>
            </div>
        </div>
    )
}

export default TariffBtn;