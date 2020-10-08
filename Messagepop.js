import React from 'react';
import './Messagepop.css';
class Messagepop extends React.Component {
    state = {mouseOn : false}
    changeState = (per)=>{
        this.setState({mouseOn:per});
    }
    render() {
        return (

            <div onMouseLeave = {()=>this.changeState(false)} onMouseEnter ={()=>this.changeState(true)} className={this.state.mouseOn?"error-message bgcolor":"error-message"}>
                  <input className="checkbox" type = "checkbox" id = {this.props.id}></input>
                  <label for = {this.props.id}>
                  <div className="error-details">
                  
                  <div className="logo">
                  <span class="material-icons">cancel_schedule_send</span>
                  </div>
                  <div className="error-request">
                    <p className="message-header">{this.props.name}</p>
                    <p className="message-id">{this.props.id}</p>
                  </div>
                  {this.state.mouseOn?<div className="button">
                    <p onClick={() =>alert("value is null value should not be empty")}>open</p>
                  </div>:""}
                </div>
                <div className="content">
                  <p>{this.props.message}</p>
                  </div>
                  </label>
                  </div>

            
        );
    }
}
export default Messagepop;