import React, {ChangeEvent} from "react"
import styles from "./Input.module.css"

type PropsType = {
    titleHolder: string
    type: string
    name: string
    value: string
    callBack: (value: ChangeEvent<HTMLInputElement>) => void
}


export const Input = (props: PropsType) => {
    return (
        <div>
            <input name={props.name} value={props.value} className={styles.input} type={props.type}
                   placeholder={props.titleHolder} onChange={props.callBack}/>
        </div>
    )
}
