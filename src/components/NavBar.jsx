import '../styles/NavBar.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import asterisk from '../assets/Asterisk.svg';

const NavBar = () => {
    return (
        <nav>
            <ul className='nav-list'>
                <li className='nav-item name'>
                    <img src={asterisk} alt='asterisk svg' />
                    <Link to='/'>Paige Braun</Link>
                </li>
                <li className='nav-item'>
                    <HashLink smooth={true} to='/#projects'>Projects</HashLink>
                </li>
                <li className='nav-item'>
                    <Link to='/about'>About</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/creative'>Creative</Link>
                </li>
                <li className='nav-item'>
                    <a href='#'>Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar