import '../styles/Navbar.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react';
import {FaTimes , FaBars} from 'react-icons/fa'
const Navbar = () => {

    const [click,setClick] = useState(false)

    const clickHandle = () => {
        setClick(!click)
    }

    return (<>
        <nav className='navbar'>
            <div className='navbar__container'>
                <Link to="/" className="navbar__logo">B.L</Link>
                <span className='mobile-btn' onClick={clickHandle}>{click === true ? <FaTimes/> : <FaBars/>}</span>
                <ul className={click === true ? "navbar__menu active" : "navbar__menu"}>
                    <li className='navbar__item'><Link to='/about' className="navbar__link">About</Link></li>
                    <li className='navbar__item'>
                        <Link to="/adddialogue" className="navbar__link"><button className='navbar__btn'>Add Dialogue</button></Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>);
}
 
export default Navbar;