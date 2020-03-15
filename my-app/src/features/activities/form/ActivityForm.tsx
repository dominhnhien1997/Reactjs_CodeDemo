import React, { useState } from 'react'
import {Segment,Form, Button} from 'semantic-ui-react'
import { IActivity } from '../../../app/model/activity';

interface IProps {
    setEditMode:boolean
    activity:IActivity|null
}

const ActivityForm:React.FC<IProps> =({setEditMode,activity:initializeForSate}) =>{

    const initializeForm =() =>{
        if (initializeForSate) {
            return initializeForSate;
        } else {
            const model :IActivity= {
                title:'',
                category:'',
                venue:'',
                desscription:'',
                id:'',
                date:''
            };
           return model;
        }
    }

    const [activity,setActivity] =useState(initializeForm); 

    if(setEditMode && activity) {
        return(
            <Segment>
                <Form>
                    <Form.Input placeholder='Title'/>
                    <Form.TextArea rows={2} placeholder='Description'/>
                    <Form.Input placeholder='Category'/>
                    <Form.Input type='date' placeholder='Date'/>
                    <Form.Input placeholder='City'/>
                    <Form.Input placeholder='Venue'/>
                    <Button floated='right' positive type='submit' content='Edit'/>
                    <Button floated='right' positive type='button' content='Cancel'/>
                </Form>
            </Segment>
        );
    }
    return (
        <Segment>
            <Form>
                <Form.Input placeholder={'Title'}/>
                <Form.TextArea rows={2} placeholder='Description'/>
                <Form.Input placeholder='Category'/>
                <Form.Input type='date' placeholder='Date'/>
                <Form.Input placeholder='City'/>
                <Form.Input placeholder='Venue'/>
                <Button floated='right' positive type='submit' content='Create'/>
                <Button floated='right' positive type='button' content='Cancel'/>
            </Form>
        </Segment>
    );
};

export default ActivityForm