import React from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import "../css/slidestyle.css"

export default function JoinUS() {
    return (
<>
<Grid className="main-grid3" container 
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
                    <img className="slide-img" src="https://media1.tenor.com/images/123e5015511a2580ccef40be6f1ee0cd/tenor.gif?itemid=17862734" alt="join us"/>
        </Grid>

      <Grid item xs={12} sm={6} className="grid2">
            <div style={{ margin: "0 auto" }}>
                <h1>Join us</h1>
                <div className="textfield"><TextField label="First Name" variant="outlined" /></div>
                <div className="textfield"><TextField label="Email" variant="outlined" /></div>
                <Button className="join" variant="contained" color="primary">
                        Join
                    </Button>

            </div>
        </Grid>

      
            </Grid>
  </>
  )
}
