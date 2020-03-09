import React from 'react';
import {IActivity} from '../../../app/model/activity';
import {Card, Image, CardContent, Icon, Button} from 'semantic-ui-react'

// interface IProp {
//     activity :IActivity,
// }

const ActivityDetails=()=>{
    return(
        <Card fluid>
            <Image src="https://s1.media.ngoisao.vn/resize_580/news/2020/01/12/ngoc-trinh-05-ngoisao.vn-w620-h457.jpg" wrapped ui={false}/>
            <Card.Content>
                <Card.Header>Title</Card.Header>
                <Card.Meta>
                    <span className='date'>Date</span>
                </Card.Meta>
                <Card.Description>
                    Description  
                </Card.Description>
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