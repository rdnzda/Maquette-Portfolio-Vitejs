import '../styles/parcours.scss'

export const Parcours = () => {
    return (
        <div className="parcours">
            <h3>Mon parcours</h3>
            <div className='parcours-container'>
                <div className='parcour'>
                    <p>2022-2023</p>
                    <h4>BUT Informatique - Iut du Limousin</h4>
                </div>
                <div className='parcour'>
                    <p>2023-2024</p>
                    <h4>Parcours Développement web - OpenClassrooms</h4>
                </div>
            </div>
        </div>
    )
}