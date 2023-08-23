import '../styles/Hero.css'

const Hero = ({ FadeInSection }) => {
    return (
        <FadeInSection>
        <div className='heroContainer'>
            <div className='hero'>
                <p>Hi, my name is</p>
                <h3>Paige Braun</h3>
                <p>I'm a front-end developer with 
                    a background in design and a passion
                    for creative problem solving.</p>
            </div>
        </div>
        </FadeInSection>
    )
}

export default Hero