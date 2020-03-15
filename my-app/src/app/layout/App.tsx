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
  const [editMode,setEditMode] =useState(false);
 
  const handleEditMode =(editMode:boolean) =>{
    setEditMode(editMode);
  }

  const handleSelectActivitis =(id:string) =>{
    setEditMode(false);
    setSelectActivities(activities!.activities.filter(a=>a.id===id)[0]);
  }

  const handleOpenFormCreate =() =>{
      setSelectActivities(null);
      setEditMode(true);
  }

  useEffect(()=>{
    axios.get<IState>("http://localhost:56915/api/activity")
          .then(response=>{
              setactivities(response.data);
          });
  },[])

  return (
    <div>
      <Navbar openCreateFrom ={handleOpenFormCreate}/>
      <Container style={{marginTop:'7em'}}>
        <List>
            <ActivityDashboard 
              activities={activities?.activities} 
              setSelectActivities={handleSelectActivitis} 
              selectActivities={selectActivities}
              editMode={editMode}
              setEditMode ={handleEditMode}
              setSelectedActivity={setSelectActivities}
            />
        </List>
      </Container>
    </div>
  );
}
export default App;
