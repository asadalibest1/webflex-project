import React from 'react'
import Grid from '@material-ui/core/Grid';
import "../css/slidestyle.css"

export default function Side1() {
    return (
<>
<Grid className="main-grid1" id="main-grid1" container 
        data-aos="fade-up"
        data-aos-offset="200"
        // data-aos-delay="50"
        data-aos-duration="1300"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        // data-aos-anchor-placement="top-bottom"
        >        
 
        <Grid item xs={12} sm={6} className="grid1">
            <div>
                <h1 id="weAre">We are</h1>
                <p className="slide-para">
                A highly specialized Management team with over 20 combined years of experience in the Healthcare industry with proven ability
                to optimally combine digital technology, skilled resources and efficient business processes to implement creative as well 
                as proven market solutions to suit an ever-evolving market. Our forte has been to successfully tailor our solutions 
                to support your needs whether it is in the space of Consulting, Product Management or Service Delivery.
                </p>
            </div>
        </Grid>
        <Grid item xs={12} sm={6} className="grid2">
                    <img className="slide-img" src={require('../images/image1.gif')} alt="pic1"/>
        </Grid>
      
            </Grid>
  </>
  )
}
