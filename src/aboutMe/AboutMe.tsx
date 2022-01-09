import React from "react"
import styles from "./AboutMe.module.css"
import stylesContainer from "../common/styles/Container.module.css";
import {Title} from "../components/title/Title";
import data from "../myData"
import {Fade} from "react-awesome-reveal";

type PropsType = {}

export const AboutMe = (props: PropsType) => {
    return (
        <div className={styles.aboutMeBlock} id="aboutMe">
            <div className={stylesContainer.container}>
                <div className={styles.aboutMeContainer}>
                    <Fade cascade={true} direction={"up"} duration={1000} triggerOnce={true}>
                        <div className={styles.aboutMe}>
                            <div className={styles.description}>
                                <div className={styles.text}>
                                    <Title firstPart={"About"} secondPart={"me"}/>
                                </div>
                                <p>
                                    {data.aboutParaOne}
                                    <br></br>
                                    <br></br>
                                    {data.aboutParaTwo}
                                    <br></br>
                                    <br></br>
                                    {data.aboutParaThree}
                                    <br></br>
                                    <br></br>
                                    {data.aboutParaFour}
                                </p>
                            </div>
                            <div className={styles.photo}
                                >
                                <img src={data.aboutImage}/>
                            </div>

                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}
