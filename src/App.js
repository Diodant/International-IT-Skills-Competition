import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import MainContent from './components/MainContent';
import Navigation from './components/Navigation';
import AboutUs from './components/AboutUs';
import Position from './components/Position';
import Criteria from './components/Criteria';
// import Jury from './components/Jury';
import Winners from './components/Winners';
// import ArticlesList from './components/ArticlesList';
// import Article from './components/Article';
import Footer from './components/Footer';
// import JoinUsForm from './components/JoinUsForm';
import Contacts from './components/Contacts';
import './App.css';
import './components/flaticon.css';

const App = () => {

  return (
    <Router>
      <div >
        <Navigation />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/position" element={<Position />} />
          <Route path="/criteria" element={<Criteria />} />
          <Route path="/winners" element={<Winners />} />
          {/* <Route path="/documents" element={<Documents />} />
          <Route path="/statute" element={<Statute />} />
          <Route path="/codex" element={<Codex />} />
          <Route path="/medal" element={<Medal />} />
          <Route path="/members" element={<Members />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/publication/:id" element={<PublicationDetail />} /> */}
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};


export default App;
