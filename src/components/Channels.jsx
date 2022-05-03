import { useState } from 'react'
import './Channels.scss'
import $ from 'jquery'
const channels = require('../channels.json')

const Channels = () =>{
    

    const [group, setGroup] = useState(0)

    const goNext = () =>{
        $('#channels').fadeToggle('fast', ()=>{
            setGroup(prev => {
                if(prev + 1 == channels.channels.length)return 0
                return prev+1
            })
        })
        $('#channels').fadeToggle('fast')
    }

    const goPrev = () =>{
        $('#channels').fadeToggle('fast', ()=>{
            setGroup(prev => {
                if(prev - 1 < 0)return channels.channels.length-1
                return prev-1
            })
        })
        $('#channels').fadeToggle('fast')
    }

    return(
        <div id="channels" className="container mt-5">
            <div className="row justify-content-center align-items-center">
                    <button onClick={goNext} className="tariffs_holder_nav_btn tariffs_holder_nav_btn_right"><img src={require('../icons/black/arrow_1.png')} alt="" /></button>
                    <button onClick={goPrev} className="tariffs_holder_nav_btn tariffs_holder_nav_btn_left"><img src={require('../icons/black/arrow_1.png')} alt="" /></button>
                    <span className="channels_list">Список каналов</span>
                    <div className="channels_holder col-12 col-md-6 row">
                        <span className="channel_group mb-3">{channels.channels[group].name}</span>
                        {channels.channels[group].channels.map(channel => (
                            <span className="channel_name col-3">{channel}</span>
                        ))}
                    </div>
            </div>
        </div>
    )
}

export default Channels;