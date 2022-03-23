import { useDispatch, useSelector } from 'react-redux';
import './TariffCards.scss';

const TariffCard = (props) =>{


    return(
        // контейнер для карточки
        <div key={props.key} className="col-lg-6 col-10 container-fluid tariff_card_holder">
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
                    <div className="type_holder">
                        <span>{props.config.type}</span>
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
                        <button className="col-6 get_btn connect_btn">Подключить</button>
                        <button className="col-6 get_btn more_btn">Подробнее</button>
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
                        <button className="col-6 get_btn connect_btn">Подключить</button>
                        <button className="col-6 get_btn more_btn">Подробнее</button>
                    </div>
                    
                </div>
            </div>
        </div> 
    )
}

const TariffCards = () =>{

    const dispatch = useDispatch();
    const cardsArray = useSelector(state => state.cards.currentCards)


    return(

        <div id="tariff_cards" className="row justify-content-center mt-5 tariffs_cards_holder">
            {/* проходимся по массиву тарифов и создаём карточку для каждого */}
            {cardsArray.map(tariff=>(
                <TariffCard key={tariff.name} config={tariff}/>
            ))}
        </div>

    )
}

export default TariffCards;