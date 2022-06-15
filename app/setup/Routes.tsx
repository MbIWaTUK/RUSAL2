import { MainLayout } from "layouts/Main/MainLayout"
import { Documents } from "pages"
import React from "react"
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom"

export const Routes=()=>{
    return(
<BrowserRouter>
<MainLayout >
<Switch>
    <Route path="/" element={<Documents />}/>
</Switch>
</MainLayout>
</BrowserRouter>
    )
    
}