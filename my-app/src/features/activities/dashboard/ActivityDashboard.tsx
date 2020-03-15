import React,{useState,useEffect} from 'react';
import {Grid,List} from 'semantic-ui-react';
import {IActivity} from '../../../app/model/activity';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';

interface IProps {
    activities? :IActivity[],
    setSelectActivities:(id:string)=>void,
    selectActivities: IActivity|null
}

const ActivityDashboard:React.FC<IProps> =({activities, setSelectActivities, selectActivities})=>{
    return(
        <Grid>
            <Grid.Column width={10}>
                <ActivityList activities={activities} setSelectActivities={setSelectActivities}/>
            </Grid.Column>
            <Grid.Column width={6}>
                {selectActivities && <ActivityDetails activity={selectActivities}/>}
                <ActivityForm/>
            </Grid.Column>
        </Grid>
    );
}

export default ActivityDashboard