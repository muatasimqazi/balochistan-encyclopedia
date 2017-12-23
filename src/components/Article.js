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

            <div className="section pt-3 pb-3 pt-5 bg-white article">
                <div className="fluid-container ml-4 mr-4">
                    <div className="row">
                        <div className="col">
                        <Breadcrumb>
                            <Breadcrumb.Item className="breadcrumb-item" href="/articles">
                            Articles
                            </Breadcrumb.Item>
                            <span className="pl-2 pr-2 text-mute"> / </span>   
                            <Breadcrumb.Item active>
                            {this.props.article.title}
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    <h3 className="mb-0">{this.props.article.title}</h3>
                        <div><span className="text-info">Written by</span> : <a href="">{this.props.article.author}</a> | <span>{this.props.article.date}</span></div>
                        
                        <hr/>
                    </div>
                    </div>

                    <div className="row">
                    <div className="col-lg-8 mb-5">
                    {/* <img className="img-fluid" src={this.props.article.media.images[0]} /> */}
                    {this.props.article.body.map((para, index) => {
                        
                        return (
                            <p key={index}>{para.text}</p>
                        )
                    })}

                    </div>

                    <div className="col-lg-3">
                    <div className="card rounded-0 border mb-5">
                        <img className="card-img-top rounded-0" src={this.props.article.media.images[0]} alt="Card image cap" />
                        <div className="card-body pt-0">
                            <h4 className="card-title mt-2">Card title</h4>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card rounded-0 border mb-5">
                        <img className="card-img-top rounded-0" src="img/four.jpeg" alt="Card image cap" />
                        <div className="card-body pt-0">
                            <h4 className="card-title mt-2">Card title</h4>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
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