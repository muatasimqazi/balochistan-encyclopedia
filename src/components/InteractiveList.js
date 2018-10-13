import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, {
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import FolderIcon from 'material-ui-icons/Folder';
import DeleteIcon from 'material-ui-icons/Delete';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import CardHeader from 'material-ui/Card/CardHeader';
import Divider from 'material-ui/Divider'
import { newArticles } from '../constants'

const styles = theme => ({
  root: {
    flexGrow: 1,
    // maxWidth: 752,
  },
  demo: {
    background: theme.palette.background.paper,
  },
  title: {
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
});

class InteractiveList extends React.Component {
  state = {
    dense: false,
    secondary: false,
  };

  render() {
    const { classes } = this.props;
    const { dense, secondary } = this.state;

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardContent>
                <Typography className={classes.title}>{this.props.label}</Typography>
                <List className={classes.root}> 
                    {newArticles.map(article => (
                      <React.Fragment key={article.title}>
                        <div>
                        <ListItem button style={{paddingTop: 5, paddingBottom: 5}}>
                        <ListItemText
                            primary={article.title}
                            secondary={article.content}//{secondary ? 'Secondary text' : null}
                        />
                          
                        </ListItem>
                        <Divider />
                        </div>
                        </React.Fragment>
                        
                    ))}
                   
                </List>
            </CardContent>
        </Card>
      </div>
    );
  }
}

InteractiveList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InteractiveList);