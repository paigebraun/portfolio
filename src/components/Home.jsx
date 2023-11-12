import NavBar from './NavBar'
import Hero from './Hero'
import { Projects } from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import { projectList } from '../App'
import { FadeInSection } from '../App'

const Home = () => {
    return (
        <div className='wrapper-app'>
        <div className='root-app'>
            <div className='navHero'>
                <NavBar />
                <Hero FadeInSection={FadeInSection} />
            </div>
            <Projects projectList={projectList} FadeInSection={FadeInSection} />
            <Contact FadeInSection={FadeInSection} />
            <Footer />
        </div>
        </div>
    )
}

export default Home