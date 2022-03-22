import './App.scss';
import location_icon from './icons/gray/location_gray.png'
import Contact from './components/Contact';
import TariffBtn from './components/TariffBtn';
import { Provider, useDispatch } from 'react-redux';
import { store } from './store/store';
import { make_activewifitvph_action, make_activewifitv_action, make_activewifi_action } from './store/tariffBtnReducer';
import TariffCards from './components/TariffCards';
import { choose_wifi, choose_wifitv, choose_wifitvph } from './store/tariffCardReducer';
const config = require('./config.json')

function App() {

  return (
    <Provider store={store}>
    <div className="App">
        <div className="container-fluid">

          {/* локация */}
          <div className="row justify-content-center">
            <div className="col-8 location_holder">

              <label htmlFor="location_txt" className="location_item">
                <img id="location_icon" src={location_icon} alt=""></img>
              </label>

              <span id="location_txt" className="location_item">Республика Татарстан</span>
            </div>
          </div>
          {/* конец локации */}

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
            <TariffBtn name="Интернет" id="internet" className={config.tariffNav.active.className} active={true} groupI={0} choose={()=>choose_wifi()} makeActive={()=>make_activewifi_action()}/>
            <TariffBtn name="Интернет+ТВ" id="internet_tv" className={config.tariffNav.inactive.className} active={false} groupI={1} choose={()=>choose_wifitv()} makeActive={()=>make_activewifitv_action()}/>
            <TariffBtn name="Интернет+ТВ+Мобильный" id="internet_tv_phone" className={config.tariffNav.inactive.className} active={false} groupI={2} choose={()=>choose_wifitvph()} makeActive={()=>make_activewifitvph_action()}/>
          </div>
          {/* конец навигации по тарифам */}

          {/* тарифы */}
            <TariffCards/>
          {/* конец тарифов */}
        </div>
    </div>
    </Provider>
  );
}

export default App;
