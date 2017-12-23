import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import one from '../img/one.jpeg';
import two from '../img/two.jpeg';
import three from '../img/three.jpeg';


class BottomTopRow extends Component {
    render() {
		const { articles } = this.props
        const articleId = Object.keys(articles)
        return (
            <div className="section bg-white pt-1 pb-0">
			<div className="fluid-container ml-4 mr-4">
				<div className="row">
					<div className="col-lg-6">
						<h5 className="font-weight-bold mt-2 text-uppercase">Trending Topics</h5>
						
						<div className="list-group mb-5">
						
                    {
						articleId.map((id, index) => {
                        const article = articles[id]
                        return (
                            
							<Link key={id} to={`/articles/${id}`} className="list-group-item list-group-item-action flex-column align-items-start">
							<div className="d-flex w-100 justify-content-between">
								<h5 className="mb-1">{article.title}</h5>
								<small>{article.domain}</small>
							</div>
							<p className="mb-1">{article.body[0].text}</p>
							<small>Donec id elit non mi porta.</small>
							</Link>
                        )
                    })
                    }
						</div>

					</div>

					<div className="col-lg-3">
						<div className="row">
							<div className="col">
								<h5 className="font-weight-bold mt-2 text-uppercase">Trending Topics</h5>
								<div className="card mb-5 border">
									<img className="card-img-top" src={one} alt=""/>
									<div className="card-body">
										<a className="card-title" href=''>Card title</a>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									</div>
								</div>
								<div className="card mb-5 border">
									<img className="card-img-top" src={two} alt=""/>
									<div className="card-body">
										<a className="card-title" href=''>Card title</a>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-3">
						<div className="row">
							<div className="col-12">
								<h5 className="font-weight-bold mt-2 text-uppercase">Trending Topics</h5>
								<div className="card mb-5 border">
									<img className="card-img-top" src={three} alt=""/>
									<div className="card-body">
										<a className="card-title" href=''>Card title</a>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									</div>
								</div>
							</div>


							<div className="col-12">
								<div className="card border">
									<img className="card-img-top" src={one} alt=""/>
									<div className="card-body">
										<a className="card-title" href=''>Card title</a>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		
		</div>
        );
    }
}

export default BottomTopRow;