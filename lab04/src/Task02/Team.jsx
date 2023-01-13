import {useEffect} from "react";

import {Button, Space} from "antd";
import {AiFillDelete} from "react-icons/ai";

const Team = ({id, name, removeHandler, message, change}) => {
  useEffect(() => {
    change ? message(`Team with name "${name}" have been added.`) : message(``);
    
    return () => message(`Team with name "${name}" have been deleted.`);
  }, []);
  
  return (
    <Space key={id} style={{marginTop: '5px'}}>
      <li style={{width: '120px', marginLeft: '-100px'}}>{name}</li>
      <Button onClick={() => removeHandler(id)}>
        <AiFillDelete color="red"/>
      </Button>
    </Space>
  );
};

export default Team;
