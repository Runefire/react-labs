import {useState} from "react";
import {Button, Input, Layout, Row, Space} from "antd";
import {AiFillDelete} from "react-icons/ai";

const TeamsList = () => {
  const [teams, setTeams] = useState([]);
  const [name, setName] = useState('');
  
  const addHandler = () => {
    if (name !== '') {
      let id;
      teams.length === 0 ? id = 1 : id = teams[teams.length - 1].id + 1;
  
      teams.length === 0 ? setTeams([{id: id, name: name}]) : setTeams([...teams, {id: id, name: name}]);
    }
    
    setName('');
  }
  
  const removeHandler = (id) => {
    setTeams(teams.filter(t => t.id !== id));
  }
  
  return (
    <Layout style={{background: 'white'}}>
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
              <Space key={t.id} style={{marginTop: '5px'}}>
                <li style={{width: '120px', marginLeft: '-100px'}}>{t.name}</li>
                <Button onClick={() => removeHandler(t.id)}>
                  <AiFillDelete color="red"/>
                </Button>
              </Space>
            )}
          </ul>
        </Space>
      </Row>
    </Layout>
  );
};

export default TeamsList;
