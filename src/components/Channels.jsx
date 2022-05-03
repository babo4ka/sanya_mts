import { useState } from 'react'
import './Channels.scss'
import $ from 'jquery'
import { Link } from 'react-router-dom'
const channels = require('../channels.json')
const ch_list = require('../список_каналов.pdf')
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
                <Link to={ch_list} target='_blank'>Скачать список каналов(.pdf)</Link>
            </div>
        </div>
    )
}

export default Channels;