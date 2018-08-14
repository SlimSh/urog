import * as React from "react";
import * as IButton from './index.d';
import * as style from './Button.scss';
export default class Button extends React.Component<IButton.IProps, IButton.IState> {
  state = {
      isActive: false 
  }

  constructor(props: IButton.IProps) {
    super(props);
  }

  render() {
    return <div className={style.ignBtn}>{this.props.title}</div>;
  }

}
