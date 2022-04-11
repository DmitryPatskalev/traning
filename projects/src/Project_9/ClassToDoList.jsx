import React, { useState } from "react";

export default class ClassToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  addItem = (e) => {
    e.preventDefault();
    const value = e.target[0].value;
    const { items } = this.state;
    if (!value) {
      return;
    }
    this.setState({ items: [...items, { id: items.length, value }] });
  };
  render() {
    const { items } = this.state;
    return (
      <div>
        <form onSubmit={this.addItem}>
          <input type="text" />
          <button>ADD</button>
        </form>
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.value}</li>
          ))}
        </ul>
      </div>
    );
  }
}
