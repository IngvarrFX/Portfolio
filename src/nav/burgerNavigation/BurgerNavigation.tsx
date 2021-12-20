import React, {useState} from "react";
import {NavLinks} from "../navLinks/NavLinks";
import styles from "./BurgerNavigation.module.css"

import {CgMenuRound} from "react-icons/cg";
import {CgCloseO} from "react-icons/cg";


export const BurgerNavigation = () => {
    const [isShow, setIsShow] = useState(false)

    const burger = <CgMenuRound className={styles.burger} size={"50px"} color={"black"}
                                onClick={() => setIsShow(!isShow)}/>
    const close = <CgCloseO className={styles.burger} size={"45px"} color={"white"}
                            onClick={() => setIsShow(!isShow)}/>
    return (
        <nav>
            <div className={styles.burgerMenu}>
                {isShow ? close : burger}
                {isShow && <NavLinks callBack={(value) => setIsShow(value)}/>}
            </div>
        </nav>
    );
};


