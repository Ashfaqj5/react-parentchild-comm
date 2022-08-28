import React from 'react';
import './Childcomponent.css';

class Childcomponent extends React.Component {
    constructor(props) {
        super(props);
        this.changeText=this.changeText.bind(this);
    }
    // shouldComponentUpdate(nextprops,nextstate) {
    //     if(this.props.roll===nextprops.roll){
    //         return false;
    //     }
    //     return true;
    // }
    changeText(){
        console.log("child button clicked")
        let text="hey there ! I am using whatsapp";
        this.props.parentfunction(text);
        // let func=this.props.parentfunction;
        // func(text);
    }
    

    render(){
        console.log(this.props.parentfunction);
        console.log("render method in child");
        return  <div className="child-div">
                    <h2>Roll no. from parent : {this.props.roll}</h2>
                    <button onClick={this.changeText}>click to change text in parent.</button>
                </div>
    }
}

export default Childcomponent;
