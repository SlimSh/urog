import * as React from 'react';
import { Button } from 'semantic-ui-react'
export default class User extends React.Component<{user:any, deleteUser: any},{}>{
    render(){
        const {name, age, email, _id } = this.props.user;
        return (
            <div>
                <h1>{name}</h1>
                <h3>Age: {age}</h3>
                <h3>Email: {email}</h3>
                <Button onClick = { this.props.deleteUser(_id) }>Remove User</Button>
            </div>
        );
    }
}