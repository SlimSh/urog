import * as React from "react";
import Button from "../../UI/Button";

export default class ButtonList extends React.Component<any, any> {
  state = {
    activeBtn: 0
  };

  handleBtnClick = (e: any) => {
    this.setState({ activeBtn: e.target.id });
  };

  render() {
    return (
      <div className={this.props.className}>
        {this.props.data.map((i: any, k: number) => (
          <Button
            key={k}
            id={k}
            isActive={k == this.state.activeBtn}
            title={i}
            className={this.props.classBtn}
            onClick={this.handleBtnClick}
          />
        ))}
      </div>
    );
  }
}
