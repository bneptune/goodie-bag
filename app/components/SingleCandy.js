import React, { Component } from "react";
import { increaseCount, decreaseCount } from "../reducers";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class SingleCandy extends Component {
  //   componentDidMount() {
  //     this.props.getCandy();
  //   }
  constructor() {
    super();
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  }

  handleIncrease() {
    this.props.addOne();
  }

  handleDecrease() {
    this.props.minusOne();
  }

  render() {
    const candies = this.props.candies;
    console.log("What", this.props.candies);
    const candyId = Number(this.props.match.params.candyId);
    const [match] = candies.filter(candy => candy.id === candyId);
    console.log("see", match);

    return (
      <div>
        <h1>{match.name}</h1>
        <h2>How Many Pieces Would You Like?</h2>
        <p>{this.props.count}</p>
        <button onClick={this.handleIncrease} type="submit">
          More
        </button>
        <button onClick={this.handleDecrease} type="submit">
          I Don't Do Sugar
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    candies: state.candies,
    count: state.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addOne: () => dispatch(increaseCount()),
    minusOne: () => dispatch(decreaseCount())
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     getCandy: () => dispatch(fetchCandies())
//   };
// };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SingleCandy)
);
