import { useDispatch, useSelector } from 'react-redux';
import { change_consultation_tariff } from '../store/consultationReducer';
import './TariffCards.scss';
import $ from 'jquery'
import { change_index } from '../store/tariffCardReducer';
import { useEffect, useState } from 'react';


const TariffCard = ({ config, index }) => {

    const dispatch = useDispatch();

    const [itemClass, setItemClass] = useState(index == 0? 'carousel-item active col-lg-6 col-10 container tariff_card_holder' : 'carousel-item col-lg-6 col-10 container tariff_card_holder')
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


    return (
        <div id="tariff_cards" className="row justify-content-center align-items-center mt-5 tariffs_cards_holder">
        {/* проходимся по массиву тарифов и создаём карточку для каждого */}
        {cardsToRender.map((tariff, tariffI) => (
            <TariffCard key={tariff.name} config={tariff} index={tariffI} />
        ))}
        </div>

        // <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        //     <div class="carousel-inner container-fluid">
        //         <div className="row">
        //             <div className="col-12">
        //                 <div id="tariff_cards" className="row justify-content-center align-items-center mt-5 tariffs_cards_holder">
        //                 {/* проходимся по массиву тарифов и создаём карточку для каждого */}
        //                 {cardsToRender.map((tariff, tariffI) => (
        //                     <TariffCard key={tariff.name} config={tariff} index={tariffI} />
        //                 ))}
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
        //         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        //         <span class="visually-hidden">Предыдущий</span>
        //     </button>
        //     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
        //         <span class="carousel-control-next-icon" aria-hidden="true"></span>
        //         <span class="visually-hidden">Следующий</span>
        //     </button>
        // </div>
    )
}

export default TariffCards;