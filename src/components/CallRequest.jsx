import './CallRequest.scss'
import $ from 'jquery'
import { useEffect } from 'react'

const CallRequest = () =>{

    const bigStyles = {
        normal_margin:'0px 0px 5px 1px',
        float_margin:'-15px 0px 0px 1px',
        top:0,
        left:0
    }

    let littleStyles = {
        normal_margin_l: -$('.input_field, .input_holder label').width()/2,
        normal_margin_t: -$('.input_field, .input_holder label').height()/2,
        float_margin_l: -$('.input_field, .input_holder label').width()/2,
        float_margin_t: -$('.input_field, .input_holder label').height()/2 - 15,
        top:'50%',
        left:'50%'
    }

    const bigStyles_validation = {
        margin: "40px 0px 1px 1px",
        top:0,
        left:0,
        text_align:"start",
    }

    let littleStyles_validation = {
        margin_left: -$('.validation').width()/2,
        margin_top: $('.validation').height()/2 + 10,
        top:'50%',
        left:'50%',
        text_align:"center",
    }

    const setFloatStyles = (i)=>{
        if($(window).width()>991){
            $(`#input_holder_${i} label`).css('margin', bigStyles.float_margin)
            $(`#input_holder_${i} label`).css('top', bigStyles.top)
            $(`#input_holder_${i} label`).css('left', bigStyles.left)
        }else{
            $(`#input_holder_${i} label`).css('margin-left', littleStyles.float_margin_l)
            $(`#input_holder_${i} label`).css('margin-top', littleStyles.float_margin_t)
            $(`#input_holder_${i} label`).css('top', littleStyles.top)
            $(`#input_holder_${i} label`).css('left', littleStyles.left)
        }
    }

    const setNormalStyles = (i)=>{
        if($(window).width()>991){
            $(`.input_field, #input_holder_${i} label`).css('margin', bigStyles.normal_margin)
            $(`.input_field, #input_holder_${i} label`).css('top', bigStyles.top)
            $(`.input_field, #input_holder_${i} label`).css('left', bigStyles.left)
        }else{
            $(`.input_field, #input_holder_${i} label`).css('margin-left', littleStyles.normal_margin_l)
            $(`.input_field, #input_holder_${i} label`).css('margin-top', littleStyles.normal_margin_t)
            $(`.input_field, #input_holder_${i} label`).css('top', littleStyles.top)
            $(`.input_field, #input_holder_${i} label`).css('left', littleStyles.left)
        }
    }

    const maskOptions = { // создаем объект параметров
        mask: '+{7}(999) 000-00-00' // задаем единственный параметр mask
    }

    useEffect(async ()=>{
        for(let i=1; i<=4;i++){
            $(`#input_field_${i}`).focus(()=>{
                setFloatStyles(i);
            })

            $(`#input_field_${i}`).focusout(()=>{
                if($(`#input_field_${i}`).val() !== ''){
                    setFloatStyles(i);
                }else{
                    setNormalStyles(i);
                }
            }) 
    }

        $(window).resize(()=>{
            littleStyles.normal_margin_l = -$('.input_field, .input_holder label').width()/2;
            littleStyles.normal_margin_t = -$('.input_field, .input_holder label').height()/2;

            littleStyles.float_margin_l = -$('.input_field, .input_holder label').width()/2;
            littleStyles.float_margin_t = -$('.input_field, .input_holder label').height()/2 - 15;

            littleStyles_validation.margin_top = $('.validation').height()/2 + 10;


            for(let i=1;i<=4;i++){
                if($(`#input_field_${i}`).val() !== ''){
                    setFloatStyles(i)
                }else{
                    setNormalStyles(i)
                }
            }
            
            if($(window).width() > 991){
                $('.name_validation, .phone_validation').css('margin', bigStyles_validation.margin)
                $('.name_validation, .phone_validation').css('top', bigStyles_validation.top)
                $('.name_validation, .phone_validation').css('left', bigStyles_validation.left)
                $('.name_validation, .phone_validation').css('text-align', bigStyles_validation.text_align)
            }else{
                $('.name_validation, .phone_validation').css('margin-left', littleStyles_validation.margin_left)
                $('.name_validation, .phone_validation').css('margin-top', littleStyles_validation.margin_top)
                $('.name_validation, .phone_validation').css('top', littleStyles_validation.top)
                $('.name_validation, .phone_validation').css('left', littleStyles_validation.left)
                $('.name_validation, .phone_validation').css('text-align', littleStyles_validation.text_align)
            }
        })

        $(window).ready(()=>{
            littleStyles.normal_margin_l = -$('.input_field, .input_holder label').width()/2;
            littleStyles.normal_margin_t = -$('.input_field, .input_holder label').height()/2;

            littleStyles.float_margin_l = -$('.input_field, .input_holder label').width()/2;
            littleStyles.float_margin_t = -$('.input_field, .input_holder label').height()/2 - 15;
            
            if($(window).width()<=991){
                $('.input_field, .input_holder label')
                .css('margin-left', -$('.input_field, .input_holder label').width()/2)

                $('.input_field, .input_holder label')
                .css('margin-top', -$('.input_field, .input_holder label').height()/2)

                $('.input_field, .input_holder label').css('left', '50%')
                $('.input_field, .input_holder label').css('top', '50%')

                $('.name_validation, .phone_validation').css('margin-left', littleStyles_validation.margin_left)
                $('.name_validation, .phone_validation').css('margin-top', littleStyles_validation.margin_top)
                $('.name_validation, .phone_validation').css('top', littleStyles_validation.top)
                $('.name_validation, .phone_validation').css('left', littleStyles_validation.left)
                $('.name_validation, .phone_validation').css('text-align', littleStyles_validation.text_align)
            }
            
            if($(window).width()>991){
                $('.input_field, .input_holder label').css('margin', '0px 0px 5px 1px')

                $('.input_field, .input_holder label').css('left', '0')
                $('.input_field, .input_holder label').css('top', '0')

                $('.name_validation, .phone_validation').css('margin', bigStyles_validation.margin)
                $('.name_validation, .phone_validation').css('top', bigStyles_validation.top)
                $('.name_validation, .phone_validation').css('left', bigStyles_validation.left)
                $('.name_validation, .phone_validation').css('text-align', bigStyles_validation.text_align)
            }
        })
        
    }, [])

    const sendMessage = (e)=>{
        e.preventDefault()
        if($('#input_field_1').val() == ''){
            $('.input_holder .name_validation').removeClass('validation_hidden')
        }

        if($('#input_field_2').val() == ''){
            $('.input_holder .phone_validation').removeClass('validation_hidden')
            
            return;
        }
        
        
        $.ajax({
            type: "POST",
            url:"http://localhost/TelegrammRequest.php",
            data: $('#request_form').serialize(),
            // beforeSend: function(request) {
            //     request.setRequestHeader("AAccess-Control-Allow-Origin", true);
            //   },

        })
    }


    return(
        <div className="call_request_holder mt-5 container pb-2 col-md-8">
            
            <div className="row justify-content-center">
                <span className="request_text mt-3">Оставьте заявку на звонок и я сам Вам перезвоню!</span>

                <form onSubmit={sendMessage} className="needs-validation row justify-content-center mt-3 pb-3" id="request_form">

                    <div id="input_holder_1" className="col-lg-4 input_holder">
                        <input className="input_field" id="input_field_1" type="text" name="caller_name" placeholder='Имя'></input>
                        <label htmlFor="input_field_1">Имя</label>
                        <span className="validation name_validation validation_hidden">Было бы неплохо, если бы я знал как к Вам обращаться :)</span>
                    </div>
                    
                    <div id="input_holder_2" className="col-lg-4 input_holder">
                        <input className="input_field" id="input_field_2" type="text" name="caller_phone" placeholder='Номер телефона'></input>
                        <label htmlFor="input_field_2">Номер телефона</label>
                        <span className="validation phone_validation validation_hidden">Введите номер телефона</span>
                    </div>
                    
                    <button className='col-md-4 col-8 mt-5 request_btn'>Оставить заявку</button>
                </form>
                
            </div>
        </div>
    )
}

export default CallRequest;
