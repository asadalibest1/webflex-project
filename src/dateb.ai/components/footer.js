import React from 'react';
import './css/footer.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InfoIcon from '@material-ui/icons/Info';
import LanguageIcon from '@material-ui/icons/Language';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
//   sicialMedia:{
//       display: "block",
//       marginLeft: '50px',
//   }
 
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <>
<div className="upper-header" id="upper-header">
<Grid className="Grid" container>
        
             <Grid item xs={12} sm={4}>
            <IconButton className={classes.sicialMedia} color="inherit" aria-label="menu">
                <LanguageIcon fontSize="large" />
          </IconButton>
            <div className="projects">
            <p>Expense Tracker</p>
            <p>Covide19 Tracker</p>
            <p>Shoe Store App</p>
            <p>Red Queen Race App</p>
            </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <IconButton className={classes.sicialMedia} color="inherit" aria-label="menu">
                    <MailOutlineIcon fontSize="large" />
              </IconButton>
              <h3>Give us a call:</h3> 
              031(0)401230162
              <h3>Email us:</h3>
              asadalibest1@gmailcom
          </Grid>
            <Grid item xs={12} sm={4}>
            <IconButton className={classes.sicialMedia} color="inherit" aria-label="menu">
                <InfoIcon fontSize="large" />
            </IconButton>
              <div className="about">
                  We provide a much needed solution which solves crucial platform issues faced by fast growing merchants.
              </div>
          </Grid>

</Grid>
    </div>
    
    <div className="lower-footer">
    <div>
            <img src={require("./images/react.png")} alt="react logo"/>
        <h3>Web flex</h3>
       <div>
       <IconButton  className={classes.sicialMedia}color="inherit" aria-label="menu">
                <FacebookIcon fontSize="large" />
          </IconButton>
          <IconButton  className={classes.sicialMedia}color="inherit" aria-label="menu">
                <TwitterIcon fontSize="large" />
          </IconButton>
          <IconButton  className={classes.sicialMedia}color="inherit" aria-label="menu">
                <LinkedInIcon fontSize="large" />
          </IconButton>
       </div>
        <h5>Copyright © 2020 Web flex - All Rights Reserved</h5>
        <p>created by: Asad Ali</p>
    </div>
</div>
</>
);
}
