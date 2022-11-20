import React, { Component } from 'react'
import axios from 'axios'
import PersonDetails from './PersonDetails'

export default class PersonList extends Component {

    //Define state default values
    state = {
        persons: []
    }

    //Component Lifecycle Callback
    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
            .then(res => {
                console.log(res.data);
                const persons = res.data.results;
                this.setState({ persons });
            })


    }

    render() {
        console.log(this.state.persons);
        return (
            <>

                {
                    this.state.persons.map(person => (
                        <>
                            <PersonDetails key={person.uuid} person={person} />
                        </>
                    ))
                }
            </>
        )
    }
}
