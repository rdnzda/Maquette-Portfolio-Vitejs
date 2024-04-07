import "../styles/portrait.scss";
import webdev from "../images/planet-saturn-svgrepo-com.svg";

export const Portrait = () => {
    return (
        <div className="portrait">
            <div className="portrait-content-div">
                <div className="bar"></div>
                <section className="portrait-content-section">
                    <div className="portrait-titles">
                        <h1>Akunzada<br></br>Redean</h1>
                        <h2 className="gradient-text">Développeur Front-end</h2>
                        <p>Autodidacte depuis mes 18 ans, je suis passionné par <br></br> le développement web, l'UI/UX.</p>
                    </div>
                    <div className="portrait-buttons">
                        <a href="#footer" id="contact-button"><span>ME CONTACTER</span></a>
                        <a href='https://github.com/rdnzda' id="github-button"><i className="fa-brands fa-github fa-lg"></i>Github</a>
                    </div>
                </section>
            </div>
            <img src={webdev} alt="webdev"></img>
        </div>
    )
}