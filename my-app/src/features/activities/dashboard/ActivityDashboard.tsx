import React,{useState,useEffect} from 'react';
import {Grid,List} from 'semantic-ui-react';
import {IActivity} from '../../../app/model/activity';
import ActivityList from './ActivityList';
import ActivityDetails from './ActivityDetails';
interface IProps {
    activities? :IActivity[],
}

const ActivityDashboard:React.FC<IProps> =({activities})=>{
    return(
        <Grid>
            <Grid.Column width={10}>
                <ActivityList activities={activities}/>
            </Grid.Column>
            <Grid.Column width={6}>
                <ActivityDetails/>
            </Grid.Column>
        </Grid>
    );
}

export default ActivityDashboard