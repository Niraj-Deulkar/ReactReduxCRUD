import React from "react";
import PropTypes from 'prop-types';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import {CssBaseline} from '@material-ui/core';
import {useScrollTrigger} from '@material-ui/core';
import TextField from "@material-ui/core/TextField";
import {Slide} from '@material-ui/core';
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { Dialog } from "@material-ui/core";
import { DialogActions } from "@material-ui/core";
import { DialogTitle } from "@material-ui/core";
import { DialogContent } from "@material-ui/core";
import { DialogContentText } from "@material-ui/core";
import {useTheme} from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';

import {Brightness7} from '@material-ui/icons';
import {Brightness4} from '@material-ui/icons';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });



function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  
  window: PropTypes.func,
};



export default function NavBar(props) {
  const [open, setOpen] = React.useState(true);
  const [userName, setUserName] = React.useState([]);
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  let history = useHistory();
   
  
    const handleClose = () => {
      debugger;
      setOpen(false);
    };
    console.log(userName);
  return (
      
    <React.Fragment>
        
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent>
          <DialogContentText>
              To subscribe to this website, please enter your name here. We
              will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Your Good Name"
            type="email"
            fullWidth
            variant="standard"
            value={userName} 
            onInput={e => setUserName(e.target.value)}
          />
          </DialogContent>
          <DialogActions>
       
              {userName.length>0 ?<Button onClick={handleClose}>Subscribe</Button>:''}
          </DialogActions>
          </Dialog>
          <Toolbar   style={{ flex: 100 }} >
                  <h2>Hello {userName}</h2> <br/>
                  <Typography style={{ flex: 1 }}>
                      <Button variant="text"   size="medium"  style={{ color: '#FFFFFF'}}  onClick={() => history.push("/addUser")}>Add User</Button>
                  </Typography>
                      {theme.palette.mode} mode
                      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                         {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                      </IconButton>
          </Toolbar>
          
        </AppBar>
      </HideOnScroll>
    
      
    </React.Fragment>
  );
}