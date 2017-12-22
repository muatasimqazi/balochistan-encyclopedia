import React, { Component } from 'react';
import one from '../img/one.jpeg';
import two from '../img/two.jpeg';
import three from '../img/three.jpeg';
import four from '../img/four.jpeg';
import five from '../img/five.jpeg';

class MidBottomRow extends Component {
    render() {
        return (
		<div className="section bg-gray pt-1 pb-4">
			<div className="fluid-container ml-4 mr-4">
				<h5 className="font-weight-bold mt-2 text-uppercase">Explore Abc</h5>
				<div className="row">
					<div className="col-lg-4 col-sm">
						<div className="card">
							<div className="card-body">
								<h4 className="card-title">Card title</h4>
								<h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" className="card-link">Card link</a>
								<a href="#" className="card-link">Another link</a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-sm">
						<div className="card">
							<div className="card-body">
								<h4 className="card-title">Card title</h4>
								<h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" className="card-link">Card link</a>
								<a href="#" className="card-link">Another link</a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-sm">
						<div className="card">
							<div className="card-body">
								<h4 className="card-title">Card title</h4>
								<h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" className="card-link">Card link</a>
								<a href="#" className="card-link">Another link</a>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
        );
    }
}

export default MidBottomRow;