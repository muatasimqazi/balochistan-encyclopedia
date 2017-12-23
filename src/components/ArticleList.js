import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Breadcrumb} from 'react-bootstrap';


const articleListStyles = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
}

const articleCardStyles = {
    maxWidth: "30%",
    minWidth: "150px",
    flex: "1",
    margin: "5px"
}

class ArticleList extends Component {
    render() {
        const { articles } = this.props
        const articleId = Object.keys(articles)

        return (
            <div className="container">
                <Breadcrumb>
                    <Breadcrumb.Item href="/">
                    Home
                    </Breadcrumb.Item>
                     <span> / </span>  
                    <Breadcrumb.Item active>
                    Articles
                    </Breadcrumb.Item>
                </Breadcrumb>
                <h1 style={{marginBottom: "0.5em"}}>Articles</h1>
                <div style={articleListStyles}>
                <ul className="list-group">
                    {articleId.map((id) => {
                        const article = articles[id]
                        return (
                            <li key={id}  className="list-group-item"><Link className="text-black" to={`/articles/${id}`}>{article.title}</Link></li>
                        )
                    })


                    }
                     </ul>
                    <br/><br/>
                </div>
            </div>
        );
    }
}

export default ArticleList;