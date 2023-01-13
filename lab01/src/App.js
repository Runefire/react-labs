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
import Task05 from "./Task05/Task05";
import Task06 from "./Task06/Task06";
import Task07 from "./Task07/Task07";
import Task08 from "./Task08/Task08";

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
        <Route path="/task05" element={<Task05/>}/>
        <Route path="/task06" element={<Task06/>}/>
        <Route path="/task07" element={<Task07/>}/>
        <Route path="/task08" element={<Task08/>}/>
      </Routes>
    </Router>
  );
}

export default App;