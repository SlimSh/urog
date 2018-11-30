import * as React from "react";
import Logo from "./Logo";
import MenuCategories from "./MenuCategories";
import * as style from "./../Sidebar/Sidebar.scss";
import ButtonList from "./../UI/ButtonList";
const piston = require('./icons/piston.svg');
const carrot = require('./icons/carrot.svg');
const tractor = require('./icons/tractor.svg');

export default class Sidebar extends React.Component<any, any> {
  categories = [{
    title: 'Запчасти',
    key: 'details',
    icon: piston
  },
  {
    title: 'Культуры',
    key: 'natural',
    icon: carrot
  },
  {
    title: 'Техника',
    key: 'mashine',
    icon: tractor
  }];
  constructor(props: any) {
    super(props);
    this.state = {
      activeTab: this.categories[0].key
    }
  }
  handleChangeSidebarItem = (tab: string) => () => {
    this.setState(() => (this.state.activeTab!==tab && {activeTab: tab}))
  }
  render() {
    return (
      <div>
        <div className={style.ignUSidebar}>
          <Logo />
          <ul className={style.sideBarMenu}>
            {this.categories.map(category => 
            <li
              key={category.key}
              className={this.state.activeTab === category.key && style.active}
              onClick={this.handleChangeSidebarItem(category.key)}
              >
              <img src={category.icon} alt="" className={style.icon}/>
              {category.title}
            </li>)}
          </ul>
        </div>
      </div>
    );
  }
}
