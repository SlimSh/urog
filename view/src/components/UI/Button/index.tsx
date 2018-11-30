import * as React from "react";
import * as IButton from './index.d';
import * as style from './Button.scss';
export default class Button extends React.Component<IButton.IProps, IButton.IState> {

  props:any = {
    className: ''
  }

  constructor(props: IButton.IProps) {
    super(props);
  }

  compareStyle = (stl: string) => `${this.props.className} ${stl} ${this.props.isActive ? style.active : ''}`
  
  render() {
    return <div id={this.props.id}
            className={this.compareStyle(`${style.ignBtn}`)}
            onClick={this.props.onClick}>{this.props.title}</div>;
  }

}
