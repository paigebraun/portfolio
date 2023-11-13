import "../styles/NotFound.css";

//import components
import NavBar from "./NavBar"
import Footer from "./Footer";

const NotFound = () => {
    return (
        <div className='wrapper-app'>
        <div className='root-app'>
            <NavBar />
            <div className="notfound-container">
                <div className="notfound">
                    <h1>404</h1>
                    <h4>Oops! This page could not be found.</h4>
                    <p>The page you are looking for does not exist. Use the navigation bar above to go to a page that does.</p>
                </div>
            </div>      
        </div>
        </div>
    )
}

export default NotFound