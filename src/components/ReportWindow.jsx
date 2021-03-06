import './ReportWindow.scss';
import $ from 'jquery'
const config = require('../config.json')
const ReportWindow = () =>{

    const sendReport = (e) =>{
        e.preventDefault()
        let msg = $('#report_form').serialize()
        $.ajax({
            type: "POST",
            url:config.tg_report_URL +msg.replace("report_message=", ''),
        })

        $('#report_success').css('display', 'block')
        setTimeout(()=>{
            $('#report_success').css('display', 'none')
            
        }, 3500)
    }

    return(
        <form onSubmit={sendReport} id="report_form" className="container mt-5">
            <div className="row justify-content-center">
                <span className="col-lg-5 col-8">Есть жалобы или предложения по работе нашего сайта?</span>
            </div>

            <div className="row justify-content-center">
                <span className="col-lg-5 col-8">Опишите проблему или предложении ниже и мы постараемся принять меры :)</span>
            </div>

            <div className="row justify-content-center mt-3">
                <textarea name="report_message" className="col-lg-5 col-8" id="report_area" placeholder='Напишите всё, что Вы о нас думаете!'></textarea>
            </div>

            <span className="request_success" id="report_success">Спасибо за отзыв, постараемся стать лучше :)</span>

            <div className="row justify-content-center mt-3">
                <button className="col-lg-3 col-5" id="report_btn">Отправить</button>
            </div>

        </form>
    )
}

export default ReportWindow;