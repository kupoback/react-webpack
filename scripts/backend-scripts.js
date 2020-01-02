import React from "react";
import { hot } from "react-hot-loader/root";

class BEApp extends React.Component {
  render() {
    const { name } = this.props;
    return <h1>Hello {name}</h1>;
  }
}

export default hot(BEApp);
