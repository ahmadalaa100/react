import React, { Component } from 'react';
import CalcBtn from './buttons';
import Result from './result';


class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            result: ""
         }
    }
    buttonPressed = buttonName =>{
        if(buttonName === '='){
            this.calculate();
        }else if(buttonName === 'C'){
            this.reset();
        }else if(buttonName === 'CE'){
            this.backspace();
        }
        else
        this.setState({
            result: this.state.result + buttonName
        });


    }
    reset =()=>{
        this.setState({
            result: ""
        }
        )}

    backspace =()=>{
            this.setState({
                result: this.state.result.slice(0, -1)
            }
            )
        }
    calculate =() =>{
        this.setState({
            result: eval(this.state.result)
        })
    }

    render() { 
        return ( 
            <div>
                <div className="calculator-body">
                    <Result result={this.state.result}/>
                    <CalcBtn buttonPressed={this.buttonPressed}/>
                </div>
            </div>
         );
    }
}
 
export default Calculator;
