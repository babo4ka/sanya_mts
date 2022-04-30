import './App.scss';
import location_icon from './icons/gray/location_gray.png'
import Contact from './components/Contact';
import TariffBtn from './components/TariffBtn';
import { Provider} from 'react-redux';
import { store } from './store/store';
import TariffCards from './components/TariffCards';
import telegram_icon from './icons/black/telegram.png'
import CallRequest from './components/CallRequest';
import ModalCallRequest from './components/ModalCallRequest';
import ReportWindow from './components/ReportWindow';
import { useEffect, useState } from 'react';
import $ from 'jquery'
const config = require('./config.json')

function App() {


  const [tariffsToShow, setTariffsToShow] = useState(store.getState().cards.tariffCards)
  const [choosedTags, setChoosedTags] = useState(store.getState().btns.tags)

  const setCards = () =>{
    let tags = store.getState().btns.tags
    let cards = store.getState().cards.tariffCards.map(card => {
      if(tags.length == 0)return card
      let containsAll = true
      for(let i=0; i<tags.length;i++){
          if(card.tags.find(el => el == tags[i]) == undefined){
              containsAll = false
              break
          }
      }
      if(containsAll)return card
      else return null
  })
    setTariffsToShow([])
    setTariffsToShow(cards.filter(el => el!=null))
    setChoosedTags(store.getState().btns.tags)
  }

  const tariffsTranslate = new Map([
    ['wifi', 'интернет'],
    ['tv', 'ТВ'],
    ['mobile', 'мобайл']
  ])

  useEffect(async ()=>{

    $(window).resize(()=>{
      if($(window).width() > 576){
        $('#tariffs_navigation_holder').addClass('justify-content-start').removeClass('justify-content-center')
        $('.tags_info').addClass('text-start').removeClass('text-center')
      }else{
        $('#tariffs_navigation_holder').addClass('justify-content-center').removeClass('justify-content-start')
        $('.tags_info').addClass('text-center').removeClass('text-start')
      }
    })
    $(window).ready(()=>{
      if($(window).width() > 576){
        $('#tariffs_navigation_holder').addClass('justify-content-start').removeClass('justify-content-center')
        $('.tags_info').addClass('text-start').removeClass('text-center')
      }else{
        $('#tariffs_navigation_holder').addClass('justify-content-center').removeClass('justify-content-start')
        $('.tags_info').addClass('text-center').removeClass('text-start')
      }
    })
  })

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
          
          <div className="row justify-content-start mt-5 tariffs_nav_holder" id="tariffs_navigation_holder">
            <span className="text-start mb-3 tags_info">Выберите нужные теги для поиска тарифа: </span>
            <TariffBtn id="wifi" tag="wifi" setCardsToShow={setCards}/>
            <TariffBtn id="tv" tag="tv" setCardsToShow={setCards}/>
            <TariffBtn id="phone" tag="mobile" setCardsToShow={setCards}/>
            <span className="text-start mt-5 tags_info">
              {choosedTags.length > 0?(
                `Вот ${tariffsToShow.length} тарифов, которые содержат теги: ${choosedTags.map(tag=>tariffsTranslate.get(tag))}`
              ):(
                `Не выбрано ни одного тега, вот все тарифы`
              )}
            </span>
          </div>
         
          {/* конец навигации по тарифам */}

          {/* тарифы */}
            <TariffCards cardsToRender={tariffsToShow}/>
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
          {/* <MoreWindow/> */}
          {/* конец подробнее */}
        </div>
    </div>
    </Provider>
  );
}

export default App;
