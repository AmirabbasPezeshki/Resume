import {Link} from 'react-router-dom'
import '../styles/NotFound.css'

import ErrorImage from '../images/1_hFwwQAW45673VGKrMPE2qQ.webp'

const NotFound = () => {
    return (<>
        <div className="not-found">
            <div className='error-message'>
                <h2 className='error-title'>Sorry</h2>
                <p className='error-text'> That page cannot be found</p>
                <Link className="error-link" to='/'>Back To The Main Page</Link>
            </div>
            <img src={ErrorImage} alt="" />
        </div>
    </>);
}
 
export default NotFound;