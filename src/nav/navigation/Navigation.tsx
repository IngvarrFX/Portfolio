import React from "react";
import {NavLinks} from "../navLinks/NavLinks";
import classes from "../Nav.module.css"
import {Fade} from "react-awesome-reveal";
import styles from "./Navigation.module.css"
import scrollTo from "gatsby-plugin-smoothscroll";


export const Navigation = () => {
    const arrayId = [{name: "Main", id: "#main"}, {name: "AboutMe", id: "#aboutMe"}, {
        name: "Project",
        id: "#project"
    }, {name: "Skills", id: "#skills"}, {name: "Contacts", id: "#contacts"}]

    const linkClickHandler = (id: string) => {
        scrollTo(id)
    }

    return (
        <nav className={classes.navigation}>
            <Fade cascade={true} direction={"up"} duration={500} triggerOnce={true}>
                <ul className={styles.navBar}>
                    {arrayId.map((item, index) => {
                        return (
                            <button key={index} onClick={() => linkClickHandler(item.id)}>{item.name}</button>
                        )
                    })}
                </ul>
            </Fade>
        </nav>
    );
};

