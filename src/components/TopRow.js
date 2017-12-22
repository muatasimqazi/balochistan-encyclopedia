import React, { Component } from 'react';
import logo from '../logo.svg';
import one from '../img/one.jpeg';
import two from '../img/two.jpeg';
import three from '../img/three.jpeg';
import four from '../img/four.jpeg';
import five from '../img/five.jpeg';

class TopRow extends Component {
    render() {
        return (

            <div className="section pb-5">
			<div className="fluid-container ml-4 mr-4">
				<div className="row">
					<div className="card-group">

						<div className="col-lg-6">
							<div id="carouselExampleIndicators" className="carousel slide mb-5" data-ride="carousel">
								<ol className="carousel-indicators">
									<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
									<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
									<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
									<li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
								</ol>
								<div className="carousel-inner">
									<div className="carousel-item active">
										<img className="d-block w-100" src={one} alt="First slide"/>
										<div className="carousel-caption">
											<h5>Heading Goes Here</h5>
											<p className="d-none d-md-block">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
										</div>
									</div>

									<div className="carousel-item">
										<img className="d-block w-100" src={two} alt="First slide"/>
										<div className="carousel-caption">
											<h5>Heading Goes Here</h5>
											<p className="d-none d-md-block">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
										</div>
									</div>

									<div className="carousel-item">
										<img className="d-block w-100" src={three} alt="First slide"/>
										<div className="carousel-caption">
											<h5>Heading Goes Here</h5>
											<p className="d-none d-md-block">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
										</div>
									</div>
									<div className="carousel-item">
										<img className="d-block w-100" src={five} alt="First slide"/>
										<div className="carousel-caption">
											<h5>Heading Goes Here</h5>
											<p className="d-none d-md-block">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
										</div>
									</div>

								</div>
								<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
								    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
								    <span className="sr-only">Previous</span>
							  </a>
								<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
								    <span className="carousel-control-next-icon" aria-hidden="true"></span>
								    <span className="sr-only">Next</span>
							  </a>
							</div>
						</div>

						<div className="col-lg-3">
							<div className="card rounded-0 border mb-5">
								<img className="card-img-top rounded-0" src={two} alt="Card image cap"/>
								
								<div className="card-body pt-0">
									<h4 className="card-title mt-2">Card title</h4>
									<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
									<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
								</div>
							</div>
						</div>

						<div className="col-lg-3">
							<div className="card border">
								<div className="card-body text-center">
									<h6>What's New</h6>
								</div>
								<ul className="list-group list-group-flush">
									<li className="list-group-item">Cras justo odio</li>
									<li className="list-group-item">Dapibus ac facilisis in</li>
									<li className="list-group-item">Vestibulum at eros</li>
									<li className="list-group-item">Cras justo odio</li>
									<li className="list-group-item">Dapibus ac facilisis in</li>
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

export default TopRow;