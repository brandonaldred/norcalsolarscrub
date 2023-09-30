import react from 'react';
import efficiency from '../../assets/images/statistics.png'
import lifespan from '../../assets/images/lifespan.png'
import reduction from '../../assets/images/reduction.png'
import roi from '../../assets/images/roi.png'
import styles from './benefits.module.css'

export default function Benefits() {
    return(
        <div className={styles['benefits-section']}>
            <div className="container">
                <h2>Benefits of clean solar panels</h2>
                <p>Boost efficiency with NorCal Solar Scrub! Dirty panels can increase bills by 25%. Let us enhance panel lifespan, maximize energy, and expedite your return on investment.</p>
                <div className={styles['benefits-container']}>
                    <div>
                        <img src={efficiency.src} />
                        <p>Increased Efficiency</p>
                    </div>
                    <div>
                        <img src={lifespan.src} />
                        <p>Extended Lifespan</p>
                    </div>
                    <div>
                        <img src={reduction.src} />
                        <p>Reduced Costs</p>
                    </div>
                    <div>
                        <img src={roi.src} />
                        <p>Faster Return</p>
                    </div>
                </div>
            </div>
        </div>
    )
}