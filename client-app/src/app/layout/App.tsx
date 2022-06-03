import axios from 'axios';
import { useState, useEffect, Fragment } from 'react';
import React from 'react';
import { Header, List, Container } from 'semantic-ui-react';
import { Activity } from '../models/Activity';
import NavBar from './navbar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities').then(response => {
      setActivities(response.data);
    })
  }, []) 

  return (
    <Fragment>
      <NavBar/>
      <Container style={{marginTop: '7em'}}>
        <ActivityDashboard activities={activities}/>
      </Container>
    </Fragment>
  );
}

export default App;
