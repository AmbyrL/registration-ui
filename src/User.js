import React, { Component } from 'react'
class User extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.firstName}</td>
                <td>{this.props.lastName}</td>
                <td>{this.props.address}</td>
                <td>{this.props.address2}</td>
                <td>{this.props.city}</td>
                <td>{this.props.state}</td>
                <td>{this.props.zip}</td>
                <td>{this.props.country}</td>
                <td>{this.props.date}</td>
            </tr>

        );
    }
}
export default User