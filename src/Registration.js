import React, { Component } from 'react'
import axios from 'axios'
import Config from './Config'
import Registered from './Registered'

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

    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            errors: {}
        }
    }

    handleValidation(){
        let errors = {};
        let formIsValid = true;


        //first-Name
        if(!this.firstName.value){
            formIsValid = false;
            errors["first-name"] = "Cannot be empty";
        }

        if(typeof this.firstName.value !== "undefined"){
            if(!this.firstName.value.match(/^[a-zA-Z]+$/)){
                formIsValid = false;
                errors["first-name"] = "Only letters";
            }
            if(this.firstName.value.length<= 1){
                formIsValid = false;
                errors["first-name"] = "Must contain 2 or more letters";
            }
        }

    //last-Name
        if(!this.lastName.value){
            formIsValid = false;
            errors["last-name"] = "Cannot be empty";
        }

        if(typeof this.lastName.value !== "undefined"){
            if(!this.lastName.value.match(/^[a-zA-Z]+$/)){
                formIsValid = false;
                errors["last-name"] = "Only letters";
            }
            if(this.lastName.value.length<=1){
                formIsValid = false;
                errors["last-name"] = "Must contain 2 or more letters";
            }
        }
    //address
        if(!this.address.value){
            formIsValid = false;
            errors["address"] = "Cannot be empty";
        }

        //city
        if(!this.city.value){
            formIsValid = false;
            errors["city"] = "Cannot be empty";
        }

        if(typeof this.city.value !== "undefined"){
            if(!this.city.value.match(/^[a-zA-Z]+$/)){
                formIsValid = false;
                errors["city"] = "Only letters";
            }
            if(this.city.value.length<=1){
                formIsValid = false;
                errors["city"] = "Must contain 2 or more letters";
            }
        }

        //state
        if(!this.stateID.value){
            formIsValid = false;
            errors["stateID"] = "Cannot be empty";
        }

        if(typeof this.stateID.value !== "undefined"){
            if(!this.stateID.value.match(/^[a-zA-Z]+$/)){
                formIsValid = false;
                errors["stateID"] = "Only letters";
            }
            if(this.stateID.value.length!==2){
                formIsValid = false;
                errors["stateID"] = "Must contain 2 letters";
            }
        }

        //zip
        if(!this.zip.value){
            formIsValid = false;
            errors["zip"] = "Cannot be empty";
        }

        if(typeof this.zip.value !== "undefined"){
            if(!this.zip.value.match(/^[0-9]*$/)){
                formIsValid = false;
                errors["zip"] = "Only numbers";
            }
            if(this.zip.value.length!==5){
                formIsValid = false;
                errors["zip"] = "Must contain 5 numbers";
            }
        }

        //country
        if(!this.country.value){
            formIsValid = false;
            errors["country"] = "Cannot be empty";
        }

        if(typeof this.country.value !== "undefined"){
            if(!this.country.value !=="US"){
                formIsValid = false;
                errors["country"] = "Must be US";
            }
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    submit(e){
        e.preventDefault();
        if(this.handleValidation()){
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


            // axios.post(Config.apiBaseUrl+'user', formData)
            //     .then((result) => {
            //         console.log(result)
            //     });

            this.props.history.push("/Registered")
        }else{
            alert("Form has errors.")
        }


    }

    render() {
        return(
            <div>
                <h1>Register</h1>
                <div className="registration-form">
                    <label>First Name</label>
                    <input className="input-field"  id="first-name" type="text"  ref={(input) => this.firstName = input} />
                    <span style={{color: "red"}}>{this.state.errors["first-name"]}</span><br/>
                    <br/>
                    <label>Last Name</label>
                    <input className="input-field" id="last-name" type="text" ref={(input) => this.lastName = input} />
                    <span style={{color: "red"}}>{this.state.errors["last-name"]}</span><br/>
                    <br/>
                    <label>Address</label>
                    <input className="input-field" id="address" type="text" ref={(input) => this.address = input} />
                    <span style={{color: "red"}}>{this.state.errors["address"]}</span><br/>
                    <br/>
                    <label>Address 2</label>
                    <input className="input-field" id="address2" type="text" ref={(input) => this.address2 = input} />
                    <br/>
                    <label>City</label>
                    <input className="input-field" id="city" type="text" ref={(input) => this.city = input} />
                    <span style={{color: "red"}}>{this.state.errors["city"]}</span><br/>
                    <br/>
                    <label>State</label>
                    <input className="input-field" id="stateID" type="text" ref={(input) => this.stateID = input} />
                    <span style={{color: "red"}}>{this.state.errors["stateID"]}</span><br/>
                    <br/>
                    <label>Zip</label>
                    <input className="input-field" id="zip" type="text" ref={(input) => this.zip = input} />
                    <span style={{color: "red"}}>{this.state.errors["zip"]}</span><br/>
                    <br/>
                    <label>Country</label>
                    <input className="input-field" id="country" type="text" ref={(input) => this.country = input} />
                    <span style={{color: "red"}}>{this.state.errors["country"]}</span><br/>
                        <button className= "button" onClick={this.submit.bind(this)}>Submit</button>
                </div>
            </div>
        );
    }
}
export default Registration