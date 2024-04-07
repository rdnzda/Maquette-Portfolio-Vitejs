import '../styles/liens.scss'

export const Liens = () => {
    return (
        <div className="liens">
            <div className="liens-titles">
                <h1>Akunzada Redean</h1>
                <h2>✦ Développeur Front-End ✦</h2>
            </div>
            <div className="liens-body">
                <div>
                    <h3>Mes ressources</h3>
                    <a href='/portfolio' id='portfolio-button'>👉🏼 Voir mon portfolio</a>
                    <a href='https://github.com/rdnzda'><i className="fa-brands fa-github"></i> Mon Github</a>
                </div>
                <div>
                    <h3>Autres Liens</h3>
                    <a href='https://www.linkedin.com/in/redean-akunzada'><i className="fa-brands fa-linkedin"></i> Mon LinkedIn</a>
                    <a href='/'>🔗 akunzadaredean.fr</a>
                </div>
                <h4>©akunzadaredean, 2024</h4>
            </div>
        </div>
    )
}