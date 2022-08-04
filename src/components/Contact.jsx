import telegram_icon from '../icons/black/telegram.png'
import sanya from '../саня.jpg'
import './Contact.scss'

const config = require('../config.json')

const Contact = () =>{
    
    return(
        <div className="contacts_info_holder mt-5 container">
            <div className="row justify-content-start">
            <h5 className="col-12 phone_tg text-center agent_info_little">{config.contacts.agent}</h5>
                <div className="col-md-4 avatar_holder">
                    <img src={sanya} alt="" className="avatar"></img>
                </div>

                <div className="col-md text-start about_info_holder">
                    <h5 className="col-12 phone_tg text-center agent_info_large">{config.contacts.agent}</h5>
                    <div>
                    {config.contacts.about.map(line =>(
                        <span>{line}<br/></span>
                    ))}
                    </div>
                    <div className="col-12">
                        <span className="phone_tg" id="phone_holder">{config.contacts.phone}</span>
                        <label className="phone_tg" htmlFor="phone_holder"><a href={config.telegram_link} target="_blank"><img src={telegram_icon} alt=""></img></a></label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;