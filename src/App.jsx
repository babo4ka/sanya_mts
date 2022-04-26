import './App.scss';
import location_icon from './icons/gray/location_gray.png'
import Contact from './components/Contact';
import TariffBtn from './components/TariffBtn';
import { Provider} from 'react-redux';
import { store } from './store/store';
import { make_activewifitvph_action, make_activewifitv_action, make_activewifi_action } from './store/tariffBtnReducer';
import TariffCards from './components/TariffCards';
import { choose_wifi, choose_wifitv, choose_wifitvph } from './store/tariffCardReducer';
// import TariffDropDown from './components/TariffDropDown';
import telegram_icon from './icons/black/telegram.png'
import CallRequest from './components/CallRequest';
import ModalCallRequest from './components/ModalCallRequest';
import ReportWindow from './components/ReportWindow';
import MoreWindow from './components/MoreWindow';
import { useEffect } from 'react';

const config = require('./config.json')

function App() {


  return (
    <Provider store={store}>
    <div className="App">
        <div className="container-fluid">

          {/* локация */}
          <div className="row justify-content-center">
            <div className="col-md-8 location_holder">

              <label htmlFor="location_txt" className="location_item">
                <img id="location_icon" src={location_icon} alt=""></img>
              </label>

              <span id="location_txt" className="location_item">Республика Татарстан</span>
            </div>
          </div>
          {/* конец локации */}

          {/* ссылка к жалобам и предложениям */}
          <a href="#report_form" id="link_to_report">Жми сюда если есть жалобы или предложения по работе сайта!</a>
          {/* конец ссылки к жалобам и предложениям */}

          {/* контакты */}
          <Contact/>
          {/* конец контактов */}

          {/* акция */}
          <div className="row justify-content-center action_holder mt-5">
            <h5>{config.stock}</h5>
          </div>
          {/* конец акции */}

          {/* навигация по тарифам */}

          <div className="row justify-content-center mt-5 tariffs_nav_holder">
            {/* <TariffBtn name="Интернет" id="internet" className={config.tariffNav.active.className} active={true} groupI={0} choose={()=>choose_wifi()} makeActive={()=>make_activewifi_action()}/>
            <TariffBtn name="Интернет+ТВ" id="internet_tv" className={config.tariffNav.inactive.className} active={false} groupI={1} choose={()=>choose_wifitv()} makeActive={()=>make_activewifitv_action()}/>
            <TariffBtn name="Интернет+ТВ+Мобайл" id="internet_tv_phone" className={config.tariffNav.inactive.className} active={false} groupI={2} choose={()=>choose_wifitvph()} makeActive={()=>make_activewifitvph_action()}/>
            <TariffDropDown/> */}
            <TariffBtn id="wifi" tag="wifi"/>
            <TariffBtn id="tv" tag="tv"/>
            <TariffBtn id="phone" tag="phone"/>
          </div>
          {/* конец навигации по тарифам */}

          {/* тарифы */}
            {/* <TariffCards/> */}
          {/* конец тарифов */}

          {/* заявка на звонок */}

          <CallRequest/>

          {/* конец заявки на звонок */}

          {/* контакты снизу */}
          <div className="row justify-content-center mt-5">
            <div className="col-md-6">
                  <h5 className="col-12 phone_tg">Александр:</h5>
                  <div className="col-12">
                      <span className="phone_tg" id="phone_holder">{config.contacts.phone}</span>
                      <label className="phone_tg" htmlFor="phone_holder"><a href={config.telegram_link} target="_blank"><img src={telegram_icon} alt=""></img></a></label>
                  </div>
            </div>
          </div>
          {/* конец контактов снизу */}

          {/* форма для жалоб и предложений */}
          <ReportWindow/>
          {/* конец формы для жалоб и предложений */}

          {/* модальное окно для заказа звонка по конкретному тарифу */}
          <ModalCallRequest/>
          {/* конец модального окна для заказа звонка по конкретному тарифу */}

          {/* подробнее */}
          <MoreWindow/>
          {/* конец подробнее */}
        </div>
    </div>
    </Provider>
  );
}

export default App;
