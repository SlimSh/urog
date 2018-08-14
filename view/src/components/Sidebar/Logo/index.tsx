import * as React from 'react';
import * as style from './logo.scss';

export default function (props: any) {
    return <img src='./src/assets/images/logo.svg' className={style.logoImg + ' ' + props.className} />
}