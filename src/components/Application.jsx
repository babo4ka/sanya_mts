import Contact from './Contact';
import "./Application.scss"
import { store } from '../store/store';
import TariffCards from './TariffCards';
import telegram_icon from '../icons/black/telegram.png'
import CallRequest from './CallRequest';
import ReportWindow from './ReportWindow';
import { useEffect, useState } from 'react';
import $ from 'jquery'
import { useDispatch } from 'react-redux';
import {set_tags_action} from "../store/tariffBtnReducer"
import { load_tariffs, load_posts } from '../store/tariffCardReducer';
import ModalInfo from './ModalInfo';
import NewsCards from './NewsCards';
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
      if($(tagsChecks[i]).val() == tag){
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

    await fetch(config.posts_url, {
      method:"GET",
    }).then((response) =>{
      return response.json()
    }).then((data)=>{
      dispatch(load_posts(data))
      console.log(data)
    })

    
    await fetch(config.tariffs_url, {
      method:"GET",
    }).then((response) =>{
      return response.json()
    }).then((data)=>{
      dispatch(load_tariffs(data))
      setTariffsToShow(data)
      console.log(data)
    })



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
  }, [])



  return (
      <div className="App">
        <div className="container-fluid">


          {/* контакты */}
          <Contact />
          {/* конец контактов */}


          {/* заявка на звонок */}

          <CallRequest />

          {/* конец заявки на звонок */}

          {/* навигация по тарифам */}


          <div className="row mt-3 tags_dropdown_holder"  id="tariffs_tags">
            <div className="dropdown col-lg-2 col-md-4 col-8 col-sm-6 tags_dropdown">
              <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                Настроить теги
              </a>

              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li className="dropdown_input"><label><input className="tag_check" value="wifi" type="checkbox"/>интернет</label></li>
                <li className="dropdown_input"><label><input className="tag_check" value="tv" type="checkbox"/>тв</label></li>
                <li className="dropdown_input"><label><input className="tag_check" value="mobile" type="checkbox"/>мобайл</label></li>
                <li><button onClick={tuneTags} className="tune_tags_btn">применить</button></li>
              </ul>
            </div>
          </div>
          
          <div className="tags_holder">
            {choosedTags.map(tag => (
              <div key={tag} className="delete_btn_holder">
                <button onClick={()=>removeTag(tag)} className='delete_tag_btn'>
                {tariffsTranslate.get(tag)} x
                </button>
              </div>
            ))}
          </div>

          {/* конец навигации по тарифам */}

          {/* тарифы */}
          {tariffsToShow == undefined?(
            <h1>Загрузка тарифов, пожалуйста подождите...</h1>
          ):(
            <TariffCards cardsToRender={tariffsToShow} />
          )}
          
          {/* конец тарифов */}


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

          {/* новости */}
          <NewsCards/>


          {/* форма для жалоб и предложений */}
          <ReportWindow />
          {/* конец формы для жалоб и предложений */}

          {/* модальное окно для заказа звонка по конкретному тарифу */}
          {tariffsToShow == undefined?"":(
            <ModalInfo cards={tariffsToShow}/>
          )}
          {/* конец модального окна для заказа звонка по конкретному тарифу */}


          <div>

          </div>
        </div>
      </div>
  );
}

export default Application;