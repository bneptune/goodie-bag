import React, { Component } from "react";
import { fetchCandies } from "../store";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import SingleCandy from "./SingleCandy";
import { Route } from "react-router-dom";

class AllCandies extends Component {
  componentDidMount() {
    this.props.getCandies();
  }

  render() {
    const candyId = Number(this.props.match.params.candyId);
    const candies = this.props.candies;
    console.log("hi", candies);

    return (
      <div>
        <h1>Hello</h1>
        <ul>
          {this.props.candies.map(candy => (
            <li key={candy.id}>
              <Link to={`candies/${candy.id}`}>{candy.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    candies: state.candies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCandies: () => dispatch(fetchCandies())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AllCandies)
);
