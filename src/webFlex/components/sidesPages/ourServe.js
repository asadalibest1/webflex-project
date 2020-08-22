import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import "../css/slidestyle.css"


export default function OurServe() {

  return (
<>
  <Grid className="main-grid4" container 
        data-aos="fade-up"
        data-aos-offset="200"
        // data-aos-delay="50"
        data-aos-duration="1300"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        // data-aos-anchor-placement="top-bottom"
        >        
 
                <Grid item xs={12} sm={12}>
              <h2 style={{marginBottom:"50px" }}>Our Services</h2>
                </Grid>
        <Grid item xs={12} sm={6} className="grid1 " id="webDevelopment"
                data-aos="slide-up"
                data-aos-offset="200"
                data-aos-delay="1000"
                data-aos-duration="900"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                // data-aos-anchor-placement="top-bottom"
        
        >
            <Paper className="paper" elevation={3} square>
        <img className="skill" src="https://sitegalleria.com/wp-content/uploads/2019/08/Web-Development-Company-Bangalore.jpeg" alt="web development" />
        <div style={{ marginBottom: "14px"}}>
          <h2>Web Development <label> best </label></h2>
          
          <p>Price:<b> $160</b></p>
          <p>
            Tell us what you want to develop and we will bring it to fruition. From e-commerce to web development services, 
            we do everything in between.  You will definitely 
            love the website we will develop for you. Hire us for
            your next website development project and get your web developed within your time and budget.
          </p>
          </div>
            </Paper> 
            </Grid>

          <Grid item xs={12} sm={6} className="grid2" id="graphicDesign"
                  data-aos="slide-up"
                  data-aos-offset="200"
                  data-aos-delay="1000"
                  data-aos-duration="900"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="false"
                  // data-aos-anchor-placement="top-bottom"          
          >
            <Paper className="paper" elevation={3} square>
        <img className="skill" src="https://www.digiquestacademy.edu.in/wp-content/uploads/2019/10/Graphic-Designing1.jpg" alt="graphic designing" />
        <div>
          <h2>Graphic Desinging <label> best </label></h2>
          
          <p>Price:<b> $50</b></p>
          <p>
          The Graphic is the face of your Brand. We have the most talented and experienced 
          Graphic designers, who approach every Graphic design project with an inspired dedication with a 
          complete thought process. Being a focus based quality branding agency in Pakistan, we have been 
          designing Graphics and brand identities for many reputed companies and that’s something we are good at.
          </p>
          </div>
            </Paper> 
          </Grid>

            </Grid>
  </>

  
  );
}
