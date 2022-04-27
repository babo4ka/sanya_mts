import { useDispatch, useSelector } from 'react-redux';
import { change_consultation_tariff } from '../store/consultationReducer';
import './TariffCards.scss';
import $ from 'jquery'
import { change_index } from '../store/tariffCardReducer';
import { useEffect, useState } from 'react';
import { store } from '../store/store';
import { set_cards_action } from '../store/funcsReducer';

const TariffCard = ({ config, index }) => {

    const dispatch = useDispatch();



    const setConsultationTariff = () => {
        // $('#input_holder_3 .name_validation').addClass('validation_hidden')
        // $('#input_field_3').removeClass('name_validation_invalid')

        // $('#input_holder_4 .phone_validation').addClass('validation_hidden')
        // $('#input_field_4').removeClass('phone_validation_invalid')

        $('#input_field_3').text('')
        $('#input_field_4').text('')
        dispatch(change_consultation_tariff(config.name));
    }

    const changeIndex = () => {
        dispatch(change_index(index))
    }

    return (
        // контейнер для карточки
        <div className="col-lg-6 col-10 container-fluid tariff_card_holder">
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
                </div>

                {/* правая колонка */}
                <div className="col-6 card_cols right_col">
                    {/* тип тарифа */}
                    <div className=" type_holder">
                        <span className="text-end">{config.type}</span>
                    </div>
                    {/* оборудование */}
                    <div className="extra_holder mt-2">
                        <span>Оборудование:</span>
                        {config.equip?.map(eq => (
                            <span className="mt-2" key={eq.value}>{eq.value}</span>
                        ))}
                    </div>
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
            </div>
        </div>
    )
}

const TariffCards = () => {

    const cardsArray = useSelector(state => state.cards.tariffCards)

    const [cardsToShow, setCardsToShow] = useState(cardsArray)

    // const dispatch = useDispatch()
    // useEffect(async () =>{
    //     dispatch(set_cards_action(setCards))
    // }, [])

    const setCards = () =>{
        let tags = store.getState().btns.tags
        let cards = store.getState().cards.tariffCards
        

        cards = cards.map(card => {
            if(tags.length == 0)return card
            let containsAll = true
            for(let i=0; i<tags.length;i++){
                if(card.tags.find(el => el == tags[i]) == undefined){
                    containsAll = false
                    break
                }
            }
            // console.log(containsAll)
            if(containsAll)return card
            else return null
            
        })

        setCardsToShow(cards.filter(el => el!=null))
        console.log(cardsToShow)

    }





    return (

        <div id="tariff_cards" className="row justify-content-center mt-5 tariffs_cards_holder align-items-center">
            {/* проходимся по массиву тарифов и создаём карточку для каждого */}
            {cardsToShow.map((tariff, tariffI) => (
                <TariffCard key={tariff.name} config={tariff} index={tariffI} />
            ))}
        </div>

    )
}

export default TariffCards;