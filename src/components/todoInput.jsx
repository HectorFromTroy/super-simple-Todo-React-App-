import React, { Component } from "react";

export default class ToDoInput extends Component{
  constructor(props){
    super(props);
  }

  render(){

    return (
      <form className="ToDo__form">
        <input type="text" className="ToDo__input" placeholder="enter new task" 
              value={this.props.value}
              onChange={this.props.onValueChange}/>

        <input type="submit" value="Add" className="ToDo__add"
              onClick={this.props.onAddClick}/>
      </form>
    );
  }
}