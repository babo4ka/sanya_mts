import './TariffBtn.scss'
import icon from '../icons/gray/phone_gray.png'

const TariffBtn = () =>{
    
    return(
        <div className="col-2 container btn_holder">
            <div className="row justify-content-center mb-3" id="tariffs_icons">
                <img className="col-6 tariff_icon" src={icon} alt=""></img>
                <img className="col-6 tariff_icon" src={icon} alt=""></img>
            </div>

            <div className="row justify-content-center" id="tariffs_name">
                <span className="col-12">Tariff name...</span>
            </div>
        </div>
    )
}

export default TariffBtn;