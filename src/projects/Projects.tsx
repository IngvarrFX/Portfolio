import React from 'react';
import styles from './Projects.module.css'
import stylesContainer from '../common/styles/Container.module.css';
import { Project } from './project/Project';



export const Projects = () => {
    return(
        <div className={styles.projectsBlock}>
            <div className={`${stylesContainer.container} ${styles.projectsContainer}`}>
                <h2 className={styles.title}>Projects</h2>
                <div className={styles.projects}>
                    <Project title={'Todo list'} discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet'}/>
                    <Project title={'Social site'} discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Project title={'Counter'} discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                </div>
            </div>
        </div>
    )
}