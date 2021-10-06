import React from 'react';
import styles from './Nav.module.css'


export const Nav = () => {
    return (
        <div className={styles.nav}>
            <a href="">Main</a>
            <a href="">Sills</a>
            <a href="">Project</a>
            <a href="">Contacts</a>
        </div>
    )
}