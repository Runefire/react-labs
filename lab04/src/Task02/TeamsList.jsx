import reducer from './reducer';

import {useEffect, useState, useReducer} from "react";
import {Button, Input, Layout, Row, Space} from "antd";

import Team from './Team';

const TeamsList = () => {
  const [teams, dispatch] = useReducer(reducer, null);
  
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isChange, setIsChange] = useState(false);
  
  const addHandler = () => {
    if (name !== '') {
      const id = (teams && teams.length > 0) ? teams[teams.length - 1].id + 1 : 0;
      
      dispatch({type: 'ADD_TEAM', id, name});
    }
    
    setName('');
    setIsChange(true);
  }
  
  const removeHandler = (id) => {
    dispatch({type: 'REMOVE_TEAM', id});
    setIsChange(true);
  }
  
  useEffect(() => {
    const storageTeams = JSON.parse( localStorage.getItem('teams') );
    
    if (storageTeams)
      dispatch({type: 'POPULATE_TEAMS', payload: storageTeams || []});
  }, []);
  
  useEffect(() => {
    if (teams !== null)
      localStorage.setItem('teams', JSON.stringify(teams));
  }, [teams]);
  
  return (
    <Layout style={{background: 'white' , marginTop: '15px'}}>
      <Row>
        <Space>
          <Input value={name} placeholder="Chelsea FC" onChange={(e) => setName(e.target.value)} style={{width: '300px'}}/>
  
          <Button onClick={addHandler} type="primary">Add</Button>
        </Space>
      </Row>
      
      <Row style={{marginTop: '10px'}}>
        <Space>
          <ul style={{width: '300px',  listStyle: 'none'}}>
            {teams && teams.map(t =>
              <Team key={t.id} id={t.id} name={t.name} removeHandler={removeHandler} change={isChange} message={setMessage}/>
            )}
          </ul>
        </Space>
  
        <div>
          {message}
        </div>
      </Row>
    </Layout>
  );
};

export default TeamsList;
