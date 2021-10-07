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
                    <div className={styles.formContainer}>
                    <form action="/action_page.php">
                        <Input titleHolder={'first name'}type={'text'}/>
                        <Input titleHolder={'last name'} type={'text'}/>
                        <textarea className={styles.textField}></textarea>
                    </form>
                        <Input titleHolder={'submit'} type={'submit'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}