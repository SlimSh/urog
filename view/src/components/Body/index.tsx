import * as React from "react";
export default class Body extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return <div className="wrapper">{this.props.users}</div>;
  }
}
