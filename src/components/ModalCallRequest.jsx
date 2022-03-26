import { useSelector } from 'react-redux'
import './ModalCallRequest.scss'

const ModalCallRequest = ()=>{

    const tariff = useSelector(state => state.consultation.consultation)

    return(
        <div className="modal" id="request_modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="container-fluid modal-content">
                    <div className="row justify-content-center">
                        <span className="request_text mt-3">Заказать консультацию по тарифу:</span>
                        <span className="request_text">{tariff}</span>
                        <form onSubmit={(e)=>{e.preventDefault()}} action="" className="row justify-content-center pb-3">
                            <div id="input_holder_3" className="col-lg-6 input_holder">
                                <input className="input_field" id="input_field_3" type="text" name="caller_name" placeholder='Имя'></input>
                                <label htmlFor="input_field_3">Имя</label>
                            </div>
                            
                            <div id="input_holder_4" className="col-lg-6 input_holder">
                                <input className="input_field" id="input_field_4" type="text" name="caller_phone" placeholder='Номер телефона'></input>
                                <label htmlFor="input_field_4">Номер телефона</label>
                            </div>
                            
                            <button className='col-8 mt-5 request_btn'>Оставить заявку</button>
                        </form>
                    </div>        
                </div>
            </div>
        </div>
    )
}

export default ModalCallRequest;