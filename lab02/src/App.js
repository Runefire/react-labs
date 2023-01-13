import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Main from "./Main";
import Task01 from "./Task01/Task01";
import Task02 from "./Task02/Task02";
import Task03 from "./Task03/Task03";
import Task04 from "./Task04/Task04";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" exact element={<Main/>}/>
        <Route path="/" exact element={<Main/>}/>
        <Route path="/home" exact element={<Main/>}/>
  
        <Route path="/task01" element={<Task01/>}/>
        <Route path="/task02" element={<Task02/>}/>
        <Route path="/task03" element={<Task03/>}/>
        <Route path="/task04" element={<Task04/>}/>
      </Routes>
    </Router>
  );
}

export default App;