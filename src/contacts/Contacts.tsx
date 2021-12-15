import React, {ChangeEvent, useState} from "react"

import styles from "./Contacts.module.css"
import stylesContainer from "../common/styles/Container.module.css";
import {Input} from "../components/input/Input";
import emailjs from "emailjs-com";
import {Title} from "../components/title/Title";


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
        <div className={styles.contactsBlock} id="contacts">
            <div className={stylesContainer.container}>
                <div className={styles.contactsContainer}>
                <div className={styles.title}>
                    <Title firstPart={"My"} secondPart={"contacts"}/>
                </div>

                    <div className={styles.formBlock}>
                        <div className={styles.myContacts}>
                            <h2>DON'T BE SHY !</h2>
                            <p>Feel free to contact me. I am always open to discuss new projects, creative ideas, or the possibility of becoming part of your vision.</p>
                            <div>
                                <h4>ADDRESS POINT</h4>
                                <span>Rostov region city of Novocherkassk.</span>
                            </div>
                            <div>
                                <h4>MAIL ME</h4>
                                <span>nurov.mj@gmail.com</span>
                            </div>
                            <div>
                                <h4>MAIL ME</h4>
                                <span>+7 932 477 71 23</span>
                            </div>
                            <a href={"#"}>CV</a>
                        </div>
                        <form className={styles.form} action="/action_page.php" onSubmit={sendEmail}>
                            <div className={styles.inputs}>
                                <Input name={"name"} value={name} callBack={onNameHandler} titleHolder={"YOUR NAME"}
                                       type={"text"}/>
                                <Input name={"email"} value={email} callBack={onEmailHandler}
                                       titleHolder={"YOUR EMAIL"} type={"email"}/>
                            </div>
                            <div className={styles.textContainer}>
                                <textarea value={message} name={"message"} onChange={onMessageHendler} className={styles.textField} placeholder={"YOUR MESSAGE"}/>
                            </div>
                            <div className={styles.submitBtn}>
                                <button type="submit" >Send Message</button>
                            </div>
                        </form>
                    </div>


                </div>
            </div>
        </div>
    )
}
