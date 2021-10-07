import React from "react"
import styles from './Contacts.module.css'
import stylesContainer from "../common/styles/Container.module.css";
import {Input} from "../components/input/Input";

type PropsType = {

}

export const Contacts=(props: PropsType) => {
    return (
        <div className={styles.contactsBlock}>
            <div className={stylesContainer.container}>
                <div className={styles.contactsContainer}>
                        <h3>Contacts</h3>
                    <form action="/action_page.php">
                        <Input titleHolder={'first name'}type={'text'}/>
                        <Input titleHolder={'last name'} type={'text'}/>
                        <textarea className={styles.textField}></textarea>
                    </form>
                    <div>
                        <a href="#">submit</a>
                    </div>
                </div>
            </div>
        </div>
    )
}