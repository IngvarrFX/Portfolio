import React from "react";
import styles from "./Title.module.css"



export const Title = () => {
    return (
        <div className={styles.titleBlock}>
            <h2 className={styles.title}>My <span>projects</span></h2>
        </div>
    )
}
