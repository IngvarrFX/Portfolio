import React from 'react';
import styles from './Skills.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import {Skill} from './skill/Skill';

export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skills}>
                    <Skill title={'JavaScript'} discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet'}/>
                    <Skill title={'CSS'} discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Skill title={'HTML'} discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                </div>
            </div>
        </div>
    )
}
