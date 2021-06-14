
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import ProjectSummary from "./pages/ProjectSummary/ProjectSummary";

import RunPipeline from "./pages/RunPipeline/RunPipeline";
import ExecutionSummary from "./pages/ExecutionSummary/ExecutionSummary";


function App() {
  return (
    <div className="App">
      <Header/>
      <div className="content">
      <Switch>
     
        <Route exact path="/project" component={ProjectSummary}/>
     
        <Route exact path="/runpipeline" component={RunPipeline}/>
        <Route exact path="/execution" component={ExecutionSummary}/>
      
        <Route exact path="" component={ProjectSummary}/>
      </Switch>
      </div>
    
    </div>
 
  );
}

export default App;
