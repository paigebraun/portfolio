import '../styles/Projects.css';

const Projects = ({projectList, FadeInSection}) => {
    return (
        <>
        {projectList.map((project)=> (
            <FadeInSection key={project.id}>
            <div className='project'>
                <div className='projectText'>
                    <div className='title'>
                        <h2>
                            <a className='projectLink' href='#'>{project.title}</a>
                        </h2>
                        <i className='bx bx-right-arrow-alt'></i>
                    </div>
                    <p>{project.description}</p>
                    <div className='externalLinks'>
                        <a href={project.preview} target='_blank'>Live Preview
                            <i className='bx bx-link-external'></i>
                        </a>
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
        </>
    )
}

export default Projects