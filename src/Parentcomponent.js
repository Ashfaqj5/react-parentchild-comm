import React from 'react';
import Childcomponent from './Childcomponent';
import './Parentcomponent.css';

class Parentcomponent extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      text:"text in parent component",
      roll:1
    };
    this.changeRollno=this.changeRollno.bind(this);
    this.communicate=this.communicate.bind(this);
  }

  changeRollno(){
    let r=this.state.roll + 1;
    this.setState({roll:r});
  }
  communicate(msg){
    this.setState({text:msg});
  }
  render(){
    console.log("render method in parent")
    console.log(this)
    // console.log(this.communicate)
    return <div className="parent-div">
              <h2>Text : {this.state.text}</h2>
              <h2>Roll no : {this.state.roll}</h2>
              <Childcomponent roll={this.state.roll} parentfunction={this.communicate} />
              <button onClick={this.changeRollno}>click to change roll no.</button>
            </div>
  }
}

export default Parentcomponent;
