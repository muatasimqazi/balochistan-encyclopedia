import React, {Component} from 'react';
import MenuAppBar from './MenuAppBar';


  class Main extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleRequestClose = this.handleRequestClose.bind(this);
      this.handleTouchTap = this.handleTouchTap.bind(this);
  
      this.state = {
        open: false,
      };
    }
  
    handleRequestClose() {
      this.setState({
        open: false,
      });
    }
  
    handleTouchTap() {
      this.setState({
        open: true,
      });
    }
  
    render() {
      
  
      return (
            <div>
            <MenuAppBar />
            </div>

      );
    }
  }
  
  export default Main;