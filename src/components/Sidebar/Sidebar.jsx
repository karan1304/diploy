import React from 'react'
import styles from "../../styles/components/Sidebar/sidebar.module.scss";
import SVG from '../../assets/images'
import {listItems} from '../../Constraints/index'

const Sidebar = ({setIsOpen}) => {

  return (
    <div className={styles.sidebar}>
        <div className={styles.top}>
            <div className={styles.buttonContainer}>
                
                {/* <a className={`${styles.btn} ${styles.contact}`}><img src={SVG.Contact} className={styles.btnIcon}/>Contact us</a> */}
                <a className={`${styles.btn} ${styles.cart}`}><img src={SVG.Cart} className={styles.btnIcon}/>Cart</a>
                <a href={""} className={styles.close} onClick={(e)=>
                  {
                    e.preventDefault();
                    setIsOpen(false)
                  }
                  }><img src={SVG.Close}/></a>
            </div>
        </div>
        <div className={styles.middle}>
            <div className={styles.buttonContainer}>
                <button className={`${styles.btn} ${styles.signup}`}>Sign up for free</button>
                <button className={`${styles.btn} ${styles.signin}`}>Sign in</button>
            </div>
        </div>
        <div className={styles.last}>
            <ul className={styles.list}>
            {
              listItems.map((item, index) => (
                <li key={index} className={styles.item}>
                  <a href="" className={styles.link}>{item}<img src={SVG.LeftArrow} /></a>
                </li>
              ))
            }
            </ul>
        </div>
    </div>
  )
}

export default Sidebar