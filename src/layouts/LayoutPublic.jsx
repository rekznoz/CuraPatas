import React from 'react'
import {Outlet} from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function LayoutPublic() {
    return (
        <>
            <Header/>
            <main className='main'>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}

export default LayoutPublic
