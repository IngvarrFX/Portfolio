import React from "react";
import styles from "./Header.module.css"
import {BurgerNavigation} from "../nav/BurgerNavigation";
import {Navigation} from "../nav/Navigation";


export const Header = () => {
    return (
        <div className={styles.header}>
            <BurgerNavigation/>
            <Navigation/>
        </div>
    )
}
