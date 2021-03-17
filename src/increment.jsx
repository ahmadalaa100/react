import React, { Component } from 'react';

class Increment extends Component {
    state = { 
        count:0
     }
     incrementhandeler = () => {
        this.setState({count : this.state.count+1});
    }
    decrementhandeler = () =>{
        this.setState({count : this.state.count-1});
      }
    render() { 
        return (  
            <div>
              <h2>  <span >{this.state.count}</span> </h2>  
                <br/>
                <button onClick={this.incrementhandeler} >add</button>
                <button onClick={this.decrementhandeler} >remove</button>
            </div>

        );
    }
}
 
export default Increment;