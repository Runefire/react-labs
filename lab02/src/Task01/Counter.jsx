import {useState} from "react";
import {Layout, Row, Space, Button} from "antd";

const Counter = ({init, min, max}) => {
  const [count, setCount] = useState(init);
  
  const handlePlus = () => {
    if (count < max)
      setCount(count + 1)
  }
  
  const handleMinus = () => {
    if (count > min)
      setCount(count - 1)
  }
  
  const handleReset = () => {
    setCount(init)
  }
  
  return (
    <Layout style={{background: 'white', marginTop: "50px"}}>
      <Row>
        Поточний рахунок: {count}
      </Row>
      
      <Row style={{width: "500px", marginTop: "20px"}}>
        <Space size="small">
          <Button onClick={handlePlus} type="default" color="green">+</Button>
          <Button onClick={handleMinus} type="default" danger>-</Button>
          <Button onClick={handleReset} type="primary">Reset</Button>
        </Space>
      </Row>
    </Layout>
  );
};

Counter.defaultProps = {
  init: 0,
  max: 10,
  min: -10
}

export default Counter;