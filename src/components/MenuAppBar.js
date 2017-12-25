import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Switch from 'material-ui/Switch';
import { FormControlLabel, FormGroup } from 'material-ui/Form';

import Button from 'material-ui/Button';
import Fade from 'material-ui/transitions/Fade';

import {Link } from 'react-router-dom';
import Login from './Login'
import Logout from './Logout'
import Contribute from './Contribute'
import ArrowDropDown from 'material-ui-icons/ArrowDropDown';

import classNames from 'classnames';
import Menu, { MenuItem, MenuList } from 'material-ui/Menu';
import Grow from 'material-ui/transitions/Grow';
import Paper from 'material-ui/Paper';
import { Manager, Target, Popper } from 'react-popper';
import ClickAwayListener from 'material-ui/utils/ClickAwayListener';

import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import Hidden from 'material-ui/Hidden';
import Grid from 'material-ui/Grid';
import IntegrationAutosuggest from './IntegrationAutosuggest'
import  Card, { CardActions, CardContent} from 'material-ui/Card'
import Avatar from 'material-ui/Avatar';
import logo from '../logo.svg';




import ReactDOM from 'react-dom';
import { InstantSearch, SearchBox, Hits, Highlight, 
  Stats, SortBy, Pagination, RefinementList } from 'react-instantsearch/dom';

  import ListSubheader from 'material-ui/List/ListSubheader';
  import List, { ListItem, ListItemText } from 'material-ui/List';



  const Hit = ({hit}) => 
  <div className="hit">
  {hit 
  ?

  <Card style={{
    width: 600,
    margin: '0 auto',
    right: '-40px',
    position: 'relative'
  }}>
          <CardContent>
           <Typography type="title" gutterBottom>
              <Highlight attributeName="name" hit={hit}/>
          </Typography>
          <Typography gutterBottom style={{color: '#888888'}}>
          <Highlight attributeName="description" hit={hit}/>
          </Typography>
              <Divider light style={{marginBottom: 10}}/>
                </CardContent>
        </Card>
      :
      ''
}

  </div>
const styles =  theme => ({
  root: {
    width: '100%',
  },
  flex: {

  },
  popperClose: {
    pointerEvents: 'none',
  },
  button: {
  
  },
  input: {
    display: 'none',
  },
  appBar: {
    background: '#f96332'
  },
  list: {
    width: 250,
  },
  listFull: {
    width: 'auto',
  },
  container: {
    flexGrow: 1,
    position: 'relative',
    height: 200,
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
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
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
  secondNav: {
    width: 800,
  },
  lower: {
    textTransform: 'capitalize',
  }
});

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    open: false,
    results: false,
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };


  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };



  handleClick = () => {
    this.setState({ open: true });
  };


  handleClose = () => {
    this.setState({ open: false });
  };

  handleFocus = (event) => {
    if(event.target.value) {
      this.setState({ results: true });
    } else {
      this.setState({ results: false });
    }
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const { results } = this.state;
    const { open } = this.state;

    const sideList = (
      <div className={classes.list}>
        <List>aaaa</List>
        <Divider />
        <List>ss</List>
      </div>
    );

    return (
      <div className={classes.root}>  
        <InstantSearch
          appId="8FIWUM037Q"
          apiKey="f5b97b302865568db301066102ab64a4"
          indexName="encsearch">
        <AppBar position="static" className={classes.appBar}>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
          <Toolbar>
            <Hidden mdUp>
            <IconButton className={classes.menuButton} color="contrast" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
              <MenuIcon />
            </IconButton>
            </Hidden>

            <Avatar
              src={logo}
              className={classNames(classes.avatar, classes.logo)}
            />

            <Typography style={{"textDecoration": "none"}}type="title" color="inherit" className={classes.flex} component={Link} to="/">
              Balochistan Encyclopedia
            </Typography>
            <Hidden mdDown>
            <SearchBox onChange={this.handleFocus}className={classes.container} translations={{placeholder:'Search for aticles'}}/>
            {this.props.authenticated  ? (
                
                <div style={{display: "inline-flex"}}>
                <Button color="contrast" component={Link} to="/contribute">Contribute </Button>
                <Manager>
                  <Target>
                  <div
                    aria-owns={this.state.open ? 'menu-list' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                    color="contrast"
                  >
                  <Button className={classes.menuButton} color="contrast" aria-label="Menu" style={{padding: 0}}>   
                  {this.props.user.photoURL
                  ?         
                  <Avatar alt="Remy Sharp" src={this.props.user.photoURL} className={classes.avatar} />
                  :
                  <AccountCircle />
                  }
                    <ArrowDropDown/>
                    </Button>
                  </div>
                </Target>
                <Popper
                  placement="bottom-start"
                  eventsEnabled={open}
                  className={classNames({ [classes.popperClose]: !open })}
                >
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <Grow in={open} id="menu-list" style={{ transformOrigin: '0 0 0' }}>
                      <Paper>
                        <MenuList role="menu">
                          <MenuItem onClick={this.handleClose} component={Link} to='/profile'>Profile</MenuItem>
                          <MenuItem onClick={this.handleClose} component={Link} to='/contributions'>Contributions</MenuItem>
                          <MenuItem onClick={this.handleClose} component={Link} to='/logout'>Logout</MenuItem>
                          
                        </MenuList>
                      </Paper>
                    </Grow>
                  </ClickAwayListener>
                </Popper>
              </Manager>
        </div>
            ) :
            <div>
              <Button color="contrast" component={Link} to="/login">
                Login
              </Button>     

              <Button color="contrast" component={Link} to="/login">
                Signup
              </Button>             
            </div>
            }
            </Hidden>
          </Toolbar>
        </AppBar>
        <AppBar position="static" color="default">
        <Toolbar className={classes.secondNav}>
        <Button className={classes.lower} component={Link} to="/login">Signup</Button>
        <Button className={classes.lower} component={Link} to="/login">Signup</Button>
        <Button className={classes.lower} component={Link} to="/login">Signup</Button>
        <Button className={classes.lower} component={Link} to="/login">Signup</Button>
        </Toolbar>
      </AppBar>

        <Hidden mdDown>
        {results ? <Hits  hitComponent={Hit}/> : '' }
        </Hidden>
      </InstantSearch>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);