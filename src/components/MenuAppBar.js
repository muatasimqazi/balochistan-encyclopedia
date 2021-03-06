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
import { ArrowDropDown, ArrowDropUp } from 'material-ui-icons';
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
import Login from './Login';

import List from 'material-ui/List';
import { InstantSearch, SearchBox, Hits, Highlight} from 'react-instantsearch/dom';

  const Hit = ({hit}) =>

  <div className="hit">
      {  console.log(hit)}
      {hit
        ?
      <CardContent style={{paddingBottom: 0}}>
        <Typography type="title" gutterBottom component={Link} to={`/articles/${hit.url}`}>
          <Highlight attributeName="name" hit={hit} />
        </Typography>
        <Typography gutterBottom style={{color: '#888888'}}>
          <Highlight attributeName="description" hit={hit}/>
        </Typography>
          <Divider light style={{marginBottom: 1}}/>
      </CardContent>
        :
        ''
    }
  </div>
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

class MenuAppBar extends React.Component {
  constructor(props) {
    super(props)
    this.toggleAppBar = this.toggleAppBar.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

  this.state = {
    auth: true,
    open: false,
    openDialog: false,
    results: false,
    top: false,
    left: false,
    bottom: false,
    right: false,
    focused: false,
    isToggleOn: false,
    categories: {}
  };
  }

toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

handleClick = () => {
    this.setState({ open: !this.state.open });
  };

handleClose = () => {
    this.setState({ open: false });
  };

toggleAppBar = (focus) => () => {

  this.setState(prevState => ({
    isToggleOn: !prevState.isToggleOn
  }));
  };

handleFocus = (event) => {
    if(event.target.value) {
      this.setState({ results: true });
    } else {
      this.setState({ results: false });
    }
  };

  submitForm = (event) => {
    event.preventDefault()
  }

  resetForm = (event) => {
    this.setState({ results: false });
  }

  handleClickOpen = () => {
    this.setState({ openDialog: true });
  };

  handleDialogClose = () => {
    this.setState({ openDialog: false });
  };

  render() {
    const { classes } = this.props;
    const { categories } = this.props;
    const categoryId = Object.keys(categories)
    const { results } = this.state;
    const { open } = this.state;
    const focused = this.state.isToggleOn ? classes.whiteAppBar : classes.appBar;
    const logo = this.state.isToggleOn ? logo_black : logo_colored;
    const contrast = this.state.isToggleOn ? null : 'contrast'

    const sideList = (
      <div>
        <Divider />
        <List>
        <Toolbar>
            <Avatar
              src={logo}
              className={classNames(classes.avatar, classes.logo)}
              component={Link} to="/"
            />
            <Typography style={{"textDecoration": "none"}}type="title" color="inherit" className={classes.flex} component={Link} to="/">
              Balochistan Encyclopedia
            </Typography>
          </Toolbar>
        </List>
        <Divider />
        <List className={classes.listFull}>
        {categoryId.map((id, index) => {
            const category = categories[id]
            const menuitem = (category.name).toLowerCase();
            return (
              <div key={index} >
              <Button  style={{justifyContent: 'left'}} className={classes.lower} component={Link} to={`/category/${menuitem}`}>{category.name}</Button>
              <br/>
              </div>
                  )
              })
          }
        </List>
        <Divider />

      </div>
    );

    return (
      <div className={classes.root}>
        <InstantSearch
          appId="8FIWUM037Q"
          apiKey="f5b97b302865568db301066102ab64a4"
          indexName="encsearch">

        <AppBar className={focused}>
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
            <IconButton className={classes.menuButton} color={contrast} aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
              <MenuIcon />
            </IconButton>
            </Hidden>

            <Avatar
              src={logo}
              className={classNames(classes.avatar, classes.logo)}
              component={Link} to="/"
            />

            <Typography style={{"textDecoration": "none"}}type="title" color="inherit" className={classes.flex} component={Link} to="/">
              Balochistan Encyclopedia
            </Typography>
            <Hidden mdDown>

            <SearchBox
              onFocus={this.toggleAppBar(true)}
              onBlur={this.toggleAppBar(false)}
              onChange={this.handleFocus}
              className={classes.container}
              translations={{
                placeholder:'Search Balochistan Encyclopedia',
              }}
              onSubmit={this.submitForm}
              onReset={this.resetForm}
              />
            {this.props.authenticated  ? (

                <div style={{display: "inline-flex"}}>
                <Button color={contrast} component={Link} to="/contribute">Contribute </Button>
                <Manager>
                  <Target>
                  <div
                    aria-owns={this.state.open ? 'menu-list' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                    color={contrast}
                  >
                  <Button className={classes.menuButton} color={contrast} aria-label="Menu" style={{padding: 0}}>
                  {this.props.user.photoURL
                  ?
                  <Avatar alt={this.props.user.displayName} src={this.props.user.photoURL} className={classes.avatar} />
                  :
                  <AccountCircle />
                  }
                  {
                    this.state.open ? <ArrowDropUp onClick={this.handleClose}/> : <ArrowDropDown/>
                  }
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
                          <MenuItem onClick={this.handleClose} component={Link} to='/user/profile'>Profile</MenuItem>
                          <MenuItem onClick={this.handleClose} component={Link} to='/user/contributions'>Contributions</MenuItem>
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
              {/* component={Link} to="/login"> */}
              <Button color={contrast} onClick={this.handleClickOpen}> 
                Login
              </Button>
            </div>
            }
            </Hidden>
          </Toolbar>
        </AppBar>

        <AppBar position="static" className={classes.whiteAppBar} style={{marginTop: 64}}>
        <Toolbar className={classes.secondNav}>
          {categoryId.map((id, index) => {
            const category = categories[id]
            const menuitem = (category.name).toLowerCase();
            return (
              <Button  key={index} className={classes.lower} component={Link} to={`/category/${menuitem}`}>{category.name}</Button>
                  )
              })
          }

        </Toolbar>
      </AppBar>
      <Hidden mdDown>

        {results ?   <Card style={{
          width: 600,
          position: 'relative',
          left: '50%',
          marginLeft: '-252px',
          top: '-65px'
        }}>
        <Hits  hitComponent={Hit}/>
        </Card>
        : '' }
        </Hidden>
      </InstantSearch>

      <Login openDialog={this.state.openDialog} handleDialogClose={this.handleDialogClose} authenticated={this.props.authenticated}/>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);
