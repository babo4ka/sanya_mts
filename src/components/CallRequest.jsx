import './CallRequest.scss'
import $ from 'jquery'
import { useEffect } from 'react'
const CallRequest = () =>{

    useEffect(async ()=>{
        $(window).resize(()=>{
            if($(window).width()<=991){
                $('.input_field, .input_holder label').css('margin-left', -$('.input_field, .input_holder label').width()/2)
                $('.input_field, .input_holder label').css('margin-top', -$('.input_field, .input_holder label').height()/2)

                $('.input_field, .input_holder label').css('left', '50%')
                $('.input_field, .input_holder label').css('top', '50%')
            }
            
            if($(window).width()>991){
                $('.input_field, .input_holder label').css('margin', '0px 0px 5px 1px')

                $('.input_field, .input_holder label').css('left', '0')
                $('.input_field, .input_holder label').css('top', '0')
            }
        })

        $(window).ready(()=>{
            if($(window).width()<=991){
                $('.input_field, .input_holder label').css('margin-left', -$('.input_field, .input_holder label').width()/2)
                $('.input_field, .input_holder label').css('margin-top', -$('.input_field, .input_holder label').height()/2)

                $('.input_field, .input_holder label').css('left', '50%')
                $('.input_field, .input_holder label').css('top', '50%')
            }
            
            if($(window).width()>991){
                $('.input_field, .input_holder label').css('margin', '0px 0px 5px 1px')

                $('.input_field, .input_holder label').css('left', '0')
                $('.input_field, .input_holder label').css('top', '0')
            }
        })
    }, [])
    //console.log($('.input_field, .input_holder label').height())
    return(
        <div className="call_request_holder mt-5 container pb-2 col-md-8">
            <div className="row justify-content-center">
                <span className="request_text">Оставьте заявку на звонок и я сам Вам перезвоню!</span>

                <form action="" className="row justify-content-center mt-5 pb-5">
                    <div className="col-lg-4 input_holder">
                        <input className="input_field" id="name_input" type="text" placeholder='Имя'></input>
                        <label htmlFor="name_input">Имя</label>
                    </div>
                    
                    <div className="col-lg-4 input_holder">
                        <input className="input_field" id="phone_input" type="text" placeholder='Номер телефона'></input>
                        <label htmlFor="phone_input">Номер телефона</label>
                    </div>
                </form>
                
            </div>
        </div>
    )
}

export default CallRequest;
