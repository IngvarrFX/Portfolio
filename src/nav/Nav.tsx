import React from "react";
import {BurgerNavigation} from "./burgerNavigation/BurgerNavigation";
import {Navigation} from "./navigation/Navigation";
import styles from "./Nav.module.css"


export const Nav = () => {
    return (
        <nav className={styles.nav}>
            <BurgerNavigation/>
          {/*  <Navigation/>*/}
        </nav>
    );
};

