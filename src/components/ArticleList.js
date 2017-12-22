import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

class ArticleList extends Component {
    render() {
        return (
            <div>
                <nav className='navbar navbar-expand-lg fixed-top bg-primary'>
                    <div className='container'>
                        <div className='navbar-translate'>
                            <a className='navbar-brand' href='#'>
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
                                ? (    
                                <li className='nav-item'>
                                <Link className='nav-link' to='/songs' data-toggle='modal' data-target='#signup'>
                    <i className='fa fa-user-plus'></i>
                                    <p>Sign Up</p>
                            </Link>
                            </li>
                                )
                                : (     
                             <li className='nav-item'>
                                    <Link className='nav-link' to='/songs' data-toggle='modal' data-target='#login'>
                                    <i className='fa fa-user'></i>
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
        </div>
        );
    }
}

export default ArticleList;