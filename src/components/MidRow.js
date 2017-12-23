import React, { Component } from 'react';

class MidRow extends Component {
    render() {
        return (

            <div className="section pt-3 pb-3 bg-white">
			<div className="container">
				<div className="ml-auto mr-auto text-center">
					<div className="card-body">

						<div className="row text-center">
							<div className="col-4 col-lg-2 col-md-4 col-sm-4 col-xsm-3 border border-top-0 border-left-0 border-bottom-0">
								<p><i className="fa fa-book fa-5x text-muted"></i></p>
								<h6>History</h6>
							</div>
							<div className="col-4 col-lg-2 col-md-4 col-sm-4 col-xsm-3 border border-top-0 border-left-0 border-bottom-0">
								<p><i className="fa fa-tree fa-5x text-muted"></i></p>
								<h6>Nature</h6>
							</div>
							<div className="col-4 col-lg-2 col-md-4 col-sm-4 col-xsm-3 border border-top-0 border-left-0 border-bottom-0">
								<p><i className="fa fa-book fa-5x text-muted"></i></p>
								<h6>History</h6>
							</div>
							<div className="col-4 col-lg-2 col-md-4 col-sm-4 col-xsm-3 border border-top-0 border-left-0 border-bottom-0">
								<p><i className="fa fa-tree fa-5x text-muted"></i></p>
								<h6>Nature</h6>
							</div>
							<div className="col-4 col-lg-2 col-md-4 col-sm-4 col-xsm-3 border border-top-0 border-left-0 border-bottom-0">
								<p><i className="fa fa-car fa-5x text-muted"></i></p>
								<h6>Geography</h6>
							</div>
							<div className="col-4 col-lg-2 col-md-4 col-sm-4 col-xsm-3 border border-top-0 border-left-0 border-bottom-0">
								<p><i className="fa fa-leaf fa-5x text-muted"></i></p>
								<h6>Literature</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>


        );
    }
}

export default MidRow;