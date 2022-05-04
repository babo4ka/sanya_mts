import { Link } from 'react-router-dom'
const ch_list = require('../список_каналов.pdf')

const Channels = () =>{
    
    return(
        <div id="channels" className="container mt-5">
            <div className="row justify-content-center align-items-center">
                <Link to={ch_list} target='_blank'>Список каналов(.pdf)</Link>
            </div>
        </div>
    )
}

export default Channels;