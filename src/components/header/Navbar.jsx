import { Link } from 'react-router-dom';
import { Socials } from "./Socials";
import logo from '../../logo.svg';

export const Navbar = () => {

    return (
        <div className="nav-framer">
            <nav>
                <Link to='/'>Accueil</Link>
                <Link to='/portfolio'>Portfolio</Link>
                <Link to='/liens'>Liens</Link>
            </nav>
            <p>
                <img src={logo} alt='Logo'></img>
            </p>
            <Socials />
        </div>
    )
}