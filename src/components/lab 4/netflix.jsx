import React, { Component } from 'react';
import {Route,Switch,Link,BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './home';
import Login from './login';
import Todo from './todo';
import Movies from './movie';

class Netflix extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Router>

                
                
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <h2 className="navbar-brand" to="#">NetFlix</h2>
            
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto ">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/home">Home </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/movie">Movies</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/todo">Todo</Link>
                    </li>
                    
                    </ul>
                </div>
                </div>
        </nav>
        <main className="container">
                    <Switch>
                    <Route path="/movie" component={Movies}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/todo" component={Todo}/>
                    <Route path="/home" component={Home}/>
                    
                    </Switch>
                   
                </main>
                </Router>
            </React.Fragment>
         );
    }
}
 
export default Netflix;
