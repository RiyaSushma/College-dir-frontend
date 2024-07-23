import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import StudentPage from './components/StudentPage';
import FacultyPage from './components/FacultyPage';
import AdministratorPage from './components/AdministratorPage';
import StudentPersonal from './components/StudentPersonal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Login/> } />
          <Route exact path="/studentPage" element={ <StudentPersonal/> }/>
          <Route exact path="/facultyPage" element= {<FacultyPage/> }/>
          <Route exact path="/administratorPage" element= {<AdministratorPage/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
