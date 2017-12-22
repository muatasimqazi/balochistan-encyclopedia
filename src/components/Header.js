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
                                {this.props.authenticated 
                                ? ([   
                                <li className='nav-item'>
                                <Link className='nav-link' to='/login'>
                                <i className="fa fa-pencil-square" aria-hidden="true"></i>
                                   <p>Contribute</p>
                            </Link>
                            </li>,
                            <li className='nav-item'>
                            <Link className='nav-link' to='/logout'>
                            <i className="fa fa-sign-out" aria-hidden="true"></i>
                                <p>Logout</p>
                        </Link>
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

                <nav className='navbar navbar-expand-lg fixed-top text-black mt-5 bg-white p-4 second-nav'>
		<div className='container'>
			<ul className='nav text-uppercase'>
				<li className='nav-item dropdown text-black'>
					<a className='nav-link dropdown-toggle' data-toggle='dropdown' href='#' aria-haspopup='true' aria-expanded='false'>History</a>
					<div className='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
						<a className='dropdown-item' href='#'>Action</a>
						<a className='dropdown-item' href='#'>Another action</a>
						<a className='dropdown-item' href='#'>Something else here</a>
						<div className='dropdown-divider'></div>
						<a className='dropdown-item' href='#'>Separated link</a>
					</div>
				</li>
				<li className='nav-item dropdown'>
					<a className='nav-link dropdown-toggle' data-toggle='dropdown' href='#' role='button' aria-haspopup='true' aria-expanded='false'>Archeology</a>
					<div className='dropdown-menu'>
						<a className='dropdown-item' href='#'>Action</a>
						<a className='dropdown-item' href='#'>Another action</a>
						<a className='dropdown-item' href='#'>Something else here</a>
						<div className='dropdown-divider'></div>
						<a className='dropdown-item' href='#'>Separated link</a>
					</div>
				</li>
				<li className='nav-item dropdown'>
					<a className='nav-link dropdown-toggle' data-toggle='dropdown' href='#' role='button' aria-haspopup='true' aria-expanded='false'>People</a>
					<div className='dropdown-menu'>
						<a className='dropdown-item' href='#'>Action</a>
						<a className='dropdown-item' href='#'>Another action</a>
						<a className='dropdown-item' href='#'>Something else here</a>
						<div className='dropdown-divider'></div>
						<a className='dropdown-item' href='#'>Separated link</a>
					</div>
				</li>
				<li className='nav-item dropdown'>
					<a className='nav-link dropdown-toggle' data-toggle='dropdown' href='#' role='button' aria-haspopup='true' aria-expanded='false'>Culture</a>
					<div className='dropdown-menu'>
						<a className='dropdown-item' href='#'>Action</a>
						<a className='dropdown-item' href='#'>Another action</a>
						<a className='dropdown-item' href='#'>Something else here</a>
						<div className='dropdown-divider'></div>
						<a className='dropdown-item' href='#'>Separated link</a>
					</div>
				</li>
			</ul>
		</div>
	</nav>
    <br/><br/><br/><br/><br/>    <br/><br/><br/><br/><br/>
        </div>
        );
    }
}

export default Header;