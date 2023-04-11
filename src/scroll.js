import React, { Component } from "react";

import { withRouter } from "react-router-dom";
class ScrollToTop extends Component {
  componentDidMount() {
    if (this.props.location.hash == "#wow-Applications") {
      console.log(this.props.location.hash, "#wow-Applications");
      return false;
    }
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.hash == "#wow-Applications") {
      return false;
    } else {
      if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0);
        return true;
      }
    }
    // if (this.props.location !== prevProps.location) {

    //   if (this.props.location.pathname == "/#wow-Applications") {
    //     return false;
    //   } else {
    //     window.scrollTo(0, 0);
    //     return true;
    //   }
    // } else {
    //   window.scrollTo(0, 0);
    //   return true;
    // }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
