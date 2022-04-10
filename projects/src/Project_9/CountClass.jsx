import React from "react";

class CountClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  addOne = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.addOne}>Count</button>
      </div>
    );
  }
}
export default CountClass;
