import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './style.css'
import  {List,Container } from 'semantic-ui-react';
import {IActivity} from '../model/activity';
import Navbar from '../../features/nav/Navbar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

interface IState {
  activities :IActivity[],
  count:number
}

const App =() =>{
  const [activities,setactivities] =useState<IState>();
  const [selectActivities,setSelectActivities] =useState<IActivity|null>(null);

  const handleSelectActivitis =(id:string) =>{
    setSelectActivities(activities!.activities.filter(a=>a.id===id)[0]);
  }

  useEffect(()=>{
    axios.get<IState>("http://localhost:56915/api/activity")
          .then(response=>{
              setactivities(response.data);
          });
  },[])

  return (
    <div>
      <Navbar/>
      <Container style={{marginTop:'7em'}}>
        <List>
            <ActivityDashboard activities={activities?.activities} setSelectActivities={handleSelectActivitis} selectActivities={selectActivities}/>
        </List>
      </Container>
    </div>
  );
}
export default App;
