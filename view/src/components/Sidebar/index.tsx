import * as React from "react";
import Logo from "./Logo";
import MenuCategories from "./MenuCategories";
import * as style from "./../Sidebar/Sidebar.scss";

export default function(props: any) {
  return (
    <div>   
    <div className={style.ignUSidebar}>
      <Logo className={style.logoComponent} />
      <MenuCategories className={style.categoryList} />
    </div>
    </div>
  );
}
