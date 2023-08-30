import '../styles/NavBar.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    let navigate = useNavigate();
    return (
        <nav className={isNavExpanded ? 'expanded' : ''}>
            <ul className='nav-list'>
                <li className='nav-item name back'>
                    <button onClick={()=>navigate(-1)}><i className='bx bx-left-arrow-alt'></i>Back</button>
                </li>
                <li className={isNavExpanded ? 'nav-item expanded' : 'nav-item'}>
                <Link to='/'>Home</Link>
                </li>
                <li className={isNavExpanded ? 'nav-item expanded' : 'nav-item'}>
                    <HashLink smooth={true} to='/#projects'>Projects</HashLink>
                </li>
                <li className={isNavExpanded ? 'nav-item expanded' : 'nav-item'}>
                    <Link to='/about'>About</Link>
                </li>
                <li className={isNavExpanded ? 'nav-item expanded' : 'nav-item'}>
                    <Link to='/creative'>Creative</Link>
                </li>
                <li className={isNavExpanded ? 'nav-item expanded' : 'nav-item'}>
                    <a href='mailto: paigembraun@gmail.com'>Contact</a>
                </li>
            </ul>
            <button className={isNavExpanded ? 'collapse expanded' : 'collapse'} onClick={()=> {setIsNavExpanded(!isNavExpanded);}}>
                    <i className='bx bx-menu'></i>
                    <i className='bx bx-x'></i>
            </button>
        </nav>
    )
}

export default NavBar