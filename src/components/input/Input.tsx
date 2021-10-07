import React from "react"
import styles from './Input.module.css'
type PropsType = {
    titleHolder: string
    type: string
}


export const Input = (props: PropsType) => {
    return(
        <div>
            <input className={styles.input} type={props.type} placeholder={props.titleHolder}/>
        </div>
    )
}