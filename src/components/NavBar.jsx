import '../styles/NavBar.css'
import asterisk from '../assets/Asterisk.svg'

const NavBar = () => {
    return (
        <nav>
            <ul className='nav-list'>
                <li className='nav-item name'>
                    <img src={asterisk} alt='asterisk svg' />
                    <a href='#'>Paige Braun</a>
                </li>
                <li className='nav-item'>
                    <a href='#'>Projects</a>
                </li>
                <li className='nav-item'>
                    <a href='#'>About</a>
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

export default NavBar