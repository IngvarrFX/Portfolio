import React from 'react';
import styles from './Skills.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import {Skill} from './skill/Skill';
import {Title} from "../components/title/Title";
import data from "../myData"

export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                <Title firstPart={"My"} secondPart={"skills"}/>
                <div className={styles.skills}>
                    {data.skills.map((skill,index)=> {
                        return (
                            <div key={index} className={styles.skillsItems}>
                                <Skill icon={skill.img} discription={skill.descriprion}/>
                            </div>

                        )
                    })}
                    {/*<Skill title={'CSS'} discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Skill title={'HTML'} discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>*/}
                </div>
            </div>
        </div>
    )
}
