import React, { useState, useEffect} from 'react'
import styles from "../../styles/components/Hero/hero.module.scss";
import Container from '../Container/Container';
import SVG from '../../assets/images'

const Hero = () => {
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
    <div className={styles.hero}>
        <Container>
            <div className={styles.heroContainer}>
                <div className={styles.left}>
                    <h1 className={styles.heading}><span>Print on demand</span> for your ecommerce business</h1>
                    <h2 className={styles.subheading}>Sign up for free and only pay for what you sell</h2>
                    <p className={styles.description}>Turn your passion into profit with the world's largest <a href="" className={styles.printondemand}>print on demand</a> network.</p>
                    <div className={styles.buttonContainer}>
                        <a href="" className={styles.btn}>Get started for free</a>
                        <a href="" className={styles.btn}>see our products</a>
                    </div>
                    <div className={styles.shopifyContainer}>
                        <img src={SVG.Shopify}/>
                        <p className={styles.ratingsContainer}><img src={SVG.Star}/><img src={SVG.Star}/><img src={SVG.Star}/><img src={SVG.Star}/><span className={styles.rating}>4.8/5</span></p>
                        <p className={styles.review}>based on <span>910 reviews</span></p>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.rightImage}>
                        {width>767?<img src={SVG.HeroImage}/>:<img src={SVG.HeroImage2}/>}
                    </div>
                </div>
            </div>
        </Container>
    </div>      
  )
}

export default Hero