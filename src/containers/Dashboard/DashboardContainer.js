import React, { Component } from "react";

import { Dashboard } from "~/components";

export default class DashboardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foo: "bar"
    };
  }

  render() {
    return <Dashboard />;
  }
}
