import { useDispatch} from 'react-redux';
import './TariffCards.scss';
import $ from 'jquery'
import { change_index } from '../store/tariffCardReducer';
import { useEffect, useState } from 'react';


const TariffCard = ({ config, index }) => {

    const dispatch = useDispatch();


    const changeIndex = () => {
        dispatch(change_index(index))
    }



    return (
        // контейнер для карточки
        <div className={`col-lg-6 col-10 container tariff_card_holder`}>
            <div className="row justify-content-center">

                <span className="tariff_name">{config.name}</span>
                <span className="price">{config.price} руб./месяц</span>

                <div className="popup_info row justify-content-center">
                    <span>{config.short}</span>
                    <button className="connect_btn" data-bs-toggle="modal" data-bs-target="#info_modal" onClick={changeIndex}>Узнать больше</button>
                </div>

                {/* колонка для смартфонов */}
                <div className="middle_col card_cols col-12 mt-3">
                    <span>{config.short}</span>
                    <button className="connect_btn col-12 mt-3" data-bs-toggle="modal" data-bs-target="#info_modal" onClick={changeIndex}>Узнать больше</button>
                </div>

            </div>
        </div>
    )
}

const TariffCards = ({ cardsToRender }) => {

    const [indexes, setIndexes] = useState(
        $(window).width()>1059?
        {
            first:0,
            second:1
        }:{
            first:0,
            second:undefined
        })
    
    let big = $(window).width()>1059
    useEffect(async ()=>{

        $(window).resize(()=>{
            if($(window).width() > 1059){
                if(!big){
                    setIndexes(prev=>{
                        let newI = JSON.parse(JSON.stringify(prev))
                        newI['second'] = newI.first + 1 == cardsToRender.length?0:newI.first+1

                        return newI
                    })
                    big = !big
                }
            }else{
                if(big){
                    setIndexes(prev=>{
                        let newI = JSON.parse(JSON.stringify(prev))
                        newI['second'] = undefined

                        return newI
                    })
                    big = !big
                }
            }
        })
    }, [])

    // useEffect(async ()=>{
    //     if(cardsToRender.length == 0){
    //         setIndexes($(window).width()>1059?
    //         {
    //             first:0,
    //             second:1
    //         }:{
    //             first:0,
    //             second:undefined
    //         })
    //     }
    // }, [cardsToRender])

    const goNext = ()=>{
        $('#tariff_cards').fadeToggle('fast', ()=>{
            let nF = indexes.first
            let nS = indexes.second
    
            nF = nF + 1 == cardsToRender.length?0:nF+1
            nS = undefined? undefined:(nS+1==cardsToRender.length?0:nS+1)
    
    
            setIndexes({
                first:nF,
                second:nS
            })
        })
        
        $('#tariff_cards').fadeToggle('fast')
    }

    const goPrev = () =>{
        $('#tariff_cards').fadeToggle('fast', ()=>{
            let pF = indexes.first
            let pS = indexes.second
    
            pF = pF - 1 < 0?cardsToRender.length-1:pF-1
            pS = undefined? undefined:(pS-1 < 0?cardsToRender.length-1:pS-1)
    
    
            setIndexes({
                first:pF,
                second:pS
            })
        })

        
        $('#tariff_cards').fadeToggle('fast')
    }

    return (
        <div>
            {cardsToRender?(
                <div>
                    {cardsToRender.length>0?(
                <div id="tariff_cards" className="row justify-content-center align-items-center mt-5 tariffs_cards_holder">
                    <button onClick={goNext} className="tariffs_holder_nav_btn tariffs_holder_nav_btn_right"><img src={require('../icons/black/arrow_1.png')} alt="" /></button>
                    <button onClick={goPrev} className="tariffs_holder_nav_btn tariffs_holder_nav_btn_left"><img src={require('../icons/black/arrow_1.png')} alt="" /></button>
                    
                    <TariffCard config={cardsToRender[indexes.first]} index={indexes.first}/>
                    {indexes.second || indexes.second > -1?(
                        <TariffCard config={cardsToRender[indexes.second]} index={indexes.second}/>
                    ):("")}
                </div>
            ):("")}
                    </div>
            ):("Загрузка")}
            
        </div>
    )
}

export default TariffCards;