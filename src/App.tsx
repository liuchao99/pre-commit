// eslint-disable-next-line no-use-before-define
import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { DatePicker } from "antd";
import "antd/dist/antd.less";

import "./app.scss";

let a = 100;
// @inject("store")
// @observer
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="app">
          {/* {this.props.store.count} */}
          liuchao
        </div>
        <div>
          <DatePicker />
        </div>
        {/* <button onClick={this.props.store.add}>add</button> */}
        {/* <button onClick={this.props.store.reduce}>reduce</button> */}
      </div>
    );
  }
}

export default App;
