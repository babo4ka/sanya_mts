import "./ModalInfo.scss"
import { useSelector } from 'react-redux'
import $ from 'jquery'
import { useEffect } from 'react'
import IMask from 'imask'
import close_icon from '../icons/red/krestik.png'
import Channels from "./Channels"

const config = require('../config.json')

const ModalInfo = ({cards}) =>{

    const index = useSelector(state => state.cards.index)
    const tariffs = useSelector(state => state.cards.tariffCards)
    const tariff = tariffs[index]
    const data = ['Имя:', 'Номер телефона:']
    const sendMessage = (e)=>{
        e.preventDefault()

        let msg = `Консультация по тарифу ${tariff.name}:%0A`
        $('#modal_request_form').serializeArray().map((el, I)=>{
            msg = `${msg}${data[I]} ${el.value}%0A`
        })

        if($('#input_field_4').val() == ''){
            $('#input_field_4').addClass('phone_validation_invalid')
            $('#input_holder_4 .phone_validation').removeClass('validation_hidden')
            return;
        }
        
        
        $.ajax({
            type: "POST",
            url:config.tg_consult_URL + msg,
        })

        $('#request_success_modal').css('display', 'block')
        setTimeout(()=>{
            $('#request_success_modal').css('display', 'none')
            
        }, 3500)
    }

    useEffect(async ()=>{
        IMask(document.getElementById('input_field_4'), config.maskOptions)
        clearValidation()
    }, [])

    
    const clearValidation = () =>{
            $('#input_holder_4 .phone_validation').addClass('validation_hidden')
            $('#input_field_4').removeClass('phone_validation_invalid')
    }

    return(
        <div className="modal" id="info_modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="container-fluid modal-content">
                    <div className="row justify-content-center">

                        <a className="close_icon_holder" data-bs-dismiss="modal"><img id="close_icon" src={close_icon}></img></a>

                        <span className="request_text">Информация по тарифу {tariff.name}</span>

                        <div className="col-12 col-md-6 left_col row justify-content-start text-start">
                            {tariff.services.map((s, sI)=>(
                                <div key={sI} className="col-12 row service">
                                    <div className="name-service_holder col-12">
                                        <div className="icon_hold">
                                            <img className="icon_img" src={require(`../icons/white/${s.icon}`)}></img>
                                        </div>
                                        <span className="service_name">{s.name}</span>
                                    </div>
                                    
                                    <span className="col-12 service_value">{s.value}</span>
                                </div>
                            ))}
                        </div>

                        <div className="col-12 col-md-6 right-col row justify-content-center text-start">
                            {tariff.extra!=undefined?(
                                <span className="ex_eq_name">Дополнительно:</span>
                            ):""}
                            {tariff.extra!=undefined?(
                                tariff.extra.map((e, eI)=>(
                                    <span key={eI}>{e.value}</span>
                                ))
                            ):""}

                            {tariff.equip!=undefined?(
                                <span className="ex_eq_name">Оборудование:</span>
                            ):""}
                            {tariff.equip!=undefined?(
                                tariff.equip.map((e, eI)=>(
                                    <span key={eI}>{e.value}</span>
                                ))
                            ):""}
                        </div>

                        {tariff.tags.includes("tv")?<Channels/>:""}

                        <span className="col-12 mt-3 price">{tariff.price} руб./месяц</span>

                        <form id="modal_request_form" onSubmit={sendMessage} action="" className="row justify-content-center pb-3">
                            <div id="input_holder_3" className="col-lg-6 input_holder">
                                <input onChange={clearValidation} className="input_field" id="input_field_3" type="text" name="caller_name" placeholder='Имя(необязательно)'></input>
                            </div>
                            
                            <div id="input_holder_4" className="col-lg-6 input_holder">
                                <input onChange={clearValidation} className="input_field" id="input_field_4" type="text" name="caller_phone" placeholder='Номер телефона'></input>
                                <span className="validation phone_validation val_modal validation_hidden">Введите номер телефона</span>
                            </div>
                            
                            <span className="mt-3 request_success" id="request_success_modal">Заявка успешно отправлена, я скоро Вам перезвоню :)</span>

                            <button className='col-8 mt-2 request_btn'>Оставить заявку</button>
                        </form>
                    </div>        
                </div>
            </div>
        </div>
    )
}

export default ModalInfo