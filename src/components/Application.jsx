import location_icon from '../icons/gray/location_gray.png'
import Contact from './Contact';
import "./Application.scss"
import TariffBtn from './TariffBtn';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import TariffCards from './TariffCards';
import telegram_icon from '../icons/black/telegram.png'
import CallRequest from './CallRequest';
import ModalCallRequest from './ModalCallRequest';
import ReportWindow from './ReportWindow';
import { useEffect, useState } from 'react';
import $ from 'jquery'
import Channels from './Channels';
import { useDispatch } from 'react-redux';
import {set_tags_action} from "../store/tariffBtnReducer"
const config = require('../config.json')
const Application = () => {

  const [tariffsToShow, setTariffsToShow] = useState(store.getState().cards.tariffCards)
  const [choosedTags, setChoosedTags] = useState(store.getState().btns.tags)
  const dispatch = useDispatch();

  
  const setCards = () => {
    let tags = store.getState().btns.tags
    let cards = store.getState().cards.tariffCards.map(card => {
      if (tags.length == 0) return card
      let containsAll = true
      for (let i = 0; i < tags.length; i++) {
        if (card.tags.find(el => el == tags[i]) == undefined) {
          containsAll = false
          break
        }
      }
      if (containsAll) return card
      else return null
    })
    setTariffsToShow([])
    setTariffsToShow(cards.filter(el => el != null))
    setChoosedTags(store.getState().btns.tags)
  }

  const tuneTags = ()=>{
    let tagsChecks = $('.tag_check')
    let tags = []
    for(let i=0;i<tagsChecks.length;i++){
      if($(tagsChecks[i]).prop("checked")){
        tags.push($(tagsChecks[i]).val())
      }
    }
    dispatch(set_tags_action(tags))
    setCards()
  }

  const removeTag = (tag)=>{
    let tags = choosedTags
    tags = tags.filter(t => t!=tag)
    let tagsChecks = $('.tag_check')
    for(let i=0;i<tagsChecks.length;i++){
      console.log(tagsChecks[i])
      if($(tagsChecks[i]).val() == tag){
        console.log(tag)
        $(tagsChecks[i]).prop("checked", false)
      }
    }
    dispatch(set_tags_action(tags))
    setCards()
  }

  const tariffsTranslate = new Map([
    ['wifi', 'интернет'],
    ['tv', 'ТВ'],
    ['mobile', 'мобайл']
  ])

  useEffect(async () => {

    $(".dropdown_input").click((e)=>{
      e.stopPropagation()
    })

    $(window).resize(() => {
      if ($(window).width() > 576) {
        $('#tariffs_navigation_holder').addClass('justify-content-start').removeClass('justify-content-center')
        $('.tags_info').addClass('text-start').removeClass('text-center')
      } else {
        $('#tariffs_navigation_holder').addClass('justify-content-center').removeClass('justify-content-start')
        $('.tags_info').addClass('text-center').removeClass('text-start')
      }
    })
    $(window).ready(() => {
      if ($(window).width() > 576) {
        $('#tariffs_navigation_holder').addClass('justify-content-start').removeClass('justify-content-center')
        $('.tags_info').addClass('text-start').removeClass('text-center')
      } else {
        $('#tariffs_navigation_holder').addClass('justify-content-center').removeClass('justify-content-start')
        $('.tags_info').addClass('text-center').removeClass('text-start')
      }
    })
  })



  return (
      <div className="App">
        <div className="container-fluid">

          {/* ссылка к жалобам и предложениям */}
          {/* <a href="#report_form" id="link_to_report">Жми сюда если есть жалобы или предложения по работе сайта!</a> */}
          {/* конец ссылки к жалобам и предложениям */}

          {/* контакты */}
          <Contact />
          {/* конец контактов */}

          {/* акция */}
          {/* <div className="row justify-content-center action_holder mt-5">
            <h5>{config.stock}</h5>
          </div> */}
          {/* конец акции */}

          {/* заявка на звонок */}

            <CallRequest />

          {/* конец заявки на звонок */}

          {/* навигация по тарифам */}


          <div className="row mt-3 tags_dropdown_holder">
            <div class="dropdown col-lg-2 col-md-4 col-8 col-sm-6 tags_dropdown">
              <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                Настроить теги
              </a>

              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li className="dropdown_input"><label><input className="tag_check" value="wifi" type="checkbox"/>интернет</label></li>
                <li className="dropdown_input"><label><input className="tag_check" value="tv" type="checkbox"/>тв</label></li>
                <li className="dropdown_input"><label><input className="tag_check" value="mobile" type="checkbox"/>мобайл</label></li>
                <li><button onClick={tuneTags} className="tune_tags_btn">применить</button></li>
              </ul>
            </div>
          </div>
          
          <div className="tags_holder">
            {choosedTags.map(tag => (
              <div className="delete_btn_holder">
                <button onClick={()=>removeTag(tag)} className='delete_tag_btn'>
                {tariffsTranslate.get(tag)} x
                </button>
              </div>
            ))}
          </div>

          {/* конец навигации по тарифам */}

          {/* тарифы */}
          <TariffCards cardsToRender={tariffsToShow} />
          {/* конец тарифов */}

          {/* каналы */}

          <Channels />

          {/* конец каналов */}


          {/* контакты снизу */}
          <div className="row justify-content-center mt-5 low_contacts">
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
          <ReportWindow />
          {/* конец формы для жалоб и предложений */}

          {/* модальное окно для заказа звонка по конкретному тарифу */}
          <ModalCallRequest />
          {/* конец модального окна для заказа звонка по конкретному тарифу */}

          {/* подробнее */}
          {/* <MoreWindow/> */}
          {/* конец подробнее */}

          <div>

          </div>
        </div>
      </div>
  );
}

export default Application;