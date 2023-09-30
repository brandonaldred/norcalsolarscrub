import react from 'react';
import styles from './services.module.css'
import commercial from '../../assets/images/commercial.jpg';

export default function Services(props) {
    return(
        <>
        <div className={`container ${styles.services}`}>
            <img src={commercial.src}/>
            <div>
                <h3>Residential Services</h3>
                <p>Elevate your energy output with pristine panels, expert cleaning, and a promise of extended system lifespan.</p>
                <a className="primary-button" href="">Get a quote</a>
            </div>
        </div>
        <div className={`container ${styles.services} ${styles['services-left']}`}>
            <img src={commercial.src}/>
            <div>
                <h3>Residential Services</h3>
                <p>Elevate your energy output with pristine panels, expert cleaning, and a promise of extended system lifespan.</p>
                <a className="primary-button" href="">Get a quote</a>
            </div>
        </div>
        </>
    )
}