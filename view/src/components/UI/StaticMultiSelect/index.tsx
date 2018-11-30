import * as React from "react";
export default class StaticMultiSelect extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  renderData = () => {
      console.log(this.props)
      const data = this.props.data.map(({locale, countrys}: any) => {
        return <input type='checkbox' value={locale}/>
      });
      return data;
  }
  render() {
  return (
    <div className="wrapper">
    <h1>MultiSelectStatic</h1>
    <div className='selectedBox'></div>
    <input type="text" className='filter'/>
    <div className='selectBox'>
        {this.renderData()}
    </div>
    </div>);
  }
}
