import {useNavigate} from "react-router-dom";
import TeamsList from "./TeamsList";
import {Button} from "antd";

const Task02 = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <h3>Task02</h3>
      
      <TeamsList/>
  
      <Button onClick={() => navigate('/')}>To home</Button>
    </div>
  );
};

export default Task02;