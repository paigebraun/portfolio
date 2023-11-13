import '../styles/ProjectPage.css';
import { FadeInSection } from '../App';
import { useParams } from 'react-router-dom';

//import components
import NavBarBack from './NavBarBack'
import Footer from './Footer';
import { projectList } from '../App';
import { LivePreview } from './Projects';
import ScrollToTop from '../ScrollToTop';
import NotFound from './NotFound';

function ImgCount({imgs}) {
    //display images based on how many images we have
    if (imgs.length < 3) {
        return (
            <div>
                <img className='image-1' src={ imgs[0] } alt='Project Image'></img>
                <img className='image-2' src={ imgs[1] } alt='Project Image'></img>
            </div>
        )
    }
    else {
        return (
            <div>
            <img className='image-1' src={ imgs[0] } alt='Project Image'></img>
                <div className='sideByside'>
                    <img className='image-2' src={ imgs[1] } alt='Project Image'></img>
                    <img className='image-3' src={ imgs[2] } alt='Project Image'></img>
                </div>
            <img className='image-4' src={ imgs[3] }></img>
            </div>
        )
    }
}

const ProjectPage = () => {
    //match route parameter to index in project list
    const routeParams = useParams();
    let index = projectList.findIndex(e => e.path === routeParams.id);
    let currentProject = projectList[index];

    return (
        <div>
        {currentProject == undefined ? (
            < NotFound />
        ) : (
        <>
        <ScrollToTop />
        <div className='root-project-page'>
            <NavBarBack />
            <FadeInSection>
                <div className='container'>
                    <h2>{currentProject.title}</h2>
                    <div className='description'>
                        <p>{currentProject.description}</p>
                        <div className='project-external'>
                            <LivePreview 
                                link={currentProject.preview}
                            />
                            <a href={currentProject.code} target='_blank'>Code
                                <i className='bx bx-link-external'></i>
                            </a>
                        </div>
                    </div>
                    <div className='builtWith'>
                        <p><span style={{fontWeight: 'bold'}}>Built With:&nbsp;</span>{currentProject.builtWith}</p>
                    </div>
                </div>
                <ImgCount 
                    imgs={currentProject.displayImg}
                />
            </FadeInSection>
            <Footer />
        </div>
        </>
        )}
        </div>
        )
}

export default ProjectPage