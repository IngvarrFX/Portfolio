import React from "react";
import styles from "./Nav.module.css"
import scrollTo from "gatsby-plugin-smoothscroll"
import {Fade} from "react-awesome-reveal";


export const NavLinks = () => {
    return (
        <div className={styles.navLinks}>
            <Fade cascade={true} direction={"up"} duration={500} triggerOnce={true}>
                <ul className={styles.links}>
                    <li>
                        <button onClick={() => scrollTo("#main")}>Main</button>
                    </li>
                    <li>
                        <button onClick={() => scrollTo("#aboutMe")}>About Me</button>
                    </li>
                    <li>
                        <button onClick={() => scrollTo("#project")}>Project</button>
                    </li>
                    <li>
                        <button onClick={() => scrollTo("#skills")}>Skills</button>
                    </li>
                    <li>
                        <button onClick={() => scrollTo("#contacts")}>Contacts</button>
                    </li>
                </ul>
            </Fade>
        </div>
    )
}
