import React from 'react'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Expirience from './components/expirience/Expirience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
const App = () => {
    return (
        <>
            <Header />
            <Navbar />
            <About />
            <Expirience />
            <Services />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    )
}

export default App