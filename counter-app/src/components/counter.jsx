import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <span
          style={{ fontSize: 10, fontWeight: "bold" }}
          className={this.getBadgeClasses()}
        >
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement("product")}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.renderTags()}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state; //object de-structuring
    return count === 0 ? "ZERO" : count;
    // return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
