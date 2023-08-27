import '../styles/NavBar.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';

const NavBarBack = () => {
    let navigate = useNavigate();
    return (
        <nav>
            <ul className='nav-list'>
                <li className='nav-item'>
                    <button onClick={()=>navigate(-1)}><i className='bx bx-left-arrow-alt'></i>Back</button>
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

export default NavBarBack