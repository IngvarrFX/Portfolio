import React from "react";
import styles from "./Projects.module.css"
import stylesContainer from "../common/styles/Container.module.css";
import {Project} from "./project/Project";
import {Title} from "../components/title/Title";


export const Projects = () => {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${stylesContainer.container} ${styles.projectsContainer}`}>
                <div className={styles.titleBlock}>
                    <Title/>
                </div>

                <div className={styles.projects}>
                    <Project title={"Todo list"}
                             discription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet"}/>
                    <Project title={"Social site"}
                             discription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                    <Project title={"Counter"}
                             discription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                </div>
            </div>
        </div>
    )
}
