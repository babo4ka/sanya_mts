import { useDispatch, useSelector } from 'react-redux';
import { change_consultation_tariff } from '../store/consultationReducer';
import './TariffCards.scss';
import $ from 'jquery'
import { change_index } from '../store/tariffCardReducer';
import { useEffect, useState } from 'react';


const TariffCard = ({ config, index }) => {

    const dispatch = useDispatch();

    const setConsultationTariff = () => {
        $('#input_field_3').text('')
        $('#input_field_4').text('')
        dispatch(change_consultation_tariff(config.name));
    }

    const changeIndex = () => {
        dispatch(change_index(index))
    }

    const [angle, setAngle] = useState(0)
    const showExtra = (index) => {
        $(`#extra_shower_${index} img`).css('transform', `rotate(${angle}deg)`)
        setAngle(Math.abs(angle-180))
    }

    useEffect(async ()=>{
        
        $(window).resize(()=>{
            if($(window).width() > 576){
                if($(`#extra_collapse_${index}`).hasClass('text-start'))return
                $(`#extra_collapse_${index}`).toggleClass('text-start').toggleClass('text-center')
            }else{
                if($(`#extra_collapse_${index}`).hasClass('text-center'))return
                $(`#extra_collapse_${index}`).toggleClass('text-center').toggleClass('text-start')
            }
        })       
        
        $(window).ready(()=>{
            if($(window).width() > 576){
                if($(`#extra_collapse_${index}`).hasClass('text-start'))return
                $(`#extra_collapse_${index}`).toggleClass('text-start').toggleClass('text-center')
            }else{
                if($(`#extra_collapse_${index}`).hasClass('text-center'))return
                $(`#extra_collapse_${index}`).toggleClass('text-center').toggleClass('text-start')
            }
        })
    }, [])

    return (
        // контейнер для карточки
        <div className={`col-lg-6 col-10 container tariff_card_holder`}>
            <div className="row justify-content-center">

                {/* левая колонка */}
                <div className="col-6 card_cols left_col text-start">
                    {/* название тарифа */}
                    <span className="tariff_name">{config.name}</span>
                    {/* услуги тарифа */}
                    {config.services.map(service => (
                        <div key={service.name} className="services_holder mt-2">
                            <label htmlFor={`service${service.name}`}>
                                <img src={require(`../icons/red/${service.icon}`)} alt="" className="service_icon" />
                            </label>
                            <div id={`service${service.name}`} className="service">
                                <span>{service.name}</span>
                                <span>{service.value}</span>
                            </div>
                        </div>
                    ))}
                    {config.extra?(
                        <div>
                            <div className="extra_info_holder mt-3">
                                <button data-toggle="collapse" data-target={`#extra_collapse_${index}`} id={`extra_shower_${index}`} onClick={()=>showExtra(index)}><img src={require('../icons/white/arrow.png')} alt='' /></button>
                                <span>Дополнительно</span>
                            </div>
                        </div>
                    ):("")}
                </div>

                {/* правая колонка */}
                <div className="col-6 card_cols right_col">
                    {/* тип тарифа */}
                    <div className=" type_holder">
                        <span className="text-end">{config.type}</span>
                    </div>
                    {/* оборудование */}
                    {config.equip ? (
                        <div className="equip_holder mt-2">
                            <span>Оборудование:</span>
                            {config.equip.map(eq => (
                                <span className="mt-2" key={eq.value}>{eq.value}</span>
                            ))}
                        </div>
                    ) : ("")}

                    {/* цена тарифа */}
                    <div className="mt-2">
                        <span className="price">{config.price} руб./месяц</span>
                    </div>
                    {/* подключение */}
                    <div className="gen_btns mt-2 mb-2">
                        <button onClick={setConsultationTariff} className="col-6 get_btn connect_btn" data-bs-toggle='modal' data-bs-target='#request_modal'>Подключить</button>
                        <button onClick={changeIndex} data-bs-toggle='modal' data-bs-target='#more_modal' className="col-6 get_btn more_btn">Подробнее</button>
                    </div>
                </div>

                {/* колонка для смартфонов */}
                <div className="middle_col card_cols col-12">
                    <span className="tariff_name">{config.name}</span>
                    {/* услуги тарифа */}
                    {config.services.map(service => (
                        <div key={service.name} className="services_holder mt-2">
                            <label htmlFor={`service${service.name}`}>
                                <img src={require(`../icons/red/${service.icon}`)} alt="" className="service_icon" />
                            </label>
                            <div id={`service${service.name}`} className="service">
                                <span>{service.name}</span>
                                <span>{service.value}</span>
                            </div>
                        </div>
                    ))}
                    {/* оборудование */}
                    {config.equip ? (
                        <div className="equip_holder mt-2">
                            <span>Оборудование:</span>
                            {config.equip.map(eq => (
                                <span className="mt-2" key={eq.value}>{eq.value}</span>
                            ))}
                        </div>
                    ) : ("")}

                    {/* цена тарифа */}
                    <div className="mt-2">
                        <span className="price">{config.price} руб./месяц</span>
                    </div>
                    {/* подключение */}
                    <div className="gen_btns mt-2 mb-2">
                        <button onClick={setConsultationTariff} className="col-6 get_btn connect_btn" data-bs-toggle='modal' data-bs-target='#request_modal'>Подключить</button>
                        <button onClick={changeIndex} data-bs-toggle='modal' data-bs-target='#more_modal' className="col-6 get_btn more_btn">Подробнее</button>
                    </div>

                    {config.extra?(
                    <div>
                        <div className="extra_info_holder mt-3">
                            <button data-toggle="collapse" data-target={`#extra_collapse_${index}`} id={`extra_shower_${index}`} onClick={()=>showExtra(index)}><img src={require('../icons/white/arrow.png')} alt='' /></button>
                            <span>Дополнительно</span>
                        </div>
                    </div>
                    ):("")}
                </div>

                {/* Дополнительно */}
                <div className="row justify-content-start extra_full_holder mt-2">
                    <div className="collapse extra_collapse col-12 text-start" id={`extra_collapse_${index}`}>
                        {config.extra?.map(ex=>(
                            <span key={ex.value}>{ex.value}</span>
                        ))}
                    </div>
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
                        newI['second'] = newI.first + 1

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

    useEffect(async ()=>{
        if(cardsToRender.length == 0){
            setIndexes($(window).width()>1000?
            {
                first:0,
                second:1
            }:{
                first:0,
                second:undefined
            })
        }
    }, [cardsToRender])

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
    )
}

export default TariffCards;