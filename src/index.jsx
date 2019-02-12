import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./sass/main.sass";

import ToDoInput from "./components/todoInput.jsx"
import ToDoList from "./components/todoList.jsx"

import shortId from "short-id";

class ToDo extends Component{

  constructor(props){
    super(props);
    this.state = {
      value: '',
      todoItems: this.props.todos
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlerAddButton = this.handlerAddButton.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleChange(event){
    this.setState({
      value: event.target.value
    });
  }

  handlerAddButton(event){
    event.preventDefault();

    if(!this.state.value){
      return;
    }

    const newItem = {
      text: this.state.value,
      key: shortId.generate()
    }

    this.setState(prevState =>({
      value: '',
      todoItems: [...prevState.todoItems, newItem]
    }));
  }

  deleteItem(itemKeyDelete){
    this.setState(prevState =>({
      todoItems: prevState.todoItems.filter(item => item.key != itemKeyDelete)
    }));
  }

  render(){
    return (
      <div className="ToDo">
        <ToDoInput value={this.state.value} 
                   onValueChange={this.handleChange}
                   onAddClick={this.handlerAddButton}/>

        <ToDoList todos={this.state.todoItems}
                  onDelete={this.deleteItem}/>
      </div>
    );
  }
}

//const defaultTODOS = ["Wake up","Learn react", "Go to the University", "Go to the english classes"];
const defaultTODOS = [{
  text: "Wake up", 
  key: "qwe"
},
{
  text: "Learn react",
  key: "asdas"
},
{
  text: "Go to the University",
  key: "rtyyu"
}, 
{
  text: "Go to the english classes",
  key: "yuu"
}];

ReactDOM.render(
  <ToDo todos={defaultTODOS}/>,
  document.querySelector("#root")
);
