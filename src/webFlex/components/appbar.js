import React from 'react';
import './css/appbar.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {isMobile} from 'react-device-detect';
import MobileMenu from './mobileMenu'

const useStyles = makeStyles((theme) => ({
 
  menuButton: {
    display: "none",
  },
  
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  React.useEffect(() => {
    window.onscroll = () => {
      if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
          document.getElementsByClassName('appbar')[0].style.backgroundColor ="purple";
          document.getElementsByClassName('title')[0].style.color = "white";
          document.getElementsByClassName('menu')[0].style.color = "white";
              if (isMobile){

                document.getElementsByClassName('title')[0].style.fontSize = "5vw";
              }
                    
              else
                    document.getElementsByClassName('title')[0].style.fontSize = "2.6vw";
          
        }
        else{
          document.getElementsByClassName('appbar')[0].style.backgroundColor ="transparent";
          document.getElementsByClassName('title')[0].style.color = "purple";
          document.getElementsByClassName('menu')[0].style.color = "purple";
          if (isMobile){
                document.getElementsByClassName('title')[0].style.fontSize = "6vw";
          }
          
          else
                document.getElementsByClassName('title')[0].style.fontSize = "3.2vw";  
        }
  
      } 

  }, []);
      return (
    <div>
      <AppBar position="fixed"  style={{ backgroundColor: "transparent" }} className="appbar">
        <Toolbar>
          <table>
          <tbody>
            <tr>
              <td className="td1">
          <div id="menuButton" className={classes.menuButton}>
            <MobileMenu />
          </div>  
                </td>
                {/* <IconButton edge="start" id="menuButton" className={classes.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton> */}
          <td className="td2">
          <div className="title"
          // data-aos="zoom-in"
          // data-aos-offset="200"
         // data-aos-delay="50"
          // data-aos-duration="1000"
          // data-aos-easing="ease-in-out-quart"
          // data-aos-mirror="true"
          // data-aos-once="false"
          // data-aos-anchor-placement="top-bottom"
        >
            Web f lex
     </div>
         </td>
          
          <td className="td3">
          <div className="menu">
          <Button color="inherit">About</Button>
          <Button color="inherit">Portfolio</Button>
          <Button color="inherit">Contact</Button>
          </div>
            </td>
          </tr>
          </tbody>
          </table>
        </Toolbar>
      </AppBar>
    </div>
  );
}
