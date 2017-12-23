import React, { Component } from 'react';
import {Redirect } from 'react-router-dom';
import {app } from '../base';
import MyEditor from './MyEditor'
import {Breadcrumb} from 'react-bootstrap';


const rootRef = app.database().ref().child('content');
const articleRef = rootRef.child('articles');
const categoryRef = rootRef.child('categories')


class Contribute extends Component {
	constructor(props) {
        super(props)
        this.submitArticle = this.submitArticle.bind(this)
		this.state = {
            redirect: false,
            editorState: '',
            dataContent: {},
            articles: { },
            categories: []
        }
    }


    onClick = () => {
        const data = this.child.passEditorContent() // do stuff
      }

    
    
    submitArticle(event) {
        event.preventDefault()
        let newArticle = {...this.state.articles};
        const title = this.AticleInput.value
        const url = title.toLowerCase().trim().split(/\s+/).join('-');
        const domain = this.ArticleDomain.value;
        const author = this.props.user;
        const date = new Date();

        // data from editor
        const data = this.child.passEditorContent() // do stuff
       
        newArticle = {
            title: title,
            author: author,
            body: data.blocks,
            date: date,
            domain: domain,
            url: url
          };

        this.setState({newArticle});
        
        articleRef.push(newArticle)
        this.articleForm.reset();
        this.setState({
            redirect: true
        })

    }


    render() {
        
		if (this.props.authenticated  === false) {
			return <Redirect to='/'/>
        }
        
        if (this.state.redirect === true) {
			return <Redirect to='/articles'/>
		}
		
        return (

			<div className="section pt-3 pb-3 pt-5 bg-white article">
                <div className="fluid-container ml-4 mr-4">
                    <div className="row">
                        <div className="col">
                        <Breadcrumb>
                            <Breadcrumb.Item className="breadcrumb-item" href="/">
                            Home
                            </Breadcrumb.Item>
                            <span className="pl-2 pr-2 text-mute"> / </span>   
                            <Breadcrumb.Item active>
                            Contribute
                            </Breadcrumb.Item>
                        </Breadcrumb>        
                        <hr/>
                    </div>
                    </div>

                    <div className="row">
                    <div className="col-lg-8 mb-5">
                    <div className="card rounded-0 border mb-5">
                    <div className="card-body">
                    <form className="form" onSubmit={(event) => { this.submitArticle(event) }} ref={(form) => { this.articleForm = form}}>
							<div className="content">
								<div className="form-group form-group-no-border input-lg">
                                <label htmlFor="exampleFormControlSelect1">Title</label>
									<input className="form-control bg-white border" name="title" type="text" ref={(input) => {this.AticleInput = input}} placeholder="Article Title"></input>
								</div>
                                <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">Category</label>
                                    <select className="form-control" id="exampleFormControlSelect1" ref={(select) => {this.ArticleDomain = select}}>
                                    <option>History</option>
                                    <option>Geography</option>
                                    <option>Politics</option>
                                    <option>Culture and Society</option>
                                    <option>Biography</option>
                                    </select>
                            </div>
								
                                
                            <label htmlFor="exampleFormControlSelect1">Article Body</label>
                                <div className="border">
                                <MyEditor  onRef={ref => (this.child = ref)} />
                                
                                </div>
							</div>
							<div className="footer text-center">
								<input className="btn btn-primary btn-round btn-lg pull-right" type="submit" value="Submit"></input>
							</div>
						</form>

                        
               
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-3">
                    <div className="card rounded-0 border mb-5">
                        <img className="card-img-top rounded-0" src="img/four.jpeg" alt="" />
                        <div className="card-body pt-0">
                            <h4 className="card-title mt-2">Card title</h4>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card rounded-0 border mb-5">
                        <img className="card-img-top rounded-0" src="img/four.jpeg" alt="" />
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

export default Contribute;