import React, { Component } from 'react';
import one from '../img/one.jpeg';
import two from '../img/two.jpeg';
import three from '../img/three.jpeg';
import four from '../img/four.jpeg';
import five from '../img/five.jpeg';
import {Breadcrumb} from 'react-bootstrap';

class Article extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const title = event.target.value;

        this.props.updateArticle({
            title: title
        });
    }
    render() {
        return (

            <div className="section pt-3 pb-3 bg-white">
                            <Breadcrumb>
                    <Breadcrumb.Item className="breadcrumb-item" href="/articles">
                    Articles
                    </Breadcrumb.Item>
                     <span> / </span>  
                    <Breadcrumb.Item active>
                    {this.props.article.title}
                    </Breadcrumb.Item>
                </Breadcrumb>
			<div className="container">
            <h1>{this.props.article.title}</h1>
            <p>{this.props.article.text}</p>
				<div className="ml-auto mr-auto text-center">
					<div className="card-body">

						<div className="row text-center">
							<div className="col-4 col-lg-6 col-md-4 col-sm-4 col-xsm-3 border border-top-0 border-left-0 border-bottom-0">
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>


        );
    }
}

export default Article;