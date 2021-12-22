import React, {useState} from "react";
import {NavLinks} from "../navLinks/NavLinks";
import styles from "./BurgerNavigation.module.css"
import {GiHamburgerMenu} from "react-icons/gi";
import {CgClose} from "react-icons/cg";


export const BurgerNavigation = () => {
    const [isShow, setIsShow] = useState(false)
    const burger = <GiHamburgerMenu className={styles.burger} size={"40px"} color={"black"}
                                onClick={() => setIsShow(!isShow)}/>
    const close = <CgClose className={styles.burger} size={"45px"} color={"white"}
                            onClick={() => setIsShow(!isShow)}/>

    return (
        <nav>
            <div className={styles.burgerMenu}>
                <div className={styles.burgerBlock}>
                    {isShow ? close : burger}
                </div>
                {isShow && <NavLinks setIsShow={(value) => setIsShow(value)}/>}
            </div>
        </nav>
    );
};


