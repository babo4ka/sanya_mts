import { useSelector } from 'react-redux'
import './ModalCallRequest.scss'
import $ from 'jquery'
import { useEffect } from 'react'
import IMask from 'imask'
import close_icon from '../icons/red/krestik.png'
const config = require('../config.json')
const ModalCallRequest = ()=>{

    const tariff = useSelector(state => state.consultation.consultation)

    const sendMessage = (e)=>{
        e.preventDefault()
        const toSendData = `${$('#modal_request_form').serialize()}&tariff=${tariff}`
        if($('#input_field_3').val() == ''){
            $('#input_field_3').addClass('name_validation_invalid')
            $('.input_holder .name_validation').removeClass('validation_hidden')
            
        }

        if($('#input_field_4').val() == ''){
            $('#input_field_4').addClass('phone_validation_invalid')
            $('.input_holder .phone_validation').removeClass('validation_hidden')
            return;
        }
        
        
        $.ajax({
            type: "POST",
            url:"http://localhost/TelegrammRequest.php",
            data: toSendData,
            // beforeSend: function(request) {
            //     request.setRequestHeader("AAccess-Control-Allow-Origin", true);
            //   },
        })

        $('#request_success_modal').css('display', 'block')
        setTimeout(()=>{
            $('#request_success_modal').css('display', 'none')
            
        }, 3500)
    }

    const clearValidation = (e) =>{
        if(e.target.id == 'input_field_3'){
            $('#input_holder_3 .name_validation').addClass('validation_hidden')
            $('#input_field_3').removeClass('name_validation_invalid')
        }

        if(e.target.id == 'input_field_4'){
            $('#input_holder_4 .phone_validation').addClass('validation_hidden')
            $('#input_field_4').removeClass('phone_validation_invalid')
        }
    }

    useEffect(async ()=>{
        IMask(document.getElementById('input_field_4'), config.maskOptions)
    }, [])


    return(
        <div className="modal" id="request_modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="container-fluid modal-content">
                    <div className="row justify-content-center">

                        <a className="close_icon_holder" data-bs-dismiss="modal"><img id="close_icon" src={close_icon}></img></a>

                        <span className="request_text mt-3">Заказать консультацию по тарифу:</span>
                        <span className="request_text">{tariff}</span>
                        <form id="modal_request_form" onSubmit={sendMessage} action="" className="row justify-content-center pb-3">
                            <div id="input_holder_3" className="col-lg-6 input_holder">
                                <input onChange={clearValidation} className="input_field" id="input_field_3" type="text" name="caller_name" placeholder='Имя'></input>
                                <label htmlFor="input_field_3">Имя</label>
                                <span className="validation name_validation val_modal validation_hidden">Было бы неплохо, если бы я знал как к Вам обращаться :)</span>
                            </div>
                            
                            <div id="input_holder_4" className="col-lg-6 input_holder">
                                <input onChange={clearValidation} className="input_field" id="input_field_4" type="text" name="caller_phone" placeholder='Номер телефона'></input>
                                <label htmlFor="input_field_4">Номер телефона</label>
                                <span className="validation phone_validation val_modal validation_hidden">Введите номер телефона</span>
                            </div>
                            
                            <span className="mt-3 request_success" id="request_success_modal">Заявка успешно отправлена, я скоро Вам перезвоню :)</span>

                            <button className='col-8 mt-5 request_btn'>Оставить заявку</button>
                        </form>
                    </div>        
                </div>
            </div>
        </div>
    )
}

export default ModalCallRequest;