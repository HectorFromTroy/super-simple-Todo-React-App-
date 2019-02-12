import React, { Component } from "react";


export default class ToDoList extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const listItems = this.props.todos.map(item =>{
      return (
      <li key={item.key} className="ToDo__item" onClick={this.props.onDelete.bind(this, item.key)}>
        {item.text}
      </li>);
    });

    return (
      <ul className="ToDo__list">
        {listItems}
      </ul>
    );
  }
}
