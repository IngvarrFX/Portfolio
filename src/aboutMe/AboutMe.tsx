import React from "react"
import styles from "./AboutMe.module.css"
import stylesContainer from "../common/styles/Container.module.css";
import { Title } from "../components/title/Title";
import {Description} from "../components/description/Description";
import data from "../myData"
type PropsType = {

}

export const AboutMe=(props: PropsType) => {
    return (
        <div className={styles.aboutMeBlock} id="aboutMe">
            <div className={stylesContainer.container}>
                <div className={styles.aboutMeContainer}>
                <div className={styles.text}>
                   <Title firstPart={"About"} secondPart={"me"}/>
                </div>
                    <div className={styles.aboutMe}>
                        <div className={styles.description}>
                            <Description text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur consequatur cumque ducimus eligendi exercitationem fuga ipsam libero nesciunt officiis pariatur perspiciatis porro quo repellendus repudiandae ut veniam, voluptate voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur consequatur cumque ducimus eligendi exercitationem fuga ipsam libero nesciunt officiis pariatur perspiciatis porro quo repellendus repudiandae ut veniam, voluptate voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur consequatur cumque ducimus eligendi exercitationem fuga ipsam libero nesciunt officiis pariatur perspiciatis porro quo repellendus repudiandae ut veniam, voluptate voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur consequatur cumque ducimus eligendi exercitationem fuga ipsam libero nesciunt officiis pariatur perspiciatis porro quo repellendus repudiandae ut veniam, voluptate voluptatibus."}/>
                        </div>
                        <div className={styles.photo}>
                            <img src={data.aboutImage}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
