import '../styles/projet-card.scss';
import { Link } from 'react-router-dom';

export const ProjetCard = ({ title, description, cover, id }) => {
    return (
        <div className='projet-card-container'>
            <Link to={`/projet/${id}`} className="projet-card">
                <div className='container'>
                    <img alt='image' src={cover}></img>
                </div>
                <div className='projet-card-body'>
                </div>
            </Link>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
};