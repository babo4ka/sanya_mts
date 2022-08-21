import './CallRequest.scss'
import $ from 'jquery'
import { useEffect } from 'react'
import IMask from 'imask'
import { Link } from 'react-router-dom'

const config = require('../config.json')
const CallRequest = () =>{

    useEffect(async ()=>{
        IMask(document.getElementById('input_field_2'), config.maskOptions)


        $(window).resize(()=>{

            if($(window).width()<=991){
                $('.name_validation, .phone_validation').css('margin', '40px 0px 1px 25px')
            }
            
            if($(window).width()>991){
                $('.name_validation, .phone_validation').css('margin', '40px 0px 1px 45px')
            }
        })

        $(window).ready(()=>{            
            
            if($(window).width()<=991){
                $('.name_validation, .phone_validation').css('margin', '40px 0px 1px 45px')
            }
            
            if($(window).width()>991){
                $('.name_validation, .phone_validation').css('margin', '40px 0px 1px 25px')
            }
        })
        
    }, [])

    const data = ['Имя:', 'Номер телефона:']

    const sendMessage = (e)=>{
        e.preventDefault()

        let dataToSend = $('#request_form').serializeArray()
        console.log(dataToSend)

        let msg = 'Консультация по всем тарифам:%0A'
        $('#request_form').serializeArray().map((el, I)=>{
            msg = `${msg}${data[I]} ${el.value}%0A`
        })

        if($('#input_field_2').val() == ''){
            $('#input_field_2').addClass('phone_validation_invalid')
            $('#input_holder_2 .phone_validation').removeClass('validation_hidden')
            return;
        }
        
        $.ajax({
            type: "POST",
            url:config.tg_consult_URL + msg,
        })

        $('#request_success_main').css('display', 'block')
        setTimeout(()=>{
            $('#request_success_main').css('display', 'none')
            
        }, 3500)
    }


    const clearValidation = (e) =>{
        if(e.target.id == 'input_field_2' || e == 'input_field_1'){
            $('#input_holder_2 .phone_validation').addClass('validation_hidden')
            $('#input_field_2').removeClass('phone_validation_invalid')
        }
    }

    


    return(
        <div className="call_request_holder mt-5 container pb-2 col-md-8">
            
            <div className="row justify-content-center">
                <span className="request_text mt-2">Оставьте номер телефона и я позвоню Вам и проконсультирую по всем тарифам и акциям</span>
                <span className="request_text mt-2">Или выберите один из тарифов 
                <a href="#tariffs_tags" id="link_to_tariffs"> ниже </a>
                и я проконсультирую Вас по выбранному тарифу</span>

                <form onSubmit={sendMessage} className="needs-validation row justify-content-center mt-2 pb-3" id="request_form">

                    <div id="input_holder_1" className="col-lg-4 input_holder">
                        <input onChange={clearValidation} className="input_field" id="input_field_1" type="text" name="caller_name" placeholder='Имя(необязательно)'></input>
                    </div>
                    
                    <div id="input_holder_2" className="col-lg-4 input_holder">
                        <input onChange={clearValidation} className="input_field" id="input_field_2" type="text" name="caller_phone" placeholder='Номер телефона'></input>
                        <span className="validation phone_validation val_main validation_hidden">Введите номер телефона</span>
                    </div>
                    
                    <span className="mt-3 request_success" id="request_success_main">Заявка успешно отправлена, я скоро Вам перезвоню :)</span>

                    <button className='col-md-4 col-8 mt-2 request_btn'>Оставить заявку</button>
                </form>
                
                <Link to="privacy" >Политика конфиденциальности</Link>
            </div>
        </div>
    )
}

export default CallRequest;
