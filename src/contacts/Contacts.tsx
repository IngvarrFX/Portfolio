import React, {ChangeEvent, useState} from "react"

import styles from "./Contacts.module.css"
import stylesContainer from "../common/styles/Container.module.css";
import {Input} from "../components/input/Input";
import emailjs from "emailjs-com";


type PropsType = {}


export const Contacts = (props: PropsType) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const onNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }
    const onEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const onMessageHendler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
    }
    const sendEmail = (e: any) => {
        e.preventDefault()
        emailjs.sendForm("service_81vwzxp", "template_cxejyuo", e.target, "user_olv4NwwdwAKOfkDXDuMyo")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setName("")
        setEmail("")
        setMessage("")
    }

    return (
        <div className={styles.contactsBlock}>
            <div className={stylesContainer.container}>
                <div className={styles.contactsContainer}>
                    <h3>Contacts</h3>
                    <form className={styles.form} action="/action_page.php" onSubmit={sendEmail}>
                        <div className={styles.inputs}>
                            <Input name={"name"} value={name} callBack={onNameHandler} titleHolder={"YOUR NAME"}
                                   type={"text"}/>
                            <Input name={"email"} value={email} callBack={onEmailHandler}
                                   titleHolder={"YOUR EMAIL"} type={"email"}/>
                        </div>
                        <textarea value={message} name={"message"} onChange={onMessageHendler} className={styles.textField} placeholder={"YOUR MESSAGE"}></textarea>
                        <div>
                            <input type="submit" value="Send" />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}
