import React, {useState} from "react"
import { Routes } from "./setup"
import  "./setup/normalize.scss"
import { ConfigProvider } from 'antd';


export const App=()=>{
    const [theme, setTheme] = useState();

    return(
        // <ConfigProvider>
            <Routes />
        // </ConfigProvider>
    )
}