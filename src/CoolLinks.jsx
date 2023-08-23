import './styles/CoolLinks.css';
import './styles/ProjectPage.css';
import { FadeInSection } from './App';

//import components
import NavBarBack from './components/NavBarBack'
import Footer from './components/Footer';

//import images
import coolLinks1 from './assets/Cool-Links-1.png';
import coolLinks2 from './assets/Cool-Links-2.png';
import coolLinksThumbnail from './assets/Cool-Links-Thumbnail.png';

import { projectList } from './App';
import ScrollToTop from './ScrollToTop';

const CoolLinks = () => {
    return (
        <>
        <ScrollToTop />
        <div className='root-cool-links'>
            <NavBarBack />
            <FadeInSection>
                <div className='container'>
                    <h2>Cool Links</h2>
                    <div className='description'>
                        <p>{projectList[0].description}</p>
                        <div className='project-external'>
                            <a href={projectList[0].preview} target='_blank'>Live Preview
                                <i className='bx bx-link-external'></i>
                            </a>
                            <a href={projectList[0].code} target='_blank'>Code
                                <i className='bx bx-link-external'></i>
                            </a>
                        </div>
                    </div>
                    <div className='builtWith'>
                        <p><span style={{fontWeight: 'bold'}}>Built With:&nbsp;</span>HTML, CSS, Javascript, React.js, Vite, Web Storage API, Link Preview API</p>
                    </div>
                </div>
                <div>
                    <img className='image-1' src={ coolLinksThumbnail }></img>
                    <div className='sideByside'>
                        <img className='image-2' src={ coolLinks1 }></img>
                        <img className='image-3' src={ coolLinks2 }></img>
                    </div>
                </div>
            </FadeInSection>
            <Footer />
        </div>
        </>
    )
}

export default CoolLinks