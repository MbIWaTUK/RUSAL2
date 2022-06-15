import React from "react"
import styles from "./style.module.scss"
import { House,Document,Invoice,Location,Clipboard,Chat,Help } from "assets/svg/"

export const MenuLayout=()=>{
    return(
        <div className={styles.menu}>
            <div className={styles.menu_item}>
                <House />

                <span className={styles.menu_item_text}>Main Page</span>
            </div>

            <div className={styles.menu_item}>
                <Document />

                <span className={styles.menu_item_text}>Shipping documents</span>
            </div>

            <div className={styles.menu_item}>
                <Invoice />

                <span className={styles.menu_item_text}>Payment documents</span>
            </div>

            <div className={styles.menu_item}>
                <Location />

                <span className={styles.menu_item_text}>Tracking</span>
            </div>

            <div className={styles.menu_item}>
                <Clipboard />

                <span className={styles.menu_item_text}>ALLOW Digital Passport</span>
            </div>

            <div className={styles.menu_item}>
                <Chat />

                <span className={styles.menu_item_text}>Feedback</span>
            </div>

            <div className={styles.menu_item}>
                <Help />

                <span className={styles.menu_item_text}>Instructions</span>
            </div>
        </div>
    )
}