import './TariffBtn.scss'
import $ from 'jquery'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { set_tags_action } from '../store/tariffBtnReducer'
import { store } from '../store/store'
const config = require('../config.json')

const TariffBtn = ({id, tag}) =>{
//1043
    const dispatch = useDispatch();
    //const setCards = useSelector(state => state.funcs.setCards)


    const ownTag = tag

    let className = `${config.tariffNav.inactive.className} btn_holder col-1 align-items-center justify-content-center row`

    const [color, setColor] = useState('gray')

    const picture = require(`../icons/${color}/${id}_${color}.png`)

    useEffect(async ()=>{

        $(`#${id}`).on('click', ()=>{
            let currentTags = store.getState().btns.tags
            $(`#${id}`)
            .toggleClass(`${config.tariffNav.inactive.className}`)
            .toggleClass(`${config.tariffNav.active.className}`)

            setColor(prev=>{
                if(prev === 'white')return 'gray'
                return 'white'
            })

            $("#tariff_cards").fadeToggle(200, 'linear', function(){
                let tagsToDispatch
                if(!currentTags.includes(ownTag)){
                    tagsToDispatch = currentTags
                    tagsToDispatch.push(ownTag)
                }else{
                    tagsToDispatch = currentTags.filter(tag => tag !== ownTag)
                }
                dispatch(set_tags_action(tagsToDispatch))
    
                currentTags = tagsToDispatch

                //setCards()
            })

            
        
            $("#tariff_cards").fadeToggle(200, 'linear')
        })
    }, [])


    

    return(
        // контейнер кнопки навигации
        <div className={className} id={id}>
            <img className="tariff_icon" src={picture} alt=""></img>
        </div>
    )
}

export default TariffBtn;