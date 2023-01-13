import {useNavigate} from "react-router-dom";
import {Button} from "antd";
import Game from "./Game";

const Task04 = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <h3>Task04</h3>
  
      <Game/>
      
      <Button style={{marginTop: '20px'}} onClick={() => navigate('/')}>To home</Button>
    </div>
  );
};

export default Task04;