import React from 'react'
import styles from "../../styles/components/WhyChoose/whychoose.module.scss";
import Container from '../Container/Container';
import SVG from "../../assets/images/index.js"

const WhyChoose = () => {
    const whychooselist = [
        {
            title: "World's largest print-on-demand network",
            description: "140+ print partners in 32 countries. Gelato is a truly global service."
        },
        {
            title: "Sell globally, produce locally",
            description: "Your products are produced close to your customers, wherever they are."
        },
        {
            title: "100% free editing tools",
            description: "Create your custom products using our suite of free tools."
        },
        {
            title: "60+logistics partners",
            description: "Our global network of logistics partners ensures your products are delivered fast."
        },
        {
            title: "High-quality products",
            description: "We partner with the world's leading brands to ensure the best quality products."
        },
        {
            title: "Endless creativity with Shutterstock Images",
            description: "Access millions of images and graphics to create unique products you can sell in your store."
        },
        {
            title: " 1-click integration to the leading ecommerce platforms",
            description: "Connect your store to Gelato using our integrations with Shopify, Etsy and more."
        },
        
        
    ]
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