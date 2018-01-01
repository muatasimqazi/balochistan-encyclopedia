import React, { Component } from 'react';
import { convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {app } from '../base';

const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};

const storageRef =app.storage()

class ContributeEditor extends Component {
  constructor(props) {
    super(props);
    this.uploadImageCallBack = this.uploadImageCallBack.bind(this)
    const contentState = convertFromRaw(content);
    this.state = {
      contentState,
      image: ''
    }
  }

  onContentStateChange = (contentState) => {
    this.setState({
      contentState,
    });
  };


  // image upload 
  uploadImageCallBack = (file) => {
    return new Promise((resolve, reject) => {
        const destinationRef = storageRef.ref('images/' + file.name )
        destinationRef.put(file)
          resolve();
        })
       .then(() => {
         this.setState({
           image: 'https://dictionary.cambridge.org/us/rss/images/flashpacking1.jpg'
         })
          console.log('succs')
       })
       .catch(() => {
          console.log('err')
       });
        
  }

  render() {
    const { contentState } = this.state;
    return (
      <div>
        <Editor
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onContentStateChange={this.onContentStateChange}
          toolbar={{
            inline: { inDropdown: false },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
            image: { uploadCallback: this.uploadImageCallBack, alt: { present: true, mandatory: true } },
          }}
        />
        <textarea
          
          value={JSON.stringify(contentState, null, 4)}
        />
      </div>
    );
  }
}

export default ContributeEditor;