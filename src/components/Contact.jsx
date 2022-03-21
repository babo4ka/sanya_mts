import telegram_icon from '../icons/black/telegram.png'
import './Contact.scss'
const config = require('../config.json')

const Contact = () =>{
    

    return(
        <div className="contacts_info_holder mt-5 container">
            <div className="row justify-content-center">
                <h5 className="col-12">{config.contacts.agent}</h5>
                <div className="col-12">
                    <span className="phone_tg" id="phone_holder">{config.contacts.phone}</span>
                    <label className="phone_tg" htmlFor="phone_holder"><img src={telegram_icon} alt=""></img></label>
                </div>
            </div>
        </div>
    )
}

export default Contact;