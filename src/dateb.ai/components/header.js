import React from 'react'
import Button from '@material-ui/core/Button';
import './css/header.css';

export default function Header() {
    return (
        <div className="header-div">
            <div className="inner-div"
                      data-aos="fade-up"
                      data-aos-offset="200"
                      // data-aos-delay="50"
                      data-aos-duration="2000"
                      data-aos-easing="ease-in-out-quart"
                      data-aos-mirror="true"
                      data-aos-once="false"
                      // data-aos-anchor-placement="top-bottom"
            >
            <h1>Welcome to Web flex</h1>
            <p>Collections of color components for material-ui. No dependencies, small, highly<br /> customizable and theming support !</p>

            <Button variant="outlined" color="primary">
                    Get Started
            </Button>
            </div>
        </div>
    )
}
