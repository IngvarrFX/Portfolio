import React from 'react';
import styles from './Main.module.css'
import stylesContainer from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={stylesContainer.container}>
                < div className={styles.text}>
                    <span>Hi There</span>
                    <h1> I am Igor Nurov</h1>
                    <p>I am Front-end Developer</p>
                </div>
                <div className={styles.photo}>

                </div>
            </div>

        </div>
    )
}