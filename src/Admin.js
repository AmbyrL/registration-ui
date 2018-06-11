import React, { Component } from 'react'
import axios from "axios/index";
import User from './User'
import Config from './Config'
class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {users: []}
    }
    componentWillMount(){
        axios.get(Config.apiBaseUrl+'users')
            .then((result) => {
                this.setState({users: result.data});
            });
    }
    render() {
        let users = this.state.users.map(user => {
            user.key = user.id;
            return <User {...user} />
        });
        return (
            <div className="admin-form">
                <h1>Registered Users Report</h1>
                <table style={{border:"1px solid black"}}>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Address 2</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip</th>
                            <th>Country</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Admin