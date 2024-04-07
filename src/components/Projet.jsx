import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projets from '../data/projets';
import '../styles/projet.scss';

export const Projet = () => {
    const { projetId } = useParams();
    const navigate = useNavigate();
    const projet = projets.find(projet => projet.id === projetId);

    useEffect(() => {
        if (!projet) {
            navigate('/erreur');
        }
    }, [projet, navigate]);

    if (!projet) {
        return null;
    }

    const { title, date, demo, description, tags, ['cover-desc']: coverDesc, duree, commentaire } = projet;

    return (
        <div className="projet">
            <h1>{title}</h1>
            <h2>{date}</h2>
            <div style={{ position: 'relative', paddingBottom: 'calc(49.9609375% + 10px)', height: 0, width: '100%' }}>
                <iframe src={demo} title={title} frameBorder="0" loading="lazy" allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', colorScheme: 'light' }}></iframe>
            </div>
            <div className='projet-body'>
                <h3>{coverDesc}</h3>
                <h4>Durée du projet : {duree}</h4>
                <h4>Outils utilisés : {tags}</h4>
                <p>{description}</p>
                <p>{commentaire}</p>
                <p>À vous de juger le résultat grâce au module de présentation ci-dessus.</p>
            </div>
        </div>
    )
};