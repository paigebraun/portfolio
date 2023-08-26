import '../styles/Creative.css';
import { FadeInSection } from '../App';

//import components
import NavBar from './NavBar'
import Contact from './Contact';
import Footer from './Footer';

//import images
import designThumbnail from '../assets/Design-Thumbnail.png';
import photoThumbnail from '../assets/Photo-Thumbnail.png';
import videoThumbnail from '../assets/Video-Thumbnail.png';
import writingThumbnail from '../assets/Writing-Thumbnail.png';

const Creative = () => {
    return (
        <div className='root-creative'>
            <NavBar />
            <FadeInSection>
            <div className='creativeHeader'>
                <h2>Check out some of my creative work below.</h2>  
            </div>
            <div className='creativeGrid'>
                <a href='#' className='creativeSection video'>
                    <div className='imgWrapper'>
                        <p>Video</p>
                        <img src={videoThumbnail} alt='video'></img>
                    </div>
                </a>
                <a href='#' className='creativeSection design'>
                    <div className='imgWrapper'>
                        <p>Design</p>
                        <img src={designThumbnail} alt='design'></img>
                    </div>
                </a>
                <a href='#' className='creativeSection photo'>
                    <div className='imgWrapper'>
                        <p>Photography</p>
                        <img src={photoThumbnail} alt='photo'></img>
                    </div>
                </a>
                <a href='#' className='creativeSection writing'>
                    <div className='imgWrapper'>
                        <p>Screenwriting</p>
                        <img src={writingThumbnail} alt='writing'></img>
                    </div>
                </a>
            </div>
            <Contact FadeInSection={FadeInSection} />
            </FadeInSection>
            <Footer />
        </div>
    )
}

export default Creative