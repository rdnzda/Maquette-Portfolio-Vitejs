import { Link } from 'react-router-dom';
import '../styles/erreur.scss';

export const Erreur = () => {
    return (
        <div className="erreur">
            <h1>404</h1>
            <h2>On dirait que tu t'es perdu...</h2>
            <Link to='/'>Retour à l'accueil</Link>
        </div>
    )
}