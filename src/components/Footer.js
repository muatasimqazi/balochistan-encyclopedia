import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            year: new Date().getFullYear()
        }
    }
    render() {
        return (
            <footer className="footer" data-background-color="black">
            <br/><br/><br/><br/><br/>
                <div className="fluid-container ml-4 mr-4">
                    <nav>
                        <ul>
                            <li>
                                <a href="#">Balochistan</a>
                            </li>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>

                        </ul>
                    </nav>
                    <div className="copyright">
                        &copy; {this.state.year}, Designed and Coded by
                        <a href="#" target="_blank"> Q. Creatives</a>.
                    </div>
                </div>
            </footer>

        );
    }
}

export default Footer;