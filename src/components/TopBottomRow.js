import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom'
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import PaperSheet from './PaperSheet';
import { FaBook, FaHistory, FaTree, FaApple, FaBank } from 'react-icons/lib/fa';
import {IoIosClock, IoEarth, IoPaintbrush, IoIosBook, IoIosPeople, IoFlag}  from 'react-icons/lib/io';


const horizontalIcons = [
  {
    icon: IoEarth,
    title: "Geography"
  },
  {
    icon: IoIosClock,
    title: "History"
  },
  {
    icon: IoPaintbrush,
    title: "Arts"
  },
  {
    icon: IoIosBook,
    title: "Literature"
  },
  {
    icon: IoIosPeople,
    title: "Culture"
  },
  {
    icon: IoFlag,
    title: "Politics"
  },

]

function TopBottomRow(props) {
        return (
          <PaperSheet
            content={
              <div style={{ padding: 20 }}>
                <Grid container spacing={24}>
                  {
                    horizontalIcons.map(item=> (
                      <Grid item xs={4} sm={2} style={{textAlign: 'center'}} key={item.title}>
                        <Link to={`category/${item.title.toLowerCase()}`}><item.icon size={75} color='#3F88C5'/></Link>
                        <Typography type="headline" component="h3">
                        <Button component={Link} to={`category/${item.title.toLowerCase()}`}>
                          {item.title}
                        </Button>
                        </Typography>
                      </Grid>
                    ))
                  }
                </Grid>
              </div>
            }
          />
        );

}

export default TopBottomRow;