import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className='navbar navbar-expand-lg fixed-top bg-primary'>
                    <div className='container'>
                        <div className='navbar-translate'>
                            <a className='navbar-brand' href='/'>
                                <img src={logo} width='30' height='30' className='d-inline-block align-top' alt=''/>
                                <b className='ml-3'>Balochistan Encyclopedia</b>
                            </a>
                            <button className='navbar-toggler navbar-toggler-right' type='button' data-toggle='collapse' data-target='#example-navbar-primary' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-bar bar1'></span>
                        <span className='navbar-toggler-bar bar2'></span>
                        <span className='navbar-toggler-bar bar3'></span>
                            </button>
                        </div>
                        <div className='collapse navbar-collapse justify-content-end' id='example-navbar-primary'>
                            
                            <ul className='navbar-nav'>

                            <li className="nav-item">
                            <form className="form-inline my-2">
                                <input className="form-control mr-sm-5" type="search" placeholder="Search" aria-label="Search" />
                            </form>
                            </li>
                                {this.props.authenticated 
                                ? ([   
                                <li key={1} className='nav-item'>
                                <Link className='nav-link' to='/contribute'>
                                <i className="fa fa-pencil-square" aria-hidden="true"></i>
                                   <p>Contribute</p>
                            </Link>
                        </li>,
                        <li key={3} className='nav-item dropdown'>
                            <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-expanded="false" to='/logout'>
                            
                            {this.props.user.photoURL
                            ?                             
                            <img className="rounded-circle mr-2" src={this.props.user.photoURL} width="35"/>
                            : 
                            <i className="fa fa-user-circle fa-lg mr-2" aria-hidden="true"></i>                          
                            
                            }

                        </Link>
                        <div className="dropdown-menu dropdown-menu-right mr-auto ml-auto" aria-labelledby="navbarDropdownMenuLink">
                            {this.props.user.displayName
                            ?
                            <div>
                                <div className="dropdown-header text-center">{this.props.user.displayName}</div>
                                <div className="dropdown-divider"></div>
                            </div>
                            
                            :
                            ''
                            }

                            <Link className='dropdown-item' to='/contributions'>
                            <i className="fa fa-pencil-square fa-lg" aria-hidden="true"></i>
                                <span className="ml-3">Contributions</span>
                            </Link>

                            <Link className='dropdown-item' to='/settings'>
                            <i className="fa fa-cog fa-lg" aria-hidden="true"></i>
                                <span className="ml-3">Settings</span>
                                
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link className='dropdown-item' to='/logout'>
                            <i className="fa fa-sign-out fa-lg" aria-hidden="true"></i>
                                <span className="ml-3">Logout</span>
                            </Link>
                           
                        </div>
                        </li>

                            ])
                                : (   
                            <li className='nav-item'>
                            <Link className='nav-link' to='/login'>
                                    <i className='fa fa-sign-in'></i>
                                <p>Login</p>
                        </Link>
                        </li>
                             
                                )
                            }
                            </ul>
                            
                        </div>
                    </div>
                </nav>
                <nav className="navbar navbar-expand-lg fixed-top text-black mt-5 border bg-white pt-5  pb-4 second-nav d-none d-lg-block d-md-block d-sm-none d-xs-none">
                    <div className='container'>
                        <ul className='nav text-uppercase'>
                        <li className='nav-item'>
                            <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className='nav-item dropdown text-black'>
                                <a className='nav-link dropdown-toggle' data-toggle='dropdown' href='' aria-haspopup='true' aria-expanded='false'>History</a>
                                <div className='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
                                    <a className='dropdown-item' href=''>Action</a>
                                    <a className='dropdown-item' href=''>Another action</a>
                                    <a className='dropdown-item' href=''>Something else here</a>
                                    <div className='dropdown-divider'></div>
                                    <a className='dropdown-item' href=''>Separated link</a>
                                </div>
                            </li>
                            <li className='nav-item'>
                            <Link className="nav-link" to="/articles">Articles</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
    <br/><br/><br/><br/><br/>
        </div>
        );
    }
}

export default Header;