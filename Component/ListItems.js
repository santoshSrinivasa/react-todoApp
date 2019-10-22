import React, { Component } from "react";
import DeleteItem from "./DeleteItem";
export default class ListItems extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul>
        {this.props.list.map( (item, index) => (
          <DeleteItem text={item} key={index} remove={this.props.remove} />
        ))}
      </ul>
    );
  }
}
