import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './style.css'
import  {List,Container } from 'semantic-ui-react';
import {IActivity, IListActivity} from '../model/activity';
import Navbar from '../../features/nav/Navbar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import agent from '../api/agent'

const App =() =>{
  const [activities,setActivities] =useState<IListActivity>({activities:[],count:0});
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
    agent.Activities.create(activity)
          .then(()=>{
              setActivities(preState=>({...preState, activities: [...preState.activities, activity]}));
              setSelectActivities(activity);
              setEditMode(false);
          })
  }

  const handleEditACtivity =(activity:IActivity) =>{
    agent.Activities.update(activity)
        .then(()=>{
          setActivities(preState=>({...preState,activities:[...preState.activities.filter(a=>a.id !== activity.id), activity]}))
          setSelectActivities(activity);
          setEditMode(false);
        });
  }

  const handleDeleteActivity =(id:string) =>{
    agent.Activities.delete(id)
          .then(()=>{
              setActivities(preState=>({...preState,activities:[...preState.activities.filter(a=>a.id !==id)]}))
          })
  }

  useEffect(()=>{
      agent.Activities.list()
            .then(response=>{
                setActivities(response);
            })
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
