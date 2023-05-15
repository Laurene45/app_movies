import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import MovieDetails from './components/MovieDetails/MovieDetails';
import PageNotFound from './components/Error/Error';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
  return (
    <>
    <div className="app">
      <Router>
        <Header></Header>
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home />}exact />
            <Route path="/movie/:imdbID" element={<MovieDetails />} />
            <Route component={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
    </>
  );
};

export default App;
