import React from 'react'
import styles from "../../styles/components/CountOrder/countorder.module.scss";
import Container from '../Container/Container';
import SVG from "../../assets/images/index.js"


const CountOrder = () => {

    const countlist = [
        {
            num:'90%',
            desc:'Of all orders are produced locally'
        },
        {
            num:'90%',
            desc:'Of orders arrive within 5 days of ordering'
        },
        {
            num:'140+',
            desc:'Print providers across 32 countries'
        },
    ]    
  return (
    <div className={styles.countorder}>
        <Container>
            <div className={styles.countorderContainer}>
                {
                    countlist.map((item, index) => (
                        <div key={index} className={styles.box}>
                            <p className={styles.num}>{item.num}</p>
                            <p className={styles.desc}>{item.desc}</p>
                        </div>
                    ))
                }
            </div>
        </Container>
    </div>
  )
}

export default CountOrder