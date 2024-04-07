import { Projets } from "./Projets";
import { Skills } from "./Skills";
import '../styles/portfolio.scss';
import { Parcours } from "./Parcours";

export const Portfolio = () => {
    return (
        <div className="portfolio">
            <Projets />
            <Skills />
            <Parcours />
        </div> 
    )
}