import { useDispatch, useSelector } from 'react-redux';
import { change_consultation_tariff } from '../store/consultationReducer';
import './TariffCards.scss';
import $ from 'jquery'
import { change_index } from '../store/tariffCardReducer';

const TariffCard = (props) =>{

    const dispatch = useDispatch();

    const setConsultationTariff = () =>{
        // $('#input_holder_3 .name_validation').addClass('validation_hidden')
        // $('#input_field_3').removeClass('name_validation_invalid')

        // $('#input_holder_4 .phone_validation').addClass('validation_hidden')
        // $('#input_field_4').removeClass('phone_validation_invalid')

        $('#input_field_3').html('')
        $('#input_field_4').html('')
        dispatch(change_consultation_tariff(props.config.name));
    }

    const changeIndex = () =>{
        dispatch(change_index(props.index))
    }

    return(
        // контейнер для карточки
        <div className="col-lg-6 col-10 container-fluid tariff_card_holder">
            <div className="row justify-content-center">
                {/* левая колонка */}
                <div className="col-6 card_cols left_col text-start">
                    {/* название тарифа */}
                    <span className="tariff_name">{props.config.name}</span>
                    {/* услуги тарифа */}
                    {props.config.services.map(service=>(
                        <div key={service.name} className="services_holder mt-2">
                            <label htmlFor={`service${service.name}`}>
                                <img className="service_icon" src={require(`../icons/red/${service.icon}`)} alt=""></img>
                            </label>
                            <div id={`service${service.name}`} className="service">
                                <span>{service.name}</span>
                                <span>{service.value}</span>
                            </div>
                        </div>
                    ))}
                </div>
                {/* правая колонка */}
                <div className="col-6 card_cols right_col">
                    {/* тип тарифа */}
                    <div className="text-end">
                        <span className="type_holder">{props.config.type}</span>
                    </div>
                    {/* доп опции тарифа */}
                    <div className="extra_holder mt-2">
                        <span>Дополнительно:</span>
                        {props.config.extra.map(extr=>(
                            <span className="mt-2" key={extr.value}>{extr.value}</span>
                        ))}
                    </div>
                    {/* цена тарифа */}
                    <div className="mt-2">
                        <span className="price">{props.config.price} руб./месяц</span>
                    </div>
                    {/* подключение */}
                    
                    <div className=" gen_btns mt-2 mb-2">
                        <button onClick={setConsultationTariff} data-bs-toggle="modal" data-bs-target="#request_modal" className="col-6 get_btn connect_btn">Подключить</button>
                        <button onClick={changeIndex} data-bs-toggle="modal" data-bs-target="#more_modal" className="col-6 get_btn more_btn">Подробнее</button>
                    </div>
                    
                </div>

                {/* общая колонка для телефонов */}
                <div className="col-12 card_cols middle_col">
                    {/* название тарифа */}
                    <span className="tariff_name">{props.config.name}</span>

                    {/* услуги тарифа */}
                    {props.config.services.map(service=>(
                        <div key={service.name} className="services_holder mt-2">
                            <label htmlFor={`service${service.name}`}>
                                <img className="service_icon" src={require(`../icons/red/${service.icon}`)} alt=""></img>
                            </label>
                            <div id={`service${service.name}`} className="service text-start">
                                <span>{service.name}</span>
                                <span>{service.value}</span>
                            </div>
                        </div>
                    ))}

                    {/* доп опции тарифа */}
                    <div className="extra_holder mt-2">
                        <span>Дополнительно:</span>
                        {props.config.extra.map(extr=>(
                            <span className="mt-2" key={extr.value}>{extr.value}</span>
                        ))}
                    </div>
                    {/* цена тарифа */}
                    <div className="mt-2">
                        <span className="price">{props.config.price} руб./месяц</span>
                    </div>

                    {/* подключение */}
                    <div className=" gen_btns mt-2 mb-2">
                        <button onClick={setConsultationTariff} data-bs-toggle="modal" data-bs-target="#request_modal" className="col-6 get_btn connect_btn">Подключить</button>
                        <button onClick={changeIndex} data-bs-toggle="modal" data-bs-target="#more_modal" className="col-6 get_btn more_btn">Подробнее</button>
                    </div>
                    
                </div>
            </div>
        </div> 
    )
}

const TariffCards = () =>{

    const cardsArray = useSelector(state => state.cards.currentCards)


    return(

        <div id="tariff_cards" className="row justify-content-center mt-5 tariffs_cards_holder">
            {/* проходимся по массиву тарифов и создаём карточку для каждого */}
            {cardsArray.map((tariff, tariffI)=>(
                <TariffCard key={tariff.name} config={tariff} index={tariffI}/>
            ))}
        </div>

    )
}

export default TariffCards;