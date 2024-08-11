import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import MainContent from './components/MainContent';
import Navigation from './components/Navigation';
import AboutUs from './components/AboutUs';
import Position from './components/Position';
import Criteria from './components/Criteria';
import Judges from './components/Judges';
import Winners from './components/Winners';
import ArticlesList from './components/ArticlesList';
import Article from './components/Article';
import ApplicationForm from './components/ApplicationForm';
import Footer from './components/Footer';
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
          <Route path="/judges" element={<Judges />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/articles/:id" element={<Article />} />
          <Route path="/apply" element={<ApplicationForm />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};


export default App;
