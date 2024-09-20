import React from 'react'
import styles from "../../styles/components/Footer/footer.module.scss";
import Container from '../Container/Container';
import SVG from "../../assets/images/index.js"

const Footer = () => {
    const icons = [
        {image:SVG.Instagram},
        {image:SVG.Facebook},
        {image:SVG.YouTube},
        {image:SVG.Linkedin},
        {image:SVG.TikTok},
    ]

    const coldata = 
    [
        {
            heading:'Print on demand',
            data:['What is print on demand?',
                'Product catalog',
                "Shipping and delivery",
                "Dropshipping products",
                "Pro sellers",
                "White label products",
                "Returns policy",
                "Global, yet local",
                "Sustainability",
                "Support",]
        },
        {
            heading:'Integrations',
            data:[ "Shopify",
                "Etsy",
                "WooCommerce",
                "Wix",
                "Squarespace",
                "BigCommerce",
                "API",]
           
        },
        {
            heading:'Start selling',
            data:["Embroidery",
                "Print on demand t-shirts",
                "Print on demand hoodies",
                "Print on demand posters",
                "Print on demand canvas",
                "Print on demand calendars",
                "Print on demand mugs",
                "Custom products",
                "Custom clothing",
                "Custom merchandise",
                "Custom phone cases",
                "Print on demand Europe",
                "Print on demand UK",
                "Print on demand France",
                "Print on demand Canada",
                "Merch maker",]
            
        },
        {
            heading:'Company',
            data:["GelatoConnect",
                "About Gelato",
                "Leadership team",
                "Board & investors",
                "Newsroom",
                "Blog",
                "Customer Stories",
                "Partners",
                "Careers",
                "Affiliates program",]
            
        },
    ]
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