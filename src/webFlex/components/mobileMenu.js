import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import "./css/mobileMenu.css";

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} className="Dialog"
    PaperProps={{
        style: {
            backgroundColor: 'transparent',
            paddingRight: "35px",
            boxShadow: 'none',
          },
}} aria-labelledby="simple-dialog-title" open={open}>
      
      <ul className="mobileMenu">
            <li onClick={handleClose}>Home</li>
            <li onClick={handleClose}>About</li>
            <li onClick={handleClose}>Talk to Experts</li>


            <select name="serve" className="services">

            <option value="Web Develoment" autofocus>Web Develoment</option>
            <option value="Graphic Designing">Graphic Designing</option>
           
            </select>
            <li onClick={handleClose}>Contact</li>
      </ul>

    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function NavbarList() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };


  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
       <IconButton
            edge="start"
            // id="menuButton"
            aria-label="open drawer"
            onClick={handleClickOpen}
          >
            <MenuIcon style={{color: "rgb(194, 11, 194)"}}/>
          </IconButton>
          
      <SimpleDialog  open={open} onClose={handleClose} />
    </div>
  );
}