import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Candidatelist from './candidate/candidateList';
import Vacancylist from './vacancy/vacancyList';
import Addjovvacancy from './addJob';


const Routing = () => {
  return (
   <Router>
    <Routes>
        <Route path='/' element={<Candidatelist/>}/>
        <Route path='/vacancylist' element={<Vacancylist/>}/>
        <Route path='/addvacancy' element={<Addjovvacancy/>}/>
    </Routes>
   </Router>
  )
}

export default Routing