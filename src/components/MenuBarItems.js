import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Button from 'material-ui/Button';


import {Link } from 'react-router-dom';
import ArrowDropDown from 'material-ui-icons/ArrowDropDown';
import classNames from 'classnames';
import { MenuItem, MenuList } from 'material-ui/Menu';
import Grow from 'material-ui/transitions/Grow';
import Paper from 'material-ui/Paper';
import { Manager, Target, Popper } from 'react-popper';
import ClickAwayListener from 'material-ui/utils/ClickAwayListener';

import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import Hidden from 'material-ui/Hidden';

import  Card, { CardContent} from 'material-ui/Card'
import Avatar from 'material-ui/Avatar';
import logo_colored from '../img/logo_colored.svg';
import logo_black from '../img/logo_black.svg';

import List from 'material-ui/List';
import { InstantSearch, SearchBox, Hits, Highlight} from 'react-instantsearch/dom';

   
const styles =  theme => ({
    root: {
      width: '100%',
    },
    popperClose: {
      pointerEvents: 'none',
    },
    appBar: {
      background: '#227AAC'
    },
    list: {
      width: 250,
    },
    whiteAppBar: {
      background: 'white',
      color: 'black'
    },
    listFull: {
      width: 'auto',
      marginLeft: 30,
    },
    container: {
      flexGrow: 1,
      position: 'relative',
      height: 200,
    },
    drawerPaper: {
      width: 250,
      [theme.breakpoints.up('md')]: {
        width: 250,
        position: 'relative',
        height: '100%',
      },
    },
    
    suggestionsContainerOpen: {
      position: 'absolute',
      marginTop: '0px',
      marginBottom: theme.spacing.unit * 3,
      left: 0,
      right: 0,
    },
    suggestion: {
      display: 'block',
    },
    suggestionsList: {
      margin: 0,
      padding: 0,
      listStyleType: 'none',
    },
    input: {
      width: '100%',
    },
    card: {
      width: 600,
      margin: '0 auto',
      right: -40
    },
  
    title: {
      marginBottom: 16,
      fontSize: 14,
      // color: theme.palette.text.secondary,
    },
    pos: {
      marginBottom: 12,
      // color: theme.palette.text.secondary,
    },
    avatar: {
      margin: 10,
    },
    logo: {
        border: '1px solid white',
        borderRadius: '20%'
    },
    bigAvatar: {
      width: 60,
      height: 60,
     
    },
  
    lower: {
      textTransform: 'capitalize',
    }
  });

function MenuBarItems(props) {
    const contrast =props.isToggleOn ? null : 'contrast'
    const { classes } = props; 
    const open  = props.open
    ;
    return (
        <div style={{display: "inline-flex"}}>
        <Button color={contrast} component={Link} to="/contribute">Contribute </Button>
        <Manager>
          <Target>
          <div
            aria-owns={props.open ? 'menu-list' : null}
            aria-haspopup="true"
            onClick={props.handleClick}
            color={contrast}
          >
          <Button className={styles.menuButton} color={contrast} aria-label="Menu" style={{padding: 0}}>   
          {props.user.photoURL
          ?         
          <Avatar alt="Remy Sharp" src={""} className={classes.avatar} />
          :
          <AccountCircle />
          }
            <ArrowDropDown/>
            </Button>
          </div>
        </Target>
        <Popper
          placement="bottom-start"
          eventsEnabled={true}
         
        >
          <ClickAwayListener onClickAway={props.handleClose}>
            <Grow in={true} id="menu-list" style={{ transformOrigin: '0 0 0' }}>
              <Paper>
                <MenuList role="menu">
                  <MenuItem onClick={props.handleClose} component={Link} to='/profile'>Profile</MenuItem>
                  <MenuItem onClick={props.handleClose} component={Link} to='/user/contributions'>Contributions</MenuItem>
                  <MenuItem onClick={props.handleClose} component={Link} to='/logout'>Logout</MenuItem>
                </MenuList>
              </Paper>
            </Grow>
          </ClickAwayListener>
        </Popper>
      </Manager>
</div>
    )
}
export default MenuBarItems;