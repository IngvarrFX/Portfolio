import React from "react";
import {NavLinks} from "../navLinks/NavLinks";
import classes from "../Nav.module.css"

export const Navigation = () => {
    return (
        <nav className={classes.navigation}>
            <NavLinks callBack={() => {
            }}/>
        </nav>
    );
};

