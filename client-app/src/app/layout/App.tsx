import axios from 'axios';
import { useState, useEffect, Fragment } from 'react';
import React from 'react';
import { Header, List, Container } from 'semantic-ui-react';
import { Activity } from '../models/Activity';
import NavBar from './navbar';

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
        <List>
            {activities.map(activity => (
              <List.Item key={activity.id}>
                {activity.title}
                </List.Item>
            ))}
        </List>
      </Container>
    </Fragment>
  );
}

export default App;
