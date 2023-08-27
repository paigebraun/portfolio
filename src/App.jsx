import { useState, useRef, useEffect } from 'react';
import './styles/App.css';
import { v4 as uuidv4 } from 'uuid';

//import images
import mapsThumbnail from './assets/Maps-Thumbnail.png'
import coolLinks1 from './assets/Cool-Links-1.png';
import coolLinks2 from './assets/Cool-Links-2.png';
import coolLinksThumbnail from './assets/Cool-Links-Thumbnail.png';
import library1 from './assets/Library-1.png';
import libraryThumbnail from './assets/Library-Thumbnail.png';
import toDo1 from './assets/ToDo-1.png';
import toDo2 from './assets/ToDo-2.png';
import toDo3 from './assets/ToDo-3.png';
import toDoThumbnail from './assets/ToDo-Thumbnail.png';
import maps1 from './assets/Maps-1.png';
import maps2 from './assets/Maps-2.png';
import maps3 from './assets/Maps-3.png';
import fafnir1 from './assets/Fafnir-1.png';
import fafnir2 from './assets/Fafnir-2.png';
import fafnir3 from './assets/Fafnir-3.png';
import fafnirThumbnail from './assets/Fafnir-Thumbnail.png'

//import components
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import {Projects} from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

//list of project objects
const projectList = [
  { title: 'Cool Links', path: 'cool-links', img: coolLinksThumbnail, displayImg: [coolLinksThumbnail, coolLinks1, coolLinks2], preview: 'https://cool-links.netlify.app/', 
    code: 'https://github.com/paigebraun/cool-links', description: 'Seamlessly capture captivating links discovered across the the internet for easy access in the future. Elevate your digital curation prowess as you easily categorize these links into collections. Locate your saved links using intuitive keyword searches.', 
    builtWith: 'HTML, CSS, Javascript, React.js, Vite, Web Storage API, Link Preview API', id: uuidv4()},
  { title: 'Skeuomorphic Library', path: 'library', img: libraryThumbnail, displayImg:[libraryThumbnail, library1], preview: 'https://paigebraun.github.io/library/', 
    code: 'https://github.com/paigebraun/library', description: 'A virtual library that mirrors the charm of its real-world counterpart. Simply add your favorite book, and unveil its cover image with a simple click. Keep track of which books have been read or delete titles from your library at any time. Explore the essence of a library reimagined, right at your fingertips.', 
    builtWith: 'HTML, CSS, Javascript, Google Books API', id: uuidv4()},
  { title: 'To Do List', path: 'todo-list', img: toDoThumbnail, displayImg: [toDoThumbnail, toDo1, toDo2, toDo3], preview: 'https://paigebraun.github.io/todo-list/', 
    code: 'https://github.com/paigebraun/todo-list', description: 'A minimal, user-friendly to do list application that presents your daily tasks up front. Seamlessly transition to a comprehensive list view, add new tasks and delete old ones, or move tasks to different lists. Created to practice OOP and ES6 module syntax.', 
    builtWith: 'HTML, CSS, Javascript, Webpack', id: uuidv4()},
  { title: 'Jazzberry Blue Maps', path: 'maps', img: mapsThumbnail, displayImg: [maps1, maps2, maps3], preview: '', 
    code: '#', description: 'A recreation of maps designed by artist Jazzberry Blue with code. The program takes in shape layers and intricate coordinate data, transforms all intersecting streets into polygons, and randomly fills those polygons with a pre-defined selection of colors.',
    builtWith: 'Python, Matplotlib, GeoPandas, Shapely, NumPy', id: uuidv4()},
  { title: "Fafnir's Dragon", path: 'fafnirs-dragon', img: fafnirThumbnail, displayImg: [fafnirThumbnail, fafnir1, fafnir2, fafnir3], preview: 'https://paigebraun.github.io/fafnirs-dragon/', 
    code: ' https://github.com/paigebraun/fafnirs-dragon', description: 'A 2D platform game created as part of a semester long class with two classmates. The game implements two playing levels for users to choose from and has a high score ranking at the end of each play. Maneuver through intricately designed environments and beat the final boss to win the game.', 
    builtWith: 'HTML, CSS, Javascript, Phaser 3, TileMaps', id: uuidv4()}
]

//list of creative objects
const creativeList = [
  { title: 'Video', path: 'video', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', id: uuidv4()},
  { title: 'Graphic Design', path: 'graphic-design', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', id: uuidv4()},
  { title: 'Photography', path: 'photography', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', id: uuidv4()},
  { title: 'Screenwriting', path: 'screenwriting', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', id: uuidv4()}
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

export {App, FadeInSection, projectList, creativeList}
