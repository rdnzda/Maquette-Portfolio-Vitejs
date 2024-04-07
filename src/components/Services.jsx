import '../styles/services.scss';
import browser from '../images/browser.png';
import uiux from '../images/ui-ux.png'

export const Services = () => {
    return (
        <div className="mes-services">
            <h3>Mes services</h3>
            <div className='services'>
                <div className="service">
                    <img src={browser} alt='browser'></img>
                    <h4>Applications</h4>
                    <p>Développe des sites vitrines, e-commerce, applications web, mobile ou de bureau.</p>
                </div>
                <div className="service">
                    <img src={uiux} alt='browser'></img>
                    <h4>Expérience utilisateur & Design</h4>
                    <p>Une expérience fluide et magnifique pour vos clients.</p>
                </div>
            </div>
        </div>
    )
}