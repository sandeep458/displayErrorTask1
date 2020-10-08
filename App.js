import React from 'react';
import './App.css';
import Messagepop from'./Components/Messagepop';
import {v4 as v4} from "uuid";
 class App extends React.Component {
   state = {compData:[
    {
      name:"node",
      id:v4(),
      message:"not foundnot foundnot foundnot foundnot found"
   },{
    name:"node",
    id:v4(),
    message:"not foundnot foundnot foundnot foundnot found"
 },{
  name:"node",
  id:v4(),
  message:"not foundnot foundnot foundnot foundnot found"
},{
  name:"node",
  id:v4(),
  message:"not foundnot foundnot foundnot foundnot found"
},{
  name:"node",
  id:v4(),
  message:"not foundnot foundnot foundnot foundnot found"
},{
  name:"node",
  id:v4(),
  message:"not foundnot foundnot foundnot foundnot found"
},{
  name:"node",
  id:v4(),
  message:"not foundnot foundnot foundnot foundnot found"
}

   ]}
  render() {
    return (
      <div className="container">
        <div className="message">
                <div className="first">
                  <h1>validation results</h1>
                </div>
                <div className="middle">
                  {this.state.compData.map((per)=> <Messagepop {...per}/>)}
                {/* <Messagepop />
                <Messagepop name = {per.name} id = {per.id}/> 
                <Messagepop/>
                <Messagepop/>
                <Messagepop/>
                <Messagepop/> */}
                  {/* <div className="error-message">
                    <div className="error-details">
                  
                  <div className="logo">
                  <span class="material-icons">cancel_schedule_send</span>
                  </div>
                  <div className="error-request">
                    <p className="message-header">TestNode</p>
                    <p className="message-id">WDIOQOWHDIUEQHDULHDEUFHEWU</p>
                  </div>
                  <div className="button">
                    <p onClick={() =>alert("value is null value should not be empty")}>open</p>
                  </div>
                </div>
                <div className="content">
                  
                  </div>
                  </div> */}
{/*                   
                  <div className="error-message">
                    <div className="error-details">
                  
                  <div className="logo">
                  <span class="material-icons">cancel_schedule_send</span>
                  </div>
                  <div className="error-request">
                    <p className="message-header">if</p>
                    <p className="id">WDIOQOWHDIUEQHDULHDEUFHEWU</p>
                  </div>
                  <div className="button">
                    <p onClick={() =>alert("value is null example of a longer error message which takes more than one row")}>open</p>
                  </div>
                </div>
                  <div className="middle-content">
                                   </div>
                  </div>
                  
                  <div className="error-message">
                    <div className="error-details">
                  
                  <div className="logo">
                  <span class="material-icons">cancel_schedule_send</span>
                  </div>
                  <div className="error-request">
                    <p className="message-header">script code name</p>
                    <p className="id">WDIOQOWHDIUEQHDULHDEUFHEWU</p>
                  </div>
                  <div className="button">
                    <p onClick={() =>alert("value is null value should not be empty")}>open</p>
                  </div>
                </div>
                  <div className="content">
                 
                  </div> */}
                  {/* </div> */}
                  </div>
                  <div className="close">
                 

                    <div className="buttonname">
                      <p>close</p>
                    </div>
                  </div>
        </div>
        {/* <Messagepop /> */}


          </div>
    );
  }
  
}
export default App;

