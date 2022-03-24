import './CallRequest.scss'
import $ from 'jquery'
import { useEffect } from 'react'
const CallRequest = () =>{

    useEffect(async ()=>{
        for(let i=1; i<=2;i++){
        $(`#input_field_${i}`).focus(()=>{
            if($(window).width()>991){
                $(`#input_holder_${i} label`).css('margin', '-15px 0px 0px 1px')
                $(`#input_holder_${i} label`).css('top', '0')
                $(`#input_holder_${i} label`).css('left', '0')
            }else{
                $(`#input_holder_${i} label`).css('margin-left', -$('.input_field, .input_holder label').width()/2)
                $(`#input_holder_${i} label`).css('margin-top', -$('.input_field, .input_holder label').height()/2 - 15)
                $(`#input_holder_${i} label`).css('top', '50%')
                $(`#input_holder_${i} label`).css('left', '50%')
            }
            
        })

        $(`#input_field_${i}`).focusout(()=>{
            if($(`#input_field_${i}`).val() !== ''){
                if($(window).width()>991){
                    $(`#input_holder_${i} label`).css('margin', '-15px 0px 0px 1px')
                    $(`#input_holder_${i} label`).css('top', '0')
                    $(`#input_holder_${i} label`).css('left', '0')
                }else{
                    $(`#input_holder_${i} label`).css('margin-left', -$('.input_field, .input_holder label').width()/2)
                    $(`#input_holder_${i} label`).css('margin-top', -$('.input_field, .input_holder label').height()/2 - 15)
                    $(`#input_holder_${i} label`).css('top', '50%')
                    $(`#input_holder_${i} label`).css('left', '50%')
                }
            }else{
                if($(window).width()>991){
                    $(`#input_holder_${i} label`).css('margin', ' 0px 0px 5px 1px')
                    $(`#input_holder_${i} label`).css('top', '0')
                    $(`#input_holder_${i} label`).css('left', '0')
                }else{
                    $(`#input_field_${i}, #input_holder_${i} label`)
                    .css('margin-left', -$(`#input_field_${i}, #input_holder_${i} label`).width()/2)
    
                    $(`#input_field_${i}, #input_holder_${i} label`)
                    .css('margin-top', -$(`#input_field_${i}, #input_holder_${i} label`).height()/2)
    
                    $(`#input_field_${i}, #input_holder_${i} label`).css('left', '50%')
                    $(`#input_field_${i}, #input_holder_${i} label`).css('top', '50%')
                }
            }
        })

        

        
    }

        $(window).resize(()=>{
            for(let i=1;i<=2;i++){
                console.log($(`#input_field_${i}`).val())
                if($(`#input_field_${i}`).val() !== ''){
                    if($(window).width()>991){
                        $(`#input_holder_${i} label`).css('margin', '-15px 0px 0px 1px')
                        $(`#input_holder_${i} label`).css('top', '0')
                        $(`#input_holder_${i} label`).css('left', '0')
                    }else{
                        $(`#input_holder_${i} label`).css('margin-left', -$('.input_field, .input_holder label').width()/2)
                        $(`#input_holder_${i} label`).css('margin-top', -$('.input_field, .input_holder label').height()/2 - 15)
                        $(`#input_holder_${i} label`).css('top', '50%')
                        $(`#input_holder_${i} label`).css('left', '50%')
                    }
                }else{
                    if($(window).width()<=991){
                    
                        $('.input_field, .input_holder label')
                        .css('margin-left', -$('.input_field, .input_holder label').width()/2)
        
                        $('.input_field, .input_holder label')
                        .css('margin-top', -$('.input_field, .input_holder label').height()/2)
        
                        $('.input_field, .input_holder label').css('left', '50%')
                        $('.input_field, .input_holder label').css('top', '50%')
                    }else{
                        $('.input_field, .input_holder label').css('margin', '0px 0px 5px 1px')
        
                        $('.input_field, .input_holder label').css('left', '0')
                        $('.input_field, .input_holder label').css('top', '0')
                    }
                }
            }
            

        })

        $(window).ready(()=>{
            
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
    //console.log($('.input_field, .input_holder label').height())
    return(
        <div className="call_request_holder mt-5 container pb-2 col-md-8">
            <div className="row justify-content-center">
                <span className="request_text">Оставьте заявку на звонок и я сам Вам перезвоню!</span>

                <form action="" className="row justify-content-center mt-5 pb-5">
                    <div id="input_holder_1" className="col-lg-4 input_holder">
                        <input className="input_field" id="input_field_1" type="text" placeholder='Имя'></input>
                        <label htmlFor="input_field_1">Имя</label>
                    </div>
                    
                    <div id="input_holder_2" className="col-lg-4 input_holder">
                        <input className="input_field" id="input_field_2" type="text" placeholder='Номер телефона'></input>
                        <label htmlFor="input_field_2">Номер телефона</label>
                    </div>
                </form>
                
            </div>
        </div>
    )
}

export default CallRequest;
