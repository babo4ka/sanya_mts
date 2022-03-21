import './App.scss';
import location_icon from './icons/gray/location_gray.png'
import Contact from './components/Contact';
import TariffBtn from './components/TariffBtn';
const config = require('./config.json')

function App() {

  return (
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
            <TariffBtn name="Интернет" id="internet" className={config.tariffNav.active.className} active={true}/>
            <TariffBtn name="Интернет+ТВ" id="internet_tv" className={config.tariffNav.inactive.className} active={false}/>
            <TariffBtn name="Интернет+ТВ+Мобильный" id="internet_tv_phone" className={config.tariffNav.inactive.className} active={false}/>
          </div>
          {/* конец навигации по тарифам */}
        </div>
    </div>
  );
}

export default App;
