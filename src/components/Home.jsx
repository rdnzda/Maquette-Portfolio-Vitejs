import { Portrait } from "./Portrait";
import '../styles/home.scss';
import { AboutMe } from "./AboutMe";
import '../styles/projet-card.scss';
import { LastProjets } from "./LastProjets";
import { Services } from "./Services";
import { Skills } from "./Skills";

export const Home = () => {
    return (
        <div id="home">
            <Portrait />
            <AboutMe />
            <Services />
            <LastProjets />
            <Skills />
        </div>
    )
}