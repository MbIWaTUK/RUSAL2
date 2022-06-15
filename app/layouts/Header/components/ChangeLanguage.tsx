import React,{useState} from "react"
import {Internet,Arrow} from "assets/svg"
import styles from "./style.module.scss"

export const ChangeLanguage=()=>{
    const [active, setActive] = useState(false)
    const[language, setLanguage] = useState("RU")

    return(
        <>
        {
                active&&(<div onClick={()=>setActive(false)} className={styles.base} ></div>)
            }

        <div onClick={()=>setActive(!active)} className={styles.container}>
            
            <div className={styles.container_content} >
                <Internet />

                <span className={styles.container_content_language}>{language}</span>

                <Arrow />
                
            </div>

            <div className={styles.container_selectBlock} style={{display:`${active? "flex": "none"}` }}>
                <span className={styles.container_selectBlock_text} onClick={()=>setLanguage("EN")}>English (EN)</span>

                <span className={styles.container_selectBlock_text} style={{ marginTop:10}} onClick={()=>setLanguage("RU")}>Русский (RU)</span>
            </div>
        </div>
        </>
    )
}