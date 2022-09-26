import { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import "./NewsCards.scss"
import $ from "jquery"
import { useEffect } from "react"
import { store } from "../store/store"
import { change_index } from "../store/tariffCardReducer"


const NewsCard = ({post}) =>{

    const alltariffs = store.getState().cards.tariffCards
    const tariffs = post.related_tariffs
    .split(",")
    .map(t=>Number.parseInt(t))
    .map(t=>alltariffs[t-1])

    const dispatch = useDispatch()
    const changeIndex = (index) => {
        dispatch(change_index(index))
    }

    return(
        <div className="container post_holder col-lg-4 col-md-6 col-10">
            <div className="row justidy-content-center">
                <span className="col-7 article text-start">{post.article}</span>
                <span className="col-5 date text-end">{post.date.substring(0, 10)}</span>

                <div className="col-12 post_text text-start mt-3 mb-2">
                    {post.text}
                </div>

                <div className="col-12 related_tariffs text-start row">
                    {tariffs==undefined?(
                        <span className="col-12">Эта новость не затрагивает никаких тарифов</span>
                    ):(
                        <div className="col-12 row">
                            <span className="col-12">Затрагиваемые тарифы: </span>
                            {tariffs.map(t=>(
                                <button key={t.name} data-bs-toggle="modal" data-bs-target="#info_modal" className="col-12 related_tariff" onClick={()=>changeIndex(t.id-1)}>{t.name}</button>
                            ))}                            
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

const NewsCards = () =>{

    const posts = store.getState().cards.posts

    const getIndexes = (first = 0, second = 1, third = 2) =>{
        if($(window).width()>1059){
            return{
                first:first,
                second:second,
                third:third
            }
        }else if($(window).width()>768){
            return{
                first:first,
                second:second,
                third:undefined
            }
        }else{
            return{
                first:first,
                second:undefined,
                third:undefined
            }
        }
    }

    const [indexes, setIndexes] = useState(getIndexes)

    const goNext = () =>{
        $("#posts_cards").fadeToggle('fast', ()=>{
            let nf = indexes.first 
            let ns = indexes.second
            let nt = indexes.third

            nf = nf+1==posts.length?0:nf+1
            ns = ns == undefined?undefined:(ns+1==posts.length?0:ns+1)
            nt = nt == undefined?undefined:(nt+1==posts.length?0:nt+1)

            setIndexes(getIndexes(nf, ns, nt))
        })

        $("#posts_cards").fadeToggle('fast')
    }

    const goPrev = () =>{
        $("#posts_cards").fadeToggle('fast', ()=>{
            let nf = indexes.first 
            let ns = indexes.second
            let nt = indexes.third

            nf = nf-1<0?posts.length-1:nf-1
            ns = ns == undefined?undefined:(ns-1<0?posts.length-1:ns-1)
            nt = nt == undefined?undefined:(nt-1<0?posts.length-1:nt-1)

            setIndexes(getIndexes(nf, ns, nt))
        })

        $("#posts_cards").fadeToggle('fast')
    }
    

    useEffect(async ()=>{
        $(window).resize(()=>{
            setIndexes(getIndexes(indexes.first, indexes.second, indexes.third))
        })
    }, [])

    return(
        <div className="container posts_holder mt-5">
            {posts!=undefined?(
                <div id="posts_cards" className="row justidy-content-center">

                    <button onClick={goNext} className="tariffs_holder_nav_btn tariffs_holder_nav_btn_right"><img src={require('../icons/black/arrow_1.png')} alt="" /></button>
                    <button onClick={goPrev} className="tariffs_holder_nav_btn tariffs_holder_nav_btn_left"><img src={require('../icons/black/arrow_1.png')} alt="" /></button>


                    <NewsCard post={posts[indexes.first]}/>

                    {(posts.length > 1 && indexes.second != undefined)?(
                        <NewsCard post={posts[indexes.second]}/>
                    ):""}

                    {(posts.length > 2 && indexes.third != undefined)?(
                        <NewsCard post={posts[indexes.third]}/>
                    ):""}

            </div>
            ):""}
        </div>
    )
}

export default NewsCards