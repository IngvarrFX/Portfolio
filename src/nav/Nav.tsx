import React from "react";
import styles from "./Nav.module.css"
import scrollTo from "gatsby-plugin-smoothscroll"


export const Nav = () => {
    return (
        <div className={styles.nav}>
            <button onClick={() => scrollTo("#main")}>Main</button>
            <button onClick={() => scrollTo("#aboutMe")}>About Me</button>
            <button onClick={() => scrollTo("#project")}>Project</button>
            <button onClick={() => scrollTo("#skills")}>Skills</button>
            <button onClick={() => scrollTo("#contacts")}>Contacts</button>
        </div>
    )
}
