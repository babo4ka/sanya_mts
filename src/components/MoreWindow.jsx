import { useSelector } from 'react-redux';
import './MoreWindow.scss'

const MoreWindow = () =>{

    const index = useSelector(state => state.cards.index)
    const config = useSelector(state => state.cards.currentCards);
    const tariff = config[index];
    const more_about_tariff = config[index].more;

    const content = new Map([
        ["connect_type", "Тип подключения"],
        ["connect_price", "Стоимость подключения"],
        ["speed", "Скорость входящая/исходящая"],
        ["router_rent", "Аренда роутера"],
        ["router_price", "Стоимость роутера"],
        ["multiroom", "Мультирум"],
        ["multiscreen", "Мультискрин"],
        ["hd_channels", "Количество HD каналов"],
        ["sd_channels", "Количество SD каналов"],
        ["second_box_price", "Стоимость второй приставки"],
        ["box_rent", "Аренда приставки"],
        ["box_price", "Стоимость приставки"],
        ["cam_module", "Стоимость CAM-модуля"],
        ["cam_module_rent", "Аренда CAM-модуля"],
        ["calls", "Звонки"],
        ["internet", "Интернет-трафик"],
        ["sms", "Пакет СМС"]
    ]);


    return (
        
        <div class="modal fade" id="more_modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-scrollable modal-dialog-centered">
                <div class="modal-content">
                    <div className="container modal-body">
                        <div className="row">
                            
                        </div>
                        
                        <div className="row text-start" id="more_name_price_holder">
                            <span className='col-12 more_header'>{tariff.name}</span>
                            <span className='col-12 more_header'>{tariff.price} руб/мес</span>
                        </div>

                        
                        <div className="row text-start">
                            {more_about_tariff.map((info, infoKey) =>(
                               <div className="col-4 row mt-4 more_val_info">
                                   <span className="more_val_name">{info.name}</span>

                                    {Object.keys(info).filter(key => key!=='name').map(key => (
                                        <div className="more_val_info">
                                            <span className="more_val_content_name">{content.get(key)}</span>
                                            <span className="more_val_content">{info[key.toString()]}</span>
                                        </div>
                                    ))}
                               </div> 
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoreWindow;