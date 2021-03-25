import React, { Component } from 'react';
import Api from "./API";
import {Alert} from 'react-bootstrap'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email:"",
            password:"",
            error:""

         }
    }

       login= async ()=>{
        let user = {
            email:this.state.email,
            password:this.state.password
        }
        let res = await Api.login(user);
        if(res.error){
            this.setState({error:res.error});
        }
    }
    changeInput=(e)=>{
        let stateproname=e.target.name;
        this.setState({[stateproname]:e.target.value})
    }
    
    render() { 
        return ( 
            <div>
            {this.state.error && <Alert variant="danger" onClose={(e)=>this.setState({error:""})} dismissible>
                <Alert.Heading> error!</Alert.Heading>
                <p>
                {this.state.error}
                </p>
            </Alert>}
                
                <h1>Login ...</h1>
                <form>
                username <input type="email"    value={this.state.email} name="email" onChange={this.changeInput}/><br/>
                password <input type="password" value={this.state.password} name="password" onChange={this.changeInput}/><br/>
                <button onClick={this.login}>Login</button>
                </form>
            </div>
            
         );
    }
}
 
export default Login;



