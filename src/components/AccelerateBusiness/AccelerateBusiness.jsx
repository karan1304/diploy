import React from 'react'
import styles from "../../styles/components/AccelerateBusiness/acceleratebusiness.module.scss";
import Container from '../Container/Container';
import SVG from '../../assets/images'

const AccelerateBusiness = () => {
  return (
    <div className={styles.ac}>
        <Container>
            <div className={styles.acContainer}>
                <div className={styles.left}>
                    <h3 className={styles.tagline}>For print on demand sellers</h3>
                    <h1 className={styles.heading}>Accelerate business growth with innovative design tools and apps</h1>
                    <p className={styles.description}>
                    See how our cutting-edge solutions can help you reach new customers and maximize your profits.
                    </p>
                    <div className={styles.buttonContainer}>
                        <a href="" className={styles.btn}>Get started</a>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.imageContainer}>
                        <img src={SVG.AC}/>
                    </div>
                </div>
            </div>
        </Container>    
    </div>
  )
}

export default AccelerateBusiness