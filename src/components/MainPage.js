import React, { Component, createRef } from "react";
import "../App.css";

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.countRef = createRef();
  }
  state = {
    count: 1,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });

    if (this.state.count === 0) {
      this.countRef.current.style.display = "";
    }
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
    if (this.state.count === 1) {
      this.countRef.current.style.display = "none";
    }
  };
  render() {
    return (
      <div className="main-container">
        <h3 className="container-heading">Counter App</h3>
        <h1 className="container-main" ref={this.countRef}>
          {this.state.count}
        </h1>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-primary m-2"
        >
          +
        </button>
        <button
          ref={this.countRef}
          onClick={() => this.handleDecrement()}
          className="btn btn-danger m-2"
        >
          -
        </button>
      </div>
    );
  }
}

export default MainPage;
