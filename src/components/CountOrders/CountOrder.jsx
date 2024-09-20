import React from 'react'
import styles from "../../styles/components/CountOrder/countorder.module.scss";
import Container from '../Container/Container';
import SVG from "../../assets/images/index.js"
import { countlist } from '../../Constraints/index.js';


const CountOrder = () => {

       
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