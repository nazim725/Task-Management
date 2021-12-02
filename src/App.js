import logo from './logo.svg';
import './App.css';
import AddTask from './Components/AddTask/AddTask';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import InprogressTask from './Components/InprogressTask/InprogressTask';
import CompleteTask from './Components/Completetask/CompleteTask';
import Home from './Components/Home/Home';
import Navigation from './Components/Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArchiveTask from './Components/ArchiveTask/ArchiveTask';
import bg from '../src/images/sectionBg.png'
import NewTask from './Components/NewTask/NewTask';

function App() {
  return (
    <div className="main" style={{ background: `url(${bg})`, height: '700px' }}>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>


          <Route path="/addTask">
            <AddTask></AddTask>
          </Route>
          <Route path="/inprogressTask">
            <InprogressTask></InprogressTask>
          </Route>
          <Route path="/completeTask">
            <CompleteTask></CompleteTask>
          </Route>
          <Route path="/archiveTask">
            <ArchiveTask></ArchiveTask>
          </Route>
          <Route path="/newTask">
            <NewTask></NewTask>
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
