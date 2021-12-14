import React from "react";
import styles from "./Projects.module.css"
import stylesContainer from "../common/styles/Container.module.css";
import {Project} from "./project/Project";
import {Title} from "../components/title/Title";
import data from "../myData"


export const Projects = () => {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${stylesContainer.container} ${styles.projectsContainer}`}>
                <div className={styles.titleBlock}>
                    <Title firstPart={"My"} secondPart={"project"}/>
                </div>

                <div className={styles.projects}>
                    {data.projects.map((project, index) => {
                        return (
                            <Project key={index} title={project.title} discription={project.descriprion}
                                     img={project.imageSrc}
                                     repositories={project.url}
                                     demoLink={project.page}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
