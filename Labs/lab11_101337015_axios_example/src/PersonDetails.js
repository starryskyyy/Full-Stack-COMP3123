import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from "react";
import Button from 'react-bootstrap/Button';

export default function PersonDetails({ person }) {
    const [visible, setVisible] = useState(false);
    return (
        <Card className="mx-2 my-2 customCard">
            <Card.Header>{person.name.title} {person.name.first} {person.name.last} - {person.login.uuid}</Card.Header>
            <Card.Body>

                <Card.Text>
                    <div class="container m-0">
                        <div class='pic ml-0'>
                            <img src={person.picture.large} alt="photo"></img>
                            <br />
                            <br />
                            <Button class="btn" onClick={() => setVisible(!visible)} variant="light">Details</Button>

                        </div>
                        {visible &&
                            <div class="mx-5 my-2">
                                <div class="container mx-0 my-2">
                                    <div class="one">User name: </div>
                                    <div class="two">&ensp;{person.login.username}</div>
                                </div>
                                <div class="container mx-0 my-2">
                                    <div class="one">Gender:</div>
                                    <div class="two"> &ensp;{person.gender}</div>
                                </div>
                                <div class="container mx-0 my-2">
                                    <div class="one">Time Zone Description:</div>
                                    <div class="two"> &ensp;{person.location.timezone.description}</div>
                                </div>
                                <div class="container mx-0 my-2">
                                    <div class="one">Address:</div>
                                    <div class="two"> &ensp;{person.location.street.number} {person.location.street.name}, {person.location.city}, {person.location.state}, {person.location.country} - {person.location.postcode}</div>
                                </div>
                                <div class="container mx-0 my-2">
                                    <div class="one">Email:</div>
                                    <div class="two"> &ensp;{person.email}</div>
                                </div>
                                <div class="container mx-0 my-2">
                                    <div class="one">Birth Date and Age:</div>
                                    <div class="two"> &ensp;{person.dob.date} ({person.dob.age})</div>
                                </div>
                                <div class="container mx-0 my-2">
                                    <div class="one">Register Date:</div>
                                    <div class="two"> &ensp;{person.registered.date} </div>
                                </div>
                                <div class="container mx-0 my-2">
                                    <div class="one">Phone#:</div>
                                    <div class="two"> &ensp;{person.phone} </div>
                                </div>
                                <div class="container mx-0 my-2">
                                    <div class="one">Cell#:</div>
                                    <div class="two"> &ensp;{person.cell} </div>
                                </div>
                            </div>
                        }
                    </div>


                </Card.Text>

            </Card.Body>
        </Card>

    )
}