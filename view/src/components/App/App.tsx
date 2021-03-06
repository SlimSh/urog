import * as React from 'react';
import { getAllUsers, removeUser, signUp } from './../../rest/user';
import User from './../User';
import FormBuilder from './../FormBuilder';
import {addUserForm, SignIn} from '../../forms/User';
// import Logo from './../ControllPanel/Logo';
import * as style from './App.scss';
import { Sidebar } from 'semantic-ui-react';
import SidebarD from '../Sidebar';
import ControllPanel from '../ControllPanel';
import Body from '../Body';
export default class App extends React.Component<{},{users: any, user: any}> {
    public users: any;
 
    constructor(props: any) {


        super(props);
        this.state = {
            users: [],
            user: {}
        }
        
        getAllUsers().then(i=> {
            this.users = i;
            this.setState({users: this.users})
        });
    }

    deleteUser = (_id: string) => () => {
        removeUser(_id).then((users)=> {
            if(Array.isArray(users)) {
                this.setState({users: users})
            }
        });
    }

    renderUsers () {
        let userElement = Array.isArray(this.state.users) && this.state.users.map((user: any) => {
            const {name, age, email} = user;
            return <li key={user._id}>
                     <User user = {user} deleteUser = {this.deleteUser} />
                   </li>
        });
        return userElement;
    }

    filterList = (text: any) => {
        let filterUsers = this.state.users.filter( (user: any) => {
            return user.name.toLowerCase().search(text.toLowerCase()) !== -1
        });
        filterUsers = text.length === 0 ? this.users : filterUsers;
        this.setState({
            users: filterUsers
        })
    }

    addUser = (data: any) => () => {
        signUp(data).then((users)=> {
            if(Array.isArray(users.data)) {
                this.setState({users: users.data})

            }
        });
    }

    render(){
        console.log(style)
        return (
            <div className={style.appWrapper}>
             <SidebarD />
             <div>
                <ControllPanel />
                <Body users={this.renderUsers()} />
             </div>
                {/* <FormBuilder {...addUserForm(this.addUser)} className={style.listBg}/>
                <FormBuilder {...SignIn(this.addUser)}/> */}
            </div>
        )
    }
}