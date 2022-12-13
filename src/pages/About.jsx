import React from 'react'

import Header from "../components/Header";
import ContentAbout from "../components/ContentAbout"
import Footer from "../components/Footer"

export default function About() {
    return(
        <div className="container-about">
            <Header />
            <ContentAbout />
            <Footer />
        </div>
    )
}

