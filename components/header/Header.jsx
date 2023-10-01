import react from 'react';
import Link from 'next/link';
import logo from '../../assets/images/logo-wide.svg';
import menuIcon from '../../assets/images/menu-icon.svg';
import styles from './header.module.css'

export default function Header() {
    return(
        <header>
            <div className={`container ${styles['header-container']}`}>
                <h1><Link href="/"><img className={styles['main-logo']} src={logo.src} alt="NorCal Solar Scrub"/></Link></h1>
                <div className={styles.menu}>
                    <p>(555) 555 - 5555</p>
                    <img src={menuIcon.src} alt="" />
                </div>
            </div>
        </header>
    )
}