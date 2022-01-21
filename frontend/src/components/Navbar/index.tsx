import { ReactComponent as GitHubIcon } from '../../assets/img/github.svg'
import './styles.css'

function Navbar () {
    return (
        <header>
            <nav className="container">
                <div className="dsMovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/LeonardoCisz">
                        <div className="dsMovie-contact-container">
                            <GitHubIcon />
                            <p className="dsMovie-Contact-link">/LeonardoCisz</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;