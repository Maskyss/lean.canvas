import React from 'react';

import PropTypes from 'prop-types'
import ReactQuill from 'react-quill'; 

class Editor extends React.Component {
    constructor (props) {
      super(props)
      this.state = { editorHtml: '', theme: 'snow' }
      this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange (html) {
        this.setState({ editorHtml: html });
    }
    
    
    
    render () {
      return (
        <div>
          <ReactQuill 
            theme={this.state.theme}
            onChange={this.handleChange}
            value={this.state.editorHtml}
            modules={Editor.modules}
            formats={Editor.formats}
            bounds={'.app'}
            placeholder={this.props.placeholder}
           />
         
         </div>
       )
    }
  }

  Editor.modules = {
    toolbar: [
   
      ['bold', 'italic', 'underline',],
      [{'list': 'ordered'}, {'list': 'bullet'}, ],
        ['link',],
     
     
    ],
    clipboard: {
      matchVisual: false,
    }
  }
  
  Editor.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'link', 
    
  ]
  
  
  Editor.propTypes = {
    placeholder: PropTypes.string,
  }
  


const TextAreaC =()=>{

    return    <div className='app'> <Editor placeholder={'Write something...'}/>
</div>
}
export default TextAreaC;