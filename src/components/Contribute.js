import React, { Component } from 'react';
import {Redirect } from 'react-router-dom';
import {app, facebookProvider } from '../base';
import MyEditor from './MyEditor'
import {Breadcrumb} from 'react-bootstrap';
import {Editor, EditorState} from 'draft-js'


class Contribute extends Component {
	constructor(props) {
        super(props)
        this.submitArticle = this.submitArticle.bind(this)
		this.state = {
            redirect: false,
            editorState: ''
        }
        this.onChange = (editorState) => this.setState({editorState: this.editorState.value});
        
    }

    
    
    submitArticle(event) {
        event.preventDefault()
        const title = this.AticleInput.value
        console.log("Article submitted" + title);
        console.log("ed" + this.state.editorState)

    }

    render() {
        
		if (this.props.authenticated  === false) {
			return <Redirect to='/'/>
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
								<div className="input-group form-group-no-border input-lg">
									
									<input className="form-control bg-white border" name="title" type="text" ref={(input) => {this.AticleInput = input}} placeholder="Article Title"></input>
								</div>
								
                                <div className="border">
                                <MyEditor ref={MyEditor.EditorState}  onChange={this.onChange.bind(this)}  />
                                
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
                        <img className="card-img-top rounded-0" src="img/four.jpeg" alt="Card image cap" />
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

export default Contribute;