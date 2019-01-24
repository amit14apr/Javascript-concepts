import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss'
class Image extends React.Component{
    render(){
        return (
            <div>
                <h1>{"AMIT"}</h1>
                <p>{this.props.caption}</p>
                <div id="image"></div>
            </div>
        )
    }
}
ReactDOM.render(<Image caption="AMIT SINGH" />, document.getElementById('react-container'));