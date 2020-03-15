import React from 'react';
import {IActivity} from '../../../app/model/activity';
import {Card, Image, CardContent, Icon, Button} from 'semantic-ui-react'

interface IProp {
    activity :IActivity|null,
}

const ActivityDetails:React.FC<IProp>=({activity})=>{
    return(
        <Card fluid>
            <Image src="https://s1.media.ngoisao.vn/resize_580/news/2020/01/12/ngoc-trinh-05-ngoisao.vn-w620-h457.jpg" wrapped ui={false}/>
            <Card.Content>
                <Card.Header>{activity!.title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{activity!.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity!.desscription}  
                </Card.Description>
                <Card.Meta>
                    <span className='date'>{activity!.venue}</span>
                </Card.Meta>
                <Card.Meta>
                    <span className='date'>{activity!.category}</span>
                </Card.Meta>
            </Card.Content>
            <CardContent extra>
                <Button.Group widths={2}>
                    <Button basic color="blue" content="Edit"/>
                    <Button basic color="grey" content="Cancel"/>
                </Button.Group>
            </CardContent>
        </Card>
    );
}
export default ActivityDetails