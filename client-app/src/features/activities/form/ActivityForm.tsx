import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";

export default function ActivityForm() {
    return (
        <Segment clearing>
            <Form.Input placeholder='Title' style={{marginBottom: '10px'}}/>
            <Form.Input placeholder='Description' style={{marginBottom: '10px'}}/>
            <Form.Input placeholder='Category' style={{marginBottom: '10px'}}/>
            <Form.Input placeholder='Date' style={{marginBottom: '10px'}}/>
            <Form.Input placeholder='City' style={{marginBottom: '10px'}}/>
            <Form.Input placeholder='Venue' style={{marginBottom: '10px'}}/>
            <Button float='right' positive type='submit' content='Submit'/>
            <Button float='right' type='button' content='Cancel'/>
        </Segment>
    )
}