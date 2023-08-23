import './styles/About.css';
import { FadeInSection } from './App';

//import components
import NavBar from './components/NavBar'
import Contact from './components/Contact'
import Footer from './components/Footer';

const About = () => {
    return (
        <div className='root-about'>
        <NavBar />
        <FadeInSection>
        <div className='heroContainer-about'>
            <div className='hero-about'>
                <p>Hi, my name is</p>
                <h3>Paige Braun</h3>
                <p>I'm a front-end developer with 
                    a background in design and a passion
                    for creative problem solving.</p>
            </div>
            <p>I've always been fascinated by how things work. This curiosity led me to 
            study film and computer science at the University of Texas at Austin.</p>
            <p>I love using technology to recognize patterns and improve efficiency 
            and I'm excited to be apart of a team that shares this passion.</p>
        </div>
        </FadeInSection>
        <Contact FadeInSection={FadeInSection}/>
        <Footer />
        </div>
    )
}

export default About