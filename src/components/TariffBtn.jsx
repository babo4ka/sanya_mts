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

    // const [currentTags, setCurrentTags] = useState(store.getState().btns.tags)
    // let currentTags = useSelector(state => state.btns.tags)

    const ownTag = tag

    let className = `${config.tariffNav.inactive.className} btn_holder col-1 align-items-center justify-content-center row`

    const [color, setColor] = useState('gray')

    const picture = require(`../icons/${color}/${id}_${color}.png`)

    useEffect(async ()=>{

        $(`#${id}`).on('click', ()=>{
            let currentTags = store.getState().btns.tags
            console.log(currentTags)
            $(`#${id}`)
            .toggleClass(`${config.tariffNav.inactive.className}`)
            .toggleClass(`${config.tariffNav.active.className}`)

            setColor(prev=>{
                switch(prev){
                    case 'white':
                        return 'gray'

                    case 'gray':
                        return 'white'
                }
            })

            // $("#tariff_cards").fadeToggle(200, 'linear', function(){
            //     let tagsToDispatch
            //     if(!contains){
            //         tagsToDispatch = currentTags
            //         tagsToDispatch.push(ownTag)
            //     }else{
            //         tagsToDispatch = currentTags.filter(tag => tag !== ownTag)
            //     }
            //     console.log(tagsToDispatch)
            //     dispatch(set_tags_action(tagsToDispatch))
            // })

            let tagsToDispatch
            if(!currentTags.includes(ownTag)){
                tagsToDispatch = currentTags
                tagsToDispatch.push(ownTag)
            }else{
                tagsToDispatch = currentTags.filter(tag => tag !== ownTag)
            }
            console.log(tagsToDispatch)
            dispatch(set_tags_action(tagsToDispatch))

            currentTags = tagsToDispatch

            console.log(store.getState().btns.tags)
        
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