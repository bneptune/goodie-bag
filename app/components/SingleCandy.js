import React, { Component } from "react";
import { fetchCandies } from "../store";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class SingleCandy extends Component {
  //   componentDidMount() {
  //     this.props.getCandy();
  //   }

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
        <p>0</p>
        <button>More</button>
        <button>I Don't Do Sugar</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    candies: state.candies
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     getCandy: () => dispatch(fetchCandies())
//   };
// };

export default withRouter(connect(mapStateToProps)(SingleCandy));
