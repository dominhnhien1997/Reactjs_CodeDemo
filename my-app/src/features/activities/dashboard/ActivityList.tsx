import React from 'react'
import { Item, Image, Button, Label, Segment } from 'semantic-ui-react'
import {IActivity} from '../../../app/model/activity';
import moment from 'moment';

interface IProps {
    activities? :IActivity[],
    setSelectActivities:(id:string)=>void
}

const ActivityList:React.FC<IProps> = ({activities, setSelectActivities}) =>{
    return(
        <Segment clearing>
            <Item.Group divided>
                {activities?.map(activity=>(
                    <Item key={activity.id}>
                        {/* <Item.Image size='tiny' src=''/> */}
                        <Item.Content>
                            <Item.Header as='a'>{activity.title}</Item.Header>
                            <Item.Meta>
                                {moment(activity.date).format('MMMM Do YYYY')}
                            </Item.Meta>
                            <Item.Description>
                                <div>{activity.desscription}</div>
                                <div>{activity.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button 
                                    floated='right' 
                                    content='View'
                                    color='blue'
                                    onClick={()=>setSelectActivities(activity.id)}/>
                                <Label basic content={activity.category}/>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
       
    );
}

export default ActivityList