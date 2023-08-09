import React, { Component } from "react";
import tachyons from "tachyons";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    return this.state.hasError ? (
      <div className="flex flex-column center tc">
        <h1 className="tc">Error Occured</h1>
        <img
          className="center tc "
          src="https://images.emojiterra.com/google/noto-emoji/unicode-15/bw/512px/1f635-1f4ab.png"
          alt="a very confused face :("
          width={400}
          height={400}
        />
      </div>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundry;
