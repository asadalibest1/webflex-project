import React from 'react'
import Appbar from './components/appbar'
import Header from './components/header'
import Side1 from './components/sidesPages/side1'
import Side2 from './components/sidesPages/side2'
import JoinUS from './components/sidesPages/joinUS'
import OurServe from './components/sidesPages/ourServe'
import Footer from './components/footer'

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App1() {
    React.useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div>
            <Appbar />
            <Header />
            <Side1 />
            <Side2 />
            <OurServe />
            <JoinUS />
            <Footer />
        </div>
    )
}
