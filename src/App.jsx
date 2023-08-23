import { useState, useRef, useEffect } from 'react';
import './styles/App.css';
import { v4 as uuidv4 } from 'uuid';

//import images
import coolLinksThumbnail from './assets/Cool-Links-Thumbnail.png';
import libraryThumbnail from './assets/Library-Thumbnail.png';
import toDoThumbnail from './assets/ToDo-Thumbnail.png';
import mapsThumbnail from './assets/Maps-Thumbnail.png';
import fafnirThumbnail from './assets/Fafnir-Thumbnail.png';

//import components
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

//list of project objects
const projectList = [
  { title: 'Cool Links', path: 'cool-links', img: coolLinksThumbnail, preview: 'https://cool-links.netlify.app/', code: 'https://github.com/paigebraun/cool-links', description: 'Seamlessly capture captivating links discovered across the the internet for easy access in the future. Elevate your digital curation prowess as you easily categorize these links into collections. Locate your saved links using intuitive keyword searches.', id: uuidv4()},
  { title: 'Skeuomorphic Library', path: 'library', img: libraryThumbnail, preview: 'https://paigebraun.github.io/library/', code: 'https://github.com/paigebraun/library', description: 'A virtual library that mirrors the charm of its real-world counterpart. Simply add your favorite book, and unveil its cover image with a simple click. Keep track of which books have been read or delete titles from your library at any time. Explore the essence of a library reimagined, right at your fingertips.', id: uuidv4()},
  { title: 'To Do List', path: 'todo-list', img: toDoThumbnail, preview: 'https://paigebraun.github.io/todo-list/', code: 'https://github.com/paigebraun/todo-list', description: 'A minimal, user-friendly to do list application that presents your daily tasks up front. Seamlessly transition to a comprehensive list view, add new tasks and delete old ones, or move tasks to different lists. Created to practice OOP and ES6 module syntax.', id: uuidv4()},
  { title: 'Jazzberry Blue Maps', path: 'maps', img: mapsThumbnail, preview: '', code: '#', description: 'A recreation of maps designed by artist Jazzberry Blue with code. The program takes in shape layers and intricate coordinate data, transforms all intersecting streets into polygons, and randomly fills those polygons with a pre-defined selection of colors.', id: uuidv4()},
  { title: "Fafnir's Dragon", path: 'fafnirs-dragon', img: fafnirThumbnail, preview: 'https://paigebraun.github.io/fafnirs-dragon/', code: ' https://github.com/paigebraun/fafnirs-dragon', description: 'A 2D platform game created as part of a semester long class with two classmates. The game implements two playing levels for users to choose from and has a high score ranking at the end of each play. Maneuver through intricately designed environments and beat the final boss to win the game.', id: uuidv4()}
]

//fade up animation
function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.isIntersecting && setVisible(true));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

function App() {
  return (
    <div className='wrapper-app'>
      <div className='root-app'>
      <NavBar />
      <Hero FadeInSection={FadeInSection} />
      <Projects projectList={projectList} FadeInSection={FadeInSection} />
      <Contact FadeInSection={FadeInSection} />
      <Footer />
      </div>
    </div>
  )
}

export {App, FadeInSection, projectList}
