import React, { Component } from 'react';
import '../../App.css';



class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            items:[],
            currentItem:{
                text:'',
                key:''
            }
        }
    }
    handelInput=(e)=>{
        this.setState({
            currentItem:{
                text: e.target.value,
                key : Date.now()
            }
        })
    }
    addItem=(e)=>{
        e.preventDefault();
        const newItem = this.state.currentItem;
        if(newItem.text !== ""){
            const newItems =[...this.state.items,newItem];
            this.setState({
                items : newItems,
                currentItem:{
                    text:'',
                    key:''
                }
            })
        }
    }
    deleteItem=(key)=>{
        const filterditems=this.state.items.filter(item => item.key!==key);
        this.setState({
            items : filterditems
        })
    }
    render() { 
        return ( 
            <div className="App">
                <form className="todo" onSubmit={this.addItem}>
                    <input type="text"  placeholder="Enter Task" value={this.state.currentItem.text} onChange={this.handelInput}/>
                    <button type="submit">Add</button>
                </form>
                <ListItems items = {this.state.items} deleteItem={this.deleteItem}></ListItems>
            </div>
         );
    }
}

class ListItems extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const items = this.props.items;
        const listItems= items.map(item =>
        {
            return <div className="list" key={item.key}><span>{item.text}</span>
            <button onClick={ ()=>this.props.deleteItem(item.key)}>Delete</button> </div>
          
        })
        return (  <div>
            {listItems}
          </div> );
    }
}
 


 

 
export default Todo;




 

