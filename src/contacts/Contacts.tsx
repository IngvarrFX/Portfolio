import React, {ChangeEvent, useState} from "react"
import {useFormik} from "formik";
import styles from "./Contacts.module.css"
import stylesContainer from "../common/styles/Container.module.css";
import {Input} from "../components/input/Input";
import emailjs from "emailjs-com";
import {Title} from "../components/title/Title";
import * as Yup from "yup";
import {Simulate} from "react-dom/test-utils";
import save from "../assets/save.svg"

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

    const formik = useFormik({

        initialValues: {
            name: "",
            email: "",
            message: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("* Name field is required"),
            email: Yup.string().email("Invalid email address")
                .required("* Email field is required"),
            message: Yup.string().required("* Message field is required")
        }),
        onSubmit: values => {
            try {
                emailjs.send("service_81vwzxp", "template_cxejyuo", values, "user_olv4NwwdwAKOfkDXDuMyo")
                    .then((result) => {
                        console.log(result.text);
                    }, (error) => {
                        console.log(error.text);
                    });
                setName("")
                setEmail("")
                setMessage("")
            } catch {
                console.log("error")
            }
        },
    });

    return (
        <div className={styles.contactsBlock} id="contacts">
            <div className={stylesContainer.container}>
                <div className={styles.contactsContainer}>
                    <div className={styles.title}>
                        <Title firstPart={"My"} secondPart={"contacts"}/>
                    </div>

                    <div className={styles.formBlock}>
                        <div className={styles.myContacts}>
                            <h2 style={{fontWeight: "bold", fontSize: "25px"}}>DON'T BE SHY !</h2>
                            <p>Feel free to contact me. I am always open to discuss new projects, creative ideas, or the
                                possibility of becoming part of your vision.</p>
                            <div className={styles.address}>
                                <i></i>
                                <h4 style={{fontWeight: 500, fontSize: "20px"}}>ADDRESS POINT</h4>
                                <span>Rostov region city of Novocherkassk.</span>
                            </div>
                            <div className={styles.email}>
                                <h4 style={{fontWeight: 500, fontSize: "20px"}}>MAIL ME</h4>
                                <span>nurov.mj@gmail.com</span>
                            </div>
                            <div className={styles.phone}>
                                <h4 style={{fontWeight: 500, fontSize: "20px"}}>MAIL ME</h4>
                                <span>+7 932 477 71 23</span>
                            </div>
                            <div className={styles.download}>
                                <span style={{fontWeight: "bold", fontSize: "40px", color: "#000"}}>CV</span>
                                <a href={"#"} ><img src={save}/></a>
                            </div>
                        </div>
                        <form className={styles.form} action="/action_page.php" onSubmit={formik.handleSubmit}>
                            <div className={styles.inputs}>
                                {/*<Input name={"name"} value={name} callBack={onNameHandler} titleHolder={"YOUR NAME"}
                                       type={"text"}/>
                                <Input name={"email"} value={email} callBack={onEmailHandler}
                                       titleHolder={"YOUR EMAIL"} type={"email"}/>*/}
                                <input name={"name"} value={formik.values.name} placeholder={"YOUR NAME"} type={"text"}
                                       onChange={formik.handleChange}/>
                                <input name={"email"} value={formik.values.email} placeholder={"YOUR EMAIL"}
                                       type={"email"} onChange={formik.handleChange}/>
                            </div>
                            <div className={styles.textContainer}>
                                <textarea value={formik.values.message} name={"message"}
                                          className={styles.textField} placeholder={"YOUR MESSAGE"}
                                          onChange={formik.handleChange}
                                />
                            </div>
                            <div className={styles.submitBtn}>
                                <button type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
