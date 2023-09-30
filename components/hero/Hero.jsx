import react from 'react';
import styles from './hero.module.css'
import heroImage from '../../assets/images/hero-img.jpg';

export default function Hero() {
    return(
        <div className={`container ${styles.hero}`}>
            <div className={styles['hero-copy']}>
                <h1>Boost your solar panel's power <span>up to 35%!</span></h1>
                <p>Regular cleaning ensures maximum efficiency, letting you harness more energy from the sun.</p>
                <a className="primary-button">Get a quote</a>
            </div>
            <div className={styles['hero-img']}>
                <img src={heroImage.src} alt="some solar panels" />
            </div>
        </div>
    )
}