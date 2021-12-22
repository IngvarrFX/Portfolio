import React from "react";
import styles from "./NavLinks.module.css"
import scrollTo from "gatsby-plugin-smoothscroll"
import {Fade} from "react-awesome-reveal";

type NavLinksPropsType = {
    setIsShow: (value: boolean) => void
}

export const NavLinks = (props: NavLinksPropsType) => {
    const arrayId = [{name: "Main", id: "#main"}, {name: "AboutMe", id: "#aboutMe"}, {
        name: "Project",
        id: "#project"
    }, {name: "Skills", id: "#skills"}, {name: "Contacts", id: "#contacts"}]

    const handlerScrollToClick = (id: string) => {
        scrollTo(id)
        props.setIsShow(false)
    }

    return (
        <Fade cascade={true} direction={"up"} duration={500} triggerOnce={true}>
                <ul className={styles.menu}>
                    {arrayId.map((item, index) => {
                        return (
                            <button key={index} onClick={() => handlerScrollToClick(item.id) }>{item.name}</button>
                        )
                    })}
                </ul>
        </Fade>
    )
}
