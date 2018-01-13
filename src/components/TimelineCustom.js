import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom'
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import PaperSheet from './PaperSheet';
import Tooltip from 'material-ui/Tooltip';

import { ZoomOut, ZoomIn } from 'material-ui-icons';


import Timeline from 'react-visjs-timeline';

// http://visjs.org/docs/timeline/#Configuration_Options
const options = {
  width: '100%',
  height: '200px',
  stack: true,
  showMajorLabels: true,
  showMinorLabels: true,
  showTooltips: true,
  showCurrentTime: true,
  zoomMin: 200,
  autoResize: true,
  type: 'point',
  max: new Date('2025'),
  min: new Date().setYear(-1000),
  start: new Date('1990'),
//   editable: true,
  format: {
    majorLabels: {
        weekday:    'MMMM YYYY',
        day:        'MMMM YYYY',
        week:       'MMMM YYYY',
        month:      'YY',
        year:       ''
      }
  },
}

const items = [
    {
        start: new Date(1970, 1, 9),
        // end: new Date(2018, 1, 10),  // end is optional
        content: 'Balochistan Becomes a Province',
    },
    {
        start: new Date(2013, 6, 7),
        content: "Dr. Malik Baloch becomes Chief Minister"
    },
    {
        start: new Date(2015, 12, 23),
        content: "Dr. Malik Baloch resigns as Chief Minister"
    },
    {
        start: new Date(2018, 1, 9),
        end: new Date(2018, 1, 10),  // end is optional
        content: 'New Chief Minister',
    },
    {
        start: new Date(2017, 12, 8),
        end: new Date(2017, 12, 9),  // end is optional
        content: 'Book Published',
    },
    {
        start: new Date(2017, 12, 7),
        end: new Date(2017, 1, 8),  // end is optional
        content: 'Watched',
    },
    {
        start: new Date(2015, 1, 7),
        end: new Date(2015, 1, 8),  // end is optional
        content: 'New Chief Minister',
    }
]


const styles = theme => ({
    root: {
      flexGrow: 1,
      margin: theme.spacing.unit * 3,
      padding: theme.spacing.unit * 5,
    },
    demo: {
      height: 240,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      height: '100%',
    },
    control: {
      padding: theme.spacing.unit * 2,
    },
  });

class TimelineCustom extends Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
        this.state = {
            selectedIds: [],
            event: {
                title: 'Watch',
                caption: 'May 22, 2012',
                text: 'Books published today'
            }
        }
    }
    clickHandler() {
        console.log()
        const event = {
            title: "Books",
            capton: "May 3, 2010",
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        }
        this.setState({
            event: event,
        })
    }

    zoomIn() {
    }

    render() {
        const { classes } = this.props;
        const { event } = this.state;
        return (
            <PaperSheet
              content={
                // <div style={{ padding: 20, minHeight: 200}}>
                <div>
                    <div className={classes.root}>
                    <Grid container spacing={40} alignContent="center">
                        <Grid>
                        <Typography type="headline" gutterBottom>
                           {event.title}
                           <ZoomOut onClick={this.zoomIn}/>
                            < ZoomIn />
                        </Typography>
                        <Typography type="caption" gutterBottom>
                            {event.caption}
                        </Typography>
                        <Typography gutterBottom>
                            {event.text}
                        </Typography>
                        </Grid>
                    </Grid>
                    </div>
                  <Timeline
                    options={options}
                    items={items}
                    clickHandler={this.clickHandler}
                    onMouseOver={() => alert()}
        />
                </div>
              }
            />
          );
    }
}

TimelineCustom.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(TimelineCustom);
