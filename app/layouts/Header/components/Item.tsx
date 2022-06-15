import React,{useState} from "react"
import styles from "../style.module.scss"
import {theme} from "setup/theme/theme"

export const Item=(props)=>{
const {Icon,active,id,onClick} = props

const [focus, setFocus]= useState(false)

    return(
        <div className={styles.header_btnBlog_item} onClick={()=>onClick(id)} onMouseEnter={()=>setFocus(true)} onMouseLeave={()=>setFocus(false)} >
                    <Icon color={focus || active? theme.colors.blue[0]: theme.colors.grey[0]}/>
                </div>
    )
}