import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
          }
    }
    
    componentDidMount(){
        fetch("https://reqres.in/api/users?page=2",{
            
            headers:{
               "token":localStorage.token
            }
            }).then(res=>res.json())
        .then(res=>{
            this.setState({data:res.data});
        });
    }
    render() { 
        return ( 
            <div>
                <h1>Movies ....</h1>
                {this.state.data.map((item)=>{
                return <Movie Key={item.id} item={item}/>
            }
                )}
         
            </div>
            
        )
    }
}

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            // <div style={{float:"left"}}>
            //     <img src={this.props.item.avatar} alt="..."/>
            //     <span>{this.props.item.first_name}</span>
            // </div>

           
            <div className="card" style={{width: "18rem",float:'left'}}>
                <img src={this.props.item.avatar} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.item.first_name}</h5>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            
         )
    }
}
 

 

 
export default Movies;