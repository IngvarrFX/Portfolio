import React from "react";
import styles from "./Title.module.css"

type TitlePropsType = {
    firstPart: string
    secondPart: string
}

export const Title = (props: TitlePropsType) => {
    return (
        <div className={styles.titleBlock}>
            <h2 className={styles.title}>{props.firstPart} <span>{props.secondPart}</span></h2>
        </div>
    )
}
