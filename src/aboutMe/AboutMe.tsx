import React from "react"
import styles from "./AboutMe.module.css"
import stylesContainer from "../common/styles/Container.module.css";
import { Title } from "../components/title/Title";
import {Description} from "../components/description/Description";

type PropsType = {

}

export const AboutMe=(props: PropsType) => {
    return (
        <div className={styles.remoteWorkBlock}>
            <div className={stylesContainer.container}>
                <div className={styles.remoteWorkContainer}>
                <div className={styles.text}>
                   <Title firstPart={"About"} secondPart={"me"}/>
                </div>
                    <Description text={"I come from a provincial town in Belarus, currently living in ~~Cracow~~ on the road. My interest in web development started back in 2020 when I enrolled in a course for aspiring developers at RSSchool."}/>
                </div>
            </div>
        </div>
    )
}
