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

    useEffect(async ()=>{
        for(let i=1; i<=2;i++){
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


            for(let i=1;i<=2;i++){
                if($(`#input_field_${i}`).val() !== ''){
                    setFloatStyles(i)
                }else{
                    setNormalStyles(i)
                }
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
            }
            
            if($(window).width()>991){
                $('.input_field, .input_holder label').css('margin', '0px 0px 5px 1px')

                $('.input_field, .input_holder label').css('left', '0')
                $('.input_field, .input_holder label').css('top', '0')
            }
        })
        
    }, [])

    return(
        <div className="call_request_holder mt-5 container pb-2 col-md-8">
            <div className="row justify-content-center">
                <span className="request_text">Оставьте заявку на звонок и я сам Вам перезвоню!</span>

                <form action="" className="row justify-content-center mt-5 pb-3">

                    <div id="input_holder_1" className="col-lg-4 input_holder">
                        <input className="input_field" id="input_field_1" type="text" placeholder='Имя'></input>
                        <label htmlFor="input_field_1">Имя</label>
                    </div>
                    
                    <div id="input_holder_2" className="col-lg-4 input_holder">
                        <input className="input_field" id="input_field_2" type="text" placeholder='Номер телефона'></input>
                        <label htmlFor="input_field_2">Номер телефона</label>
                    </div>
                    
                    <button className='col-md-4 col-8 mt-5 request_btn'>Оставить заявку</button>
                </form>
                
            </div>
        </div>
    )
}

export default CallRequest;
