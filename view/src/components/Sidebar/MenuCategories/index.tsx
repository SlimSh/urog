import * as React from "react";
import Button from '../../UI/Button';

export default function(props: any) {
 const categories = [
     'Запчасти',
     'Культуры',
     'Техника'
 ]
  return (
    <div className={`${props.className}`}>
        {categories.map((category, k) => <Button key={k} title={category} />)}
    </div>
  );
}
