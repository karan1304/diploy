import React, { useState , useEffect} from 'react'
import styles from "../../styles/components/Topbar/topbar.module.scss";
import Container from '../Container/Container';
import SVG from "../../assets/images/index.js"

const Topbar = ({setIsOpen}) => {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className={styles.topbar}>
        <Container>
        <div className={styles.topbarContainer}>
            <div className={styles.logo}>
              {width<=980 && <a href={''} className={styles.menu} onClick={(e)=>
                {
                  e.preventDefault();
                  setIsOpen(true);
                }
                }><img src={SVG.Menu}/></a>}
                <img src={SVG.Logo}/>
            </div>

            <div className={styles.signcartcontact}>
            { 
               width>900 &&
                <>
                <button className={`${styles.btn} ${styles.contact}`}><img src={SVG.Contact} className={styles.btnIcon}/>Contact us</button>
                <button className={`${styles.btn} ${styles.cart}`}><img src={SVG.Cart} className={styles.btnIcon}/>Cart</button>
                <button className={`${styles.btn} ${styles.signin}`}><img src={SVG.SignIn} className={styles.btnIcon}/>Sign in</button>
                <button className={`${styles.btn} ${styles.signup}`}>Sign up for free</button>
                </>
                }
            </div>
        </div>
        </Container>
    </div>
  )
}

export default Topbar