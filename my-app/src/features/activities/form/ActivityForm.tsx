import React, { useState, FormEvent } from 'react'
import {Segment,Form, Button} from 'semantic-ui-react'
import { IActivity } from '../../../app/model/activity';
import { HtmlInputrops } from 'semantic-ui-react/dist/commonjs/generic';

interface IProps {
    editMode:boolean
    activity:IActivity|null,
    setEditMode:(editMode:boolean)=>void,
}

const ActivityForm:React.FC<IProps> =({editMode,activity:initializeForSate,setEditMode}) =>{

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

    const checkActivity =(activity: IActivity) =>{
        if (activity.id==='') {
            return false;
        }
        return true
    }

    const [activity,setActivity] =useState<IActivity>(initializeForm); 
    
    const handleInputChange=(event:FormEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
        const {name,value}= event.currentTarget;
        setActivity({...activity, [name]:value});
    }

    const handleSubmit =() =>{
        console.log('NhienDm tesst demo submit');
    }


    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit}>
                <Form.Input onChange={handleInputChange} name="title" placeholder='Title' value={activity.title}/>
                <Form.TextArea rows={2} onChange={handleInputChange} name="description" placeholder='Description' value={activity.desscription}/>
                <Form.Input onChange={handleInputChange} name="category" placeholder='Category' value={activity.category}/>
                <Form.Input onChange={handleInputChange} name="date"  type='date' placeholder='Date' value={activity.date}/>
                <Form.Input onChange={handleInputChange} name="venue" placeholder='Venue' value ={activity.venue}/>
                {editMode && checkActivity(activity)  ? <Button floated='right' positive type='submit' content='Edit'/>
                            :<Button floated='right' positive type='submit' content='Create'/>
                }
                <Button floated='right' onClick={()=>setEditMode(false)} positive type='button' content='Cancel'/>
            </Form>
        </Segment>
    );

};

export default ActivityForm