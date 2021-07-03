import React, {Component} from 'react';
import './style/styles.css';
import 'react-loading-bar/dist/index.css'
import Loading from 'react-loading-bar'
import 'react-loading-bar/dist/index.css'

export default class publicAge extends Component {
    state = {
        show: false
      }
    onShow= ()=>  {
        this.setState({ show: true })
        document.getElementById("demo").innerHTML = "Searching all of humanity..."
        setTimeout(()=>{
          this.setState({show:false})
          document.getElementById("demo").innerHTML = "Everyone your age is " + document.getElementById("age").value;
        }, 3000);
      }
      render(){
    return (
        <div>
            <Loading
            show={this.state.show}
            color="green"
          />
            <h1>Find out how old everyone your age is</h1>
            <form>
            <label>Enter Your Age</label>
            <input type="text" id="age" name="age" placeholder="Your age.."/>
            <input type="button" value="Submit" onClick={this.onShow}/>
            </form>
            <h1 id="demo"></h1>
    </div>
    )
}
}