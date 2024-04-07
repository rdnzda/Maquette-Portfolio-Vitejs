import '../styles/projets.scss';
import { ProjetCard } from './ProjetCard';
import projets from '../data/projets';

export const Projets = () => {
    const projetsSort = projets.slice().sort((a, b) => b.id - a.id);

    return (
        <div id="projets">
            <div className='projets-title'>
                <h1>Mes Projets</h1>
                <p>Je travaille dur pour délivrer les meilleures applications.<br></br>
                    Tant que tu es là, jette un coup d'oeil à mes projets.</p>
            </div>
            <div className='projets'>
                {projetsSort.map(projet => (
                    <ProjetCard
                        key={projet.id}
                        title={projet.title}
                        description={projet['cover-desc']}
                        cover={projet.cover}
                        id={projet.id}
                    />
                ))}
            </div>
        </div>
    )
}