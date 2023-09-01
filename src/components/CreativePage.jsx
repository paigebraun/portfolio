import '../styles/CreativePage.css';
import { FadeInSection } from '../App';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

//import components
import NavBarBack from './NavBarBack'
import Footer from './Footer';
import { creativeList } from '../App';
import ScrollToTop from '../ScrollToTop';

//import images
import graphic1 from '../assets/GraphicDesign/Graphic-1.webp';
import graphic2 from '../assets/GraphicDesign/Graphic-2.webp';
import graphic3 from '../assets/GraphicDesign/Graphic-3.webp';
import graphic4 from '../assets/GraphicDesign/Graphic-4.webp';
import graphic5 from '../assets/GraphicDesign/Graphic-5.webp';
import graphic6 from '../assets/GraphicDesign/Graphic-6.webp';
import graphic7 from '../assets/GraphicDesign/Graphic-7.webp';
import graphic8 from '../assets/GraphicDesign/Graphic-8.webp';
import graphic9 from '../assets/GraphicDesign/Graphic-9.webp';
import graphic10 from '../assets/GraphicDesign/Graphic-10.webp';
import graphic11 from '../assets/GraphicDesign/Graphic-11.webp';
import GPDBTLogo from '../assets/GPDBT-Logo.webp';

function GetCreative(current) {
    //video
    if (current.current == 'Video') {
        return (
            <>
            <ScrollToTop />
            <div className='video-responsive'>
                <ReactPlayer url='https://www.youtube.com/watch?v=9AKuGry7iq8' />
            </div>
            </>
        )
    }
    //graphic design
    if (current.current == 'Graphic Design') {
        return (
            <div>
                <ScrollToTop />
                <img className='graphic' src={ graphic1 } alt='design'></img>
                <img className='graphic' src={ graphic2 } alt='design'></img>
                <div className='sideByside'>
                    <img className='graphic' src={ graphic3 } alt='design'></img>
                    <img className='graphic' src={ graphic4 } alt='design'></img>
                </div>
                <img className='graphic' src={ graphic5 } alt='design'></img>
                <img className='graphic' src={ graphic6 } alt='design'></img>
                <img className='graphic' src={ graphic7 } alt='design'></img>
                <div className='sideByside'>
                    <img className='graphic' src={ graphic8 } alt='design'></img>
                    <img className='graphic' src={ graphic9 } alt='design'></img>
                </div>
                <img className='graphic' src={ graphic10 } alt='design'></img>
                <img className='graphic' src={ graphic11 } alt='design'></img>
            </div>
        )
    }
    //screenwriting
    if (current.current == 'Screenwriting') {
        return (
            <>
                <ScrollToTop />
                <div className='gpdbtContainer'>
                    <img className='gpdbtLogo' src={ GPDBTLogo }></img>
                </div>
                <h2>Description</h2>
                <p>Good People Do Bad Things is a show about the duality of human nature. 
                    How can someone put on a façade and pretend to be someone they're not? 
                    What circumstances can push people to their limits and make them do things 
                    they don't normally do? After all, we've all done things that are wrong, many 
                    of us knowing that what we were doing was wrong at the time that we did it. 
                    It's a question that many philosophers strive to answer - why do we do what we do? 
                    Ultimately, it all comes down to choice. There are good choices and bad choices, mostly 
                    defined by questions of morality. But what makes someone or something good? What makes someone 
                    or something bad? Of course bad people do bad things, but good people do bad things too.</p>
                <h2>Logline</h2>
                <p>Fearing for the safety of their own first grader, a couple and their best friend become 
                    deeply invested in a police investigation and eventually take matters into their own hands 
                    when a first grade girl suddenly goes missing.</p>
                <embed className='pdfView' src='https://drive.google.com/file/d/1R5G-s9frdQRNER8ygYiix3KnOgToiCfq/preview?usp=sharing'></embed>
            </>  
        )
    }
}

const CreativePage = () => {
    //match route parameter to index in project list
    const routeParams = useParams();
    let index = creativeList.findIndex(e => e.path === routeParams.id);
    let currentCreative = creativeList[index];

    return (
        <div className = 'root-creative-page'>
            <NavBarBack />
            <FadeInSection>
                <div className='creativePageHeader'>
                    <h2>{currentCreative.title}</h2>
                    <p>{currentCreative.description}</p>
                </div>
                <GetCreative current={currentCreative.title} />   
            </FadeInSection>
            <Footer />   
        </div>
    )
}

export default CreativePage

