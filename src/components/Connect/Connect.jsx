import React from 'react'
import styles from "../../styles/components/Connect/connect.module.scss";
import Container from '../Container/Container';
import SVG from "../../assets/images/index.js"

const Connect = () => {
  return (
    <div className={styles.connect}>
        <Container>
            <div className={styles.connectContainer}>
                <div className={styles.left}>
                    <div className={styles.imageContainer}>
                        <img src={SVG.Connect} />
                    </div>
                </div>
                <div className={styles.right}>
                    <h3 className={styles.tagline}>For print producers</h3>
                    <h1 className={styles.heading}>GelatoConnect</h1>
                    <h2 className={styles.description}>Elevate efficiency, cut costs, and seamlessly automate with our all-in-one software solution for the print industry</h2>
                    <div className={styles.buttonContainer}>
                        <button className={styles.btn}>Learn more</button>
                    </div>
                    
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Connect