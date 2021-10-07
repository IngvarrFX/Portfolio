import React from "react"
import styles from './Footer.module.css'
import stylesContainer from "../common/styles/Container.module.css";
import img from '../../public/logo192.png'
type PropsType = {

}

export const Footer=(props: PropsType) => {
    return (
        <div className={styles.footerBlock}>
            <div className={stylesContainer.container}>
                <div className={styles.footerContainer}>
                    <h3>Nurov Igor</h3>
                    <div className={styles.itemContainer}>
                        <a href="#"><img className={styles.image} src="https://img.utdstc.com/icon/fe0/ab6/fe0ab67fa0de2b2681602db5708a076f50dd21106e0c2d38b9661875a37e235e:200" alt=""/></a>
                        <a href="#"><img className={styles.image}  src="https://play-lh.googleusercontent.com/h9jWMwqb-h9hjP4THqrJ50eIwPekjv7QPmTpA85gFQ10PjV02CoGAcYLLptqd19Sa1iJ" alt=""/></a>
                        <a href="#"><img className={styles.image}  src="https://play-lh.googleusercontent.com/yQ0oBTVi7VttofA73DSrcf9zrBsnktxxxn6ZaAoSVV8GNFlJKh2Z-A0CT5XgOKWwE_fs" alt=""/></a>
                        <a href="#"><img className={styles.image}  src="https://play-lh.googleusercontent.com/KxeSAjPTKliCErbivNiXrd6cTwfbqUJcbSRPe_IBVK_YmwckfMRS1VIHz-5cgT09yMo" alt=""/></a>
                    </div>
                        <p> 2022 All rights reserved</p>
                </div>
            </div>
        </div>
    )
}