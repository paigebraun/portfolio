import '../styles/About.css';
import { FadeInSection } from '../App';

//import components
import NavBar from './NavBar'
import Contact from './Contact'
import Footer from './Footer';

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
            <p>I currently work as a video producer and I'm looking to leverage my technical 
                and creative skills to transition into a front-end development role.</p>
            <p>I love using technology to recognize patterns and improve efficiency 
            and I'm excited to be a part of a team that shares this passion.</p>
        </div>
        <div className='skills'>
            <h3>Skills</h3>
            <div className='skillsGrid'>
                <p>HTML</p>
                <p>CSS</p>
                <p>Javascript</p>
                <p>React</p>
                <p>Python</p>
                <p>Vite</p>
                <p>Webpack</p>
                <p>npm</p>
                <p>Jest</p>
                <p>Premiere</p>
                <p>Photoshop</p>
                <p>Illustrator</p>
                <p>After Effects</p>
                <p>Figma</p>
            </div>
        </div>
        <div className='education'>
            <h3>Education</h3>
            <p>University of Texas at Austin</p>
            <p>Bachelor of Science in Radio-Television-Film</p>
            <p>Elements of Computing Certificate</p>
        </div>
        </FadeInSection>
        <Contact FadeInSection={FadeInSection}/>
        <Footer />
        </div>
    )
}

export default About