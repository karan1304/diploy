import React from 'react'
import styles from "../../styles/components/WhyChoose/whychoose.module.scss";
import Container from '../Container/Container';
import SVG from "../../assets/images/index.js"
import { whychooselist } from '../../Constraints/index.js';

const WhyChoose = () => {
    return (
    <div className={styles.WhyChoose}>
    <Container>
        <h1 className={styles.heading}>Why Choose Gelato</h1>
        <div className={styles.WhyChooseContainer}>
            <div className={styles.left}>
                <div className={styles.imageContainer}>
                    <img src={SVG.WhyChooseGelato}/>
                </div>
            </div>
            <div className={styles.right}>
                    <ul className={styles.listContainer}>
                        {whychooselist.map((item, index)=>(
                            <div key={index}>
                                <h1 className={styles.title}>{item.title}</h1>
                                <li className={styles.description}>{item.description}</li>
                            </div>
                             ))}
                    </ul>   
            </div>
        </div>
    </Container>
    </div>
  )
}

export default WhyChoose