import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
import { Header, List } from 'semantic-ui-react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:5001/api/activities').then(response => {
      setActivities(response.data);
    })
  }, [])


  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities' />
      <List>
          {activities.map((activity: any) => (
            <List.Item key={activity.id}>
              {activity.title}
              </List.Item>
          ))}
      </List>
    </div>
  );
}

export default App;
