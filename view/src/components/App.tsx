import * as React from 'react';

export default class App extends React.Component {
    id: number;
    name: string;

    constructor(name: any) {
        super(name);
        this.name = name;
    }

    myName()
    {
        return this.name;
    }
}
