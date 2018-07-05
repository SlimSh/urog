import * as React from 'react';
import { Button } from 'semantic-ui-react'
import IUser from '../interfaces/User.interface';
import { TransitionablePortal } from 'semantic-ui-react';
import { Transition } from 'semantic-ui-react';

export default class UsersList extends React.Component<any, any> {
    public message: string;

    constructor(props: any){
        super(props);
        this.message = 'Some me string';
        this.state = {
            visible: true
        };
    }
    handleClick = () => {
        this.setState({
            visible: !this.state.visible 
        });
    }
    render(){
        return (
            <div>
            <Button onClick = {this.handleClick}>Click Here</Button>
            <TransitionablePortal open={this.state.visible}  transition={{ animation:'scale', duration: 300 }}>
                <h1>{this.message}</h1>
            </TransitionablePortal>
            <Transition duration={ 100 } visible={this.state.visible}>
                <p>some text will be her</p>
            </Transition>
            </div>
        );
    }
}