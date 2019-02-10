import React, { Component } from "react";
import { fetchCandies } from "../store";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class AllCandies extends Component {
  componentDidMount() {
    this.props.getCandies();
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <ul>
          {this.props.candies.map(candy => (
            <li key={candy.id}>{candy.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

// export default ;

// function AllCandies(props) {

//   componentDidMount () => {
//     props.getCandies()
//   }

//   return (
//     <div>
//       <h1>Hello</h1>
//       {/* <ul>
//         {props.candies.map(candy => (
//           <li key={candy.id}>{candy.name}</li>
//         ))}
//       </ul> */}
//     </div>
//   );
// }

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
