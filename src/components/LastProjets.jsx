import { ProjetCard } from "./ProjetCard";
import projets from '../data/projets';

export const LastProjets = () => {
    const projetsSort = projets.slice().sort((a, b) => b.id - a.id);

    return (
        <div className="mes-derniers-projets">
            <div className="mes-derniers-projets-body">
                <h3>Mes derniers projets</h3>
                <a href="/portfolio">Voir Tout ➤</a>
            </div>
            <div className="projets">
                {projetsSort.map(projet => (
                        <ProjetCard
                            key={projet.id}
                            title={projet.title}
                            description={projet["cover-desc"]}
                            cover={projet.cover}
                            id={projet.id}
                        />
                    ))}
            </div>
        </div>
    )
}