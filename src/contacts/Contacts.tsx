import React, {ChangeEvent, useState} from "react"
import {useFormik} from "formik";
import styles from "./Contacts.module.css"
import stylesContainer from "../common/styles/Container.module.css";
import emailjs from "emailjs-com";
import {Title} from "../components/title/Title";
import ModalWindow from "../components/modalWindow/ModalWindow";

type PropsType = {}
type FormikErrorType = {
    email?: string
    name?: string
    message?: string
}

export const Contacts = (props: PropsType) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [showModal, setShowModal] = useState(false)

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
        /* validationSchema: Yup.object({
             name: Yup.string()
                 .required("* Name field is required"),
             email: Yup.string().email("Invalid email address")
                 .required("* Email field is required"),
             message: Yup.string().required("* Message field is required")
         }),*/
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = "Email is required";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = "Invalid email address";
            }
            if (!values.name) {
                errors.name = "Name is Required";
            } else if (values.name.length < 1) {
                errors.name = "Name must be more 1."
            }
            if (!values.message) {
                errors.message = "Message is required.";
            } else if (values.name.length > 200) {
                errors.message = "Еhe letter must be no more than 200 characters long."
            }
            return errors;
        },
        onSubmit: values => {
            if (!values.name || !values.email || !values.message) {
                throw new Error("Fields not full")
            }
            try {
                emailjs.send("service_81vwzxp", "template_cxejyuo", values, "user_olv4NwwdwAKOfkDXDuMyo")
                    .then((result) => {
                        console.log(result.text);
                    }, (error) => {
                        console.log(error.text);
                    });
                formik.resetForm()
                setShowModal(true)
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
                    <ModalWindow isShow={showModal} callBack={setShowModal}/>
                    <div className={styles.formBlock}>
                        <div className={styles.myContacts}>
                            <h2 style={{fontWeight: "bold", fontSize: "25px"}}>DON'T BE SHY !</h2>
                            <p style={{ fontWeight:400}}>Feel free to contact me. I am always open to discuss new projects, creative ideas, or the
                                possibility of becoming part of your vision.</p>
                            <div className={styles.address}>
                                <div>
                                    <h4 style={{fontWeight: 500, fontSize: "20px"}}>ADDRESS POINT</h4>
                                    <span>Rostov region city of Novocherkassk.</span>
                                </div>

                            </div>
                            <div className={styles.email}>
                                <div>
                                    <h4 style={{fontWeight: 500, fontSize: "20px"}}>MAIL ME</h4>
                                    <span>nurov.mj@gmail.com</span>
                                </div>

                            </div>
                            <div className={styles.phone}>
                                <div>
                                    <h4 style={{fontWeight: 500, fontSize: "20px"}}>MAIL ME</h4>
                                    <span>+7 932 477 71 23</span>
                                </div>
                            </div>
                            <div className={styles.downloadBtn}>
                                <h1>CV</h1>
                                <a href={"#"} target="_blank"
                                   rel="noopener noreferrer"
                                   className={styles.download}/>
                            </div>
                        </div>
                        <form className={styles.form} action="/action_page.php" onSubmit={formik.handleSubmit}>
                            <div className={styles.inputs}>
                                <div>
                                    <input name={"name"} value={formik.values.name} placeholder={"YOUR NAME"}
                                           type={"text"}
                                           onChange={formik.handleChange}/>
                                    {formik.touched.name && formik.errors.name &&
                                    <div style={{
                                        color: "red",
                                        marginLeft: "15px",
                                        marginBottom: "15px"
                                    }}>{formik.errors.name}</div>}
                                </div>

                                <div>
                                    <input name={"email"} value={formik.values.email} placeholder={"YOUR EMAIL"}
                                           type={"email"} onChange={formik.handleChange}/>
                                    {formik.touched.email && formik.errors.email &&
                                    <div style={{color: "red", marginLeft: "15px"}}>{formik.errors.email}</div>}
                                </div>


                            </div>
                            <div className={styles.textContainer}>
                                <textarea value={formik.values.message} name={"message"}
                                          className={styles.textField} placeholder={"YOUR MESSAGE"}
                                          onChange={formik.handleChange}
                                />
                                {formik.touched.message && formik.errors.message &&
                                <div style={{color: "red", marginLeft: "15px"}}>{formik.errors.message}</div>}
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
