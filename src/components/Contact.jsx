import telegram_icon from '../icons/black/telegram.png'
import sanya from '../саня.jpg'
import './Contact.scss'

const config = require('../config.json')

const Contact = () =>{
    

    return(
        <div className="contacts_info_holder mt-5 container">
            <div className="row justify-content-center">
                <div className="col-md-6 avatar_holder">
                    <img src={sanya} alt="" className="avatar"></img>
                </div>

                <div className="col-md-6">
                    <h5 className="col-12 phone_tg">{config.contacts.agent}</h5>
                    <div className="col-12">
                        <span className="phone_tg" id="phone_holder">{config.contacts.phone}</span>
                        <label className="phone_tg" htmlFor="phone_holder"><a href="https://google.com" target="_blank"><img src={telegram_icon} alt=""></img></a></label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;