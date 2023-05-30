import './App.css';
import { BrowserRouter,Routes, Route, Switch } from 'react-router-dom'
import React,{ Component} from 'react';
import { render } from 'react-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import SocialFollow from './components/SocialFollow';
import 'bootstrap/dist/css/bootstrap.min.css';

// import MidSection from './components/MidSection';
import Home from './components/Home';
import InitialPage from './components/InitialPage';
import Login from './components/Login';
import UniversityProfessors  from './components/UniversityProfessors'
import FindUniProfessors from './components/FindUniProfessors';
import AllProfessors from './components/AllProfessors';
import RateSchool from './components/RateSchool';
import KnowProfessor from './components/KnowProfessor';
import RateProfessor from './components/RateProfessor';

const App = () => (
  <BrowserRouter>
  <div>
    <Home/>
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route path="/initialPage" component={InitialPage} />
      <Route path="/universityprofessors" component={UniversityProfessors}/>
      <Route path="/findUniProfessors" component={FindUniProfessors}/>
      <Route path="/allProfessors" component={AllProfessors}/>
      <Route path="/rateSchool" component={RateSchool}/>
      <Route path="/knowProfessor" component={KnowProfessor}/>
      <Route path="/rateProfessor" component={RateProfessor}/>
    </Switch>
  </div>
  </BrowserRouter>
)
export default App
