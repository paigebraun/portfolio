import '../styles/NavBar.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavBarBack = () => {
    return (
        <nav>
            <ul className='nav-list'>
                <li className='nav-item'>
                    <i className='bx bx-left-arrow-alt'></i>
                    <HashLink smooth={true} to='/#projects'>Back</HashLink>
                </li>
                <li className='nav-item'>
                    <HashLink smooth={true} to='/#projects'>Projects</HashLink>
                </li>
                <li className='nav-item'>
                    <Link to='/about'>About</Link>
                </li>
                <li className='nav-item'>
                    <a href='#'>Creative</a>
                </li>
                <li className='nav-item'>
                    <a href='#'>Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBarBack