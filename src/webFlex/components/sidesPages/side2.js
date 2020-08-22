import React from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import "../css/slidestyle.css"

export default function Side2() {
    return (
<>
        <Grid className="main-grid2" container id="TEgrid1" 
        data-aos="fade-up"
        data-aos-offset="200"
        // data-aos-delay="50"
        data-aos-duration="1300"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
        >
        
        <Grid item xs={12} sm={6} className="grid1">
                <img className="slide-img" src={require('../images/image2.png')} alt="pic2"/>
        </Grid>    


        <Grid item xs={12} sm={6} className="grid2">
            <div>
                <h1>Talk to our experts about your requirements</h1>
                <p className="slide-para">
                Contact us and know more about how our experts can help your business grow.
                </p>
                <Button variant="outlined" color="primary">Enquire Now</Button>
            </div>
        </Grid> 
    </Grid>
  </>
  )
}
