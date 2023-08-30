import '../styles/Creative.css';
import { Link } from 'react-router-dom';

//import components
import NavBar from './NavBar'
import Contact from './Contact';
import Footer from './Footer';
import { FadeInSection } from '../App';

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
                <Link to='/creative/video' className='creativeSection video'>
                    <div className='imgWrapper'>
                        <p>Video</p>
                        <img src={videoThumbnail} alt='video'></img>
                    </div>
                </Link>
                <Link to='/creative/graphic-design' className='creativeSection design'>
                    <div className='imgWrapper'>
                        <p>Graphic Design</p>
                        <img src={designThumbnail} alt='design'></img>
                    </div>
                </Link>
                <a href='https://paigebraun.github.io/photo-gallery/' target='_blank' className='creativeSection photo'>
                    <div className='imgWrapper'>
                        <p>Photography</p>
                        <img src={photoThumbnail} alt='photo'></img>
                    </div>
                </a>
                <Link to='/creative/screenwriting' className='creativeSection writing'>
                    <div className='imgWrapper'>
                        <p>Screenwriting</p>
                        <img src={writingThumbnail} alt='writing'></img>
                    </div>
                </Link>
            </div>
            <Contact FadeInSection={FadeInSection} />
            </FadeInSection>
            <Footer />
        </div>
    )
}

export default Creative