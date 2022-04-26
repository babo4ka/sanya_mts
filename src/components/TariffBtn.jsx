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

    const [currentTags, setCurrentTags] = useState(useSelector(state => state.btns.tags))

    const ownTag = tag

    let className = `${config.tariffNav.inactive.className} col-2 btn_holder`

    const picture = require(`../icons/gray/${id}_gray.png`)

    useEffect(async ()=>{

        $(`#${id}`).on('click', ()=>{
            console.log(currentTags)
            const contains = currentTags.includes(ownTag)
            console.log(currentTags.includes(ownTag))
            $(`#${id}`)
            .toggleClass(`${config.tariffNav.inactive.className}`)
            .toggleClass(`${config.tariffNav.active.className}`)


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

            setCurrentTags(tagsToDispatch)

            console.log(store.getState().btns.tags)
        
            $("#tariff_cards").fadeToggle(200, 'linear')
        })
    }, [])


    

    return(
        // контейнер кнопки навигации
        <div className={className} id={id}>
            <img className="col-6 tariff_icon" src={picture} alt=""></img>
        </div>
    )
}

export default TariffBtn;