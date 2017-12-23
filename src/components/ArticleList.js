import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Breadcrumb} from 'react-bootstrap';


class ArticleList extends Component {
    render() {
        const { articles } = this.props
        const articleId = Object.keys(articles)

        return (
            <div className="section pt-3 pb-3 pt-5 bg-white article">
            <div className="fluid-container ml-4 mr-4">
                <div className="row">
                    <div className="col">
                <Breadcrumb>
                    <Breadcrumb.Item href="/">
                    Home
                    </Breadcrumb.Item>
                    <span className="pl-2 pr-2 text-mute"> / </span> 
                    <Breadcrumb.Item active>
                    Articles
                    </Breadcrumb.Item>
                </Breadcrumb>
                <h1 style={{marginBottom: "0.5em"}}>Articles</h1>
                <div>
                <ul>
                    {articleId.map((id) => {
                        const article = articles[id]
                        return (
                            <li key={id}><Link className="text-black" to={`/articles/${id}`}><h4>{article.title}</h4></Link></li>
                        )
                    })


                    }
                     </ul>
                    <br/><br/>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default ArticleList;