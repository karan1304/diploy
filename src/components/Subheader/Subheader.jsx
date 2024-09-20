import React from 'react'
import styles from "../../styles/components/Subheader/subheader.module.scss";
import Container from '../Container/Container';
import SVG from '../../assets/images';
import {listItems} from '../../Constraints/index'

const Subheader = () => {

  return (
    <div className={styles.subheader}>
      <Container>
        <div className={styles.subheaderContainer}>
          <ul className={styles.list}>
            {
              listItems.map((item, index) => (
                <li key={index} className={styles.item}>
                  <a href="" className={styles.link}>{item}<img src={SVG.DownArrow}/></a>
                </li>
              ))
            }
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default Subheader;