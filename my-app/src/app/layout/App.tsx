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
  const [activities,setActivities] =useState<IState>({activities:[],count:0});
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

  const handleCreateActivity = (activity:IActivity) =>{
    setActivities(preState=>({...preState, activities: [...preState.activities, activity]}));
    setSelectActivities(activity);
    setEditMode(false);
  }

  const handleEditACtivity =(activity:IActivity) =>{
    setActivities(preState=>({...preState,activities:[...preState.activities.filter(a=>a.id !== activity.id), activity]}))
    setSelectActivities(activity);
    setEditMode(false);
  }

  const handleDeleteActivity =(id:string) =>{
    setActivities(preState=>({...preState,activities:[...preState.activities.filter(a=>a.id !==id)]}))
  }

  useEffect(()=>{
    axios.get<IState>("http://localhost:56915/api/activity")
          .then(response=>{
            setActivities(response.data);
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
              createActivity ={handleCreateActivity}
              editActivity ={handleEditACtivity}
              deleteActivity ={handleDeleteActivity}
            />
        </List>
      </Container>
    </div>
  );
}
export default App;
