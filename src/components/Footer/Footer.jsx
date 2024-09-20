import React from 'react'
import styles from "../../styles/components/Footer/footer.module.scss";
import Container from '../Container/Container';
import SVG from "../../assets/images/index.js"
import { coldata, icons} from '../../Constraints/index.js';

const Footer = () => {
    

    
  return (
    <div className={styles.footer}>
        <Container>
            <div className={styles.footerContainer}>
                <div className={styles.header}>
                    <div className={styles.logo}>
                        <img src={SVG.WhiteLogo}/>
                    </div>
                    <div className={styles.socialMedia}>
                        <h1 className={styles.label}>Find Gelato on:</h1>
                        <div className={styles.socialMediaIcons}>
                            {icons.map((item , index)=>(
                                <img src={item.image} key={index} className={styles.scIcons}/>
                                ))}
                        </div>
                    </div>
                </div>
                <div className={styles.menu}>
                    <div className={styles.colOne}>
                        <div className={styles.upper}>
                            <p className={styles.desc}>Gelato has created the world's largest network for local production and distribution of customized products. Together we bring creativity to life - and into business.</p>
                            <a className={styles.startedBtn}>Get started</a>
                        </div>
                        <div className={styles.lower}>
                            <h1 className={styles.heading}>Get the app</h1>
                            <div className={styles.buttonContainer}>
                                <a className={styles.playstore}><img src={SVG.Apple}/></a>
                                <a className={styles.playstore}><img src={SVG.Google}/></a>
                            </div>
                            
                        </div>
                    </div>
                    {coldata.map((item, index)=>(
                        <div className={styles.col} key={index}>
                            <h1 className={styles.heading}>{item.heading}</h1>
                            <ul className={styles.list}>
                                {
                                    item.data.map((data, index)=>(
                                        <li key={index} className={styles.item}><a href="" className={styles.link}>{data}</a></li>
                                    ))
                                }    
                            </ul>
                        </div>))}
                    
                </div>
                <div className={styles.lower}>
                    <div className={styles.listContainer}>
                        <ul className={styles.list}>
                            <li className={styles.item}><a href="" className={styles.link}>Contact us</a></li>
                            <li className={styles.item}><a href="" className={styles.link}>Legal</a></li>
                            <li className={styles.item}><a href="" className={styles.link}>Privacy policy</a></li>
                            <li className={styles.item}><a href="" className={styles.link}>Cookie policy</a></li>
                            <li className={styles.item}><a href="" className={styles.link}>API terms</a></li>
                            <li className={styles.item}><a href="" className={styles.link}>Sitemap</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </Container>
    </div>
  )
}

export default Footer