import React, { Component } from "react"
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

const INITIAL_VALUE = {
    email: "",
    name: "",
    address: "",
    address2: "",
    city: "",
    province: "",
    postal: "",
    data: {}

}

export default class DataEntryForm extends Component {

    constructor(props) {
        super(props)
        this.state = { ...INITIAL_VALUE }
        this.provinces = ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfounland and Labrador",
            "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"]

    }

    onValueChanged = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {

        event.preventDefault()
        const { email, name, address, address2, city, province, postal } = this.state;

        this.setState({
            data: {
                email,
                name,
                address,
                address2,
                city,
                province,
                postal
            }
        });

    }

    render = () => {
        return (
            <>
                <div>
                    <h1>Data Entry Form</h1>
                    <form>
                        <div class="fields">
                            <label for="email">Email</label>
                            <input value={this.state.email} onChange={event => this.onValueChanged(event)} type="email" id="email" name="email" placeholder="Enter email" required />
                        </div>
                        <div class="fields flds-margin">
                            <label for="name">Name</label>
                            <input value={this.state.name} onChange={event => this.onValueChanged(event)} type="text" id="name" name="name" placeholder="Full Name" required />
                        </div>


                        <label for="address">Address</label>
                        <input value={this.state.address} onChange={event => this.onValueChanged(event)} type="text" id="address" name="address" placeholder="1234 Main St" required />

                        <label for="address2">Address 2</label>
                        <input value={this.state.address2} onChange={event => this.onValueChanged(event)} type="text" id="address2" name="address2" placeholder="Apartment, studio, or floor" required />

                        <div class="inp-fields">
                            <label for="city">City</label>
                            <input value={this.state.city} onChange={event => this.onValueChanged(event)} type="text" id="city" name="city" placeholder="City" required />
                        </div >
                        <div class="inp-fields flds-margin">
                            <label for="province">Province</label>
                            <select value={this.state.province} onChange={event => this.onValueChanged(event)} id="province" name="province" required>
                                <option value="" selected="selected" disabled="disabled" >Choose...</option>
                                {
                                    this.provinces.map(province => (
                                        <option>{province}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div class="inp-fields flds-margin">
                            <label for="postal">Postal Code</label>
                            <input value={this.state.postal} onChange={event => this.onValueChanged(event)} type="text" id="postal" name="postal" placeholder="Postal Code" required />
                        </div >
                        <label class="terms">
                            <input type="checkbox" required name="terms" />Agree <u>Terms & Conditions?</u>
                        </label>

                        <input onClick={this.handleSubmit} type="submit" value="Submit" />
                    </form>
                    <br></br>
                    <h1 class="output">Email: {this.state.data.email}</h1>
                    <h1 class="output">Full Name: {this.state.data.name}</h1>
                    <h1 class="output">Address: {this.state.data.address} {this.state.data.address2}</h1>
                    <h1 class="output">City: {this.state.data.city}</h1>
                    <h1 class="output">Province: {this.state.data.province}</h1>
                    <h1 class="output">Postal Code: {this.state.data.postal}</h1>
                </div>

            </>
        )
    }

}