import '../styles/Projects.css';
import { Link } from 'react-router-dom';

function LivePreview({link}) {
    if (link!=='') {
        return (
            <a href={link} target='_blank'>Live Preview
                <i className='bx bx-link-external'></i>
            </a>
        )
    }
    else {
        return null;
    }
}

function Projects({projectList, FadeInSection}) {
    return (
        <div id='projects'>
        {projectList.map((project)=> (
            <FadeInSection key={project.id}>
            <div className='project'>
                <div className='projectText'>
                    <div className='title'>
                        <h2>
                            <Link to={`/projects/${project.path}`} className='projectLink'>{project.title}</Link>
                        </h2>
                        <i className='bx bx-right-arrow-alt'></i>
                    </div>
                    <p>{project.description}</p>
                    <div className='externalLinks'>
                        <LivePreview 
                            link={project.preview}
                        />
                        <a href={project.code} target='_blank'>Code
                            <i className='bx bx-link-external'></i>
                        </a>
                    </div>
                </div>
                <div className='projectImg'>
                    <img src={project.img} alt={project.title}></img>
                </div>
            </div>
            </FadeInSection>
        ))}
        </div>
    )
}

export {Projects, LivePreview}