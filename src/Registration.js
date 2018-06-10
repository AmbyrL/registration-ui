import React, { Component } from 'react'
import axios from 'axios'
import Config from './Config'
class Registration extends Component {
    firstName;
    lastName;
    address;
    address2;
    city;
    stateID;
    zip;
    country;
    regDate;


    submit(){
        let formData = new FormData();
        formData.append("firstName", this.firstName.value);
        formData.append("lastName", this.lastName.value);
        formData.append("address", this.address.value);
        formData.append("address2", this.address2.value);
        formData.append("city", this.city.value);
        formData.append("stateID", this.stateID.value);
        formData.append("zip", this.zip.value);
        formData.append("country", this.country.value);
        formData.append("regDate", new Date().toDateString());


        axios.post(Config.apiBaseUrl+'user', formData)
            .then((result) => {
                console.log(result)
            });
    }

    render() {
        return (
            <div className="registration-form">
                <input id="first-name" type="text" ref={(input) => this.firstName = input} />
                <label>First Name</label>
                <br/>
                <input id="last-name" type="text" ref={(input) => this.lastName = input} />
                <label>Last Name</label>
                <br/>
                <input id="address" type="text" ref={(input) => this.address = input} />
                <label>Address</label>
                <br/>
                <input id="address2" type="text" ref={(input) => this.address2 = input} />
                <label>Address 2</label>
                <br/>
                <input id="city" type="text" ref={(input) => this.city = input} />
                <label>City</label>
                <br/>
                <input id="stateID" type="text" ref={(input) => this.stateID = input} />
                <label>State</label>
                <br/>
                <input id="zip" type="text" ref={(input) => this.zip = input} />
                <label>Zip</label>
                <br/>
                <input id="country" type="text" ref={(input) => this.country = input} />
                <label>Country</label>
                    <button onClick={this.submit.bind(this)}>Submitty Boi</button>
            </div>
        );
    }
}
export default Registration