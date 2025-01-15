import React from 'react'
import {Outlet} from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Login from "../components/Login.jsx";

function LayoutPublic() {
    return (
        <>
            <Header/>
            <main className='main'>
                <Outlet/>
            </main>
            <Footer/>
            <Login/>
        </>
    )
}

export default LayoutPublic
