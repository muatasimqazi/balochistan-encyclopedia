import React, { Component } from 'react';
import one from '../img/one.jpeg';
import two from '../img/two.jpeg';
import three from '../img/three.jpeg';
import four from '../img/four.jpeg';
import five from '../img/five.jpeg';

class BottomRow extends Component {
    render() {
        return (
            <div>
            <div className="separator separator-primary"></div>

		<div className="section pt-3 pb-3 bg-white">
			<div className="fluid-container ml-4 mr-4">
				<div className="row">
					<div className="col-lg-4 text-center">
						<div className="card mb-5 text-white bg-success mb-3">
							<div className="card-body">
								<h4 className="card-title">Primary card title</h4>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							</div>
						</div>
						<div className="card mb-5 text-white bg-info mb-3">
							<div className="card-body">
								<h4 className="card-title">Secondary card title</h4>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="card mb-5 text-white">
							<img className="card-img" src={two} alt="Card image"/>
							<div className="card-img-overlay">
								<h4 className="card-title">Card title</h4>
								<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
								<p className="card-text">Last updated 3 mins ago</p>
							</div>
						</div>
					</div>

					<div className="col-lg-4">
						<div className="card mb-5 text-white">
							<img className="card-img" src={five} alt="Card image"/>
							<div className="card-img-overlay">
								<h4 className="card-title">Card title</h4>
								<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
								<p className="card-text">Last updated 3 mins ago</p>
							</div>
						</div>
					</div>

				</div>
			</div>
			<hr/>
			<div className="section pt-3 pb-3 bg-white">
				<div className="fluid-container ml-4 mr-4">
					<h5 className="font-weight-bold mt-2 text-uppercase">Search By Topic</h5>
					<div className="row">
						<div className="col-6 col-lg-3 col-md-3">
							<ul>
								<li>one</li>
								<li>two</li>
								<li>three</li>
								<li>four</li>
								<li>five</li>
							</ul>
						</div>
						<div className="col-6 col-lg-3 col-md-3">
							<ul>
								<li>one</li>
								<li>two</li>
								<li>three</li>
								<li>four</li>
								<li>five</li>
							</ul>
						</div>
						<div className="col-6 col-lg-3 col-md-3">
							<ul>
								<li>one</li>
								<li>two</li>
								<li>three</li>
								<li>four</li>
								<li>five</li>
							</ul>
						</div>
						<div className="col-6 col-lg-3 col-md-3">
							<ul>
								<li>one</li>
								<li>two</li>
								<li>three</li>
								<li>four</li>
								<li>five</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
        );
    }
}

export default BottomRow;