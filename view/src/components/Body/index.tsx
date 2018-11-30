import * as React from "react";
import StaticMultiSelect from '../UI/StaticMultiSelect';
export default class Body extends React.Component<any, any> {
  public data: any = [
    {
      locale: 'Europe',
      countrys: ['Russia', 'Ukraine', 'England', 'Germany', 'Italy']
    },
    {
      locale: 'Asia',
      countrys: ['China', 'Japan', 'Korea', 'Malasia']
    },
    {
      locale: 'South America',
      countrys: ['Mexica', 'Brazilia', 'Pery']
    }
  ]
  
  constructor(props: any) {
    super(props);
  }
  render() {
    return <div className="wrapper">
      <StaticMultiSelect data={this.data}/>
      {this.props.users}
    </div>;
  }
}
