import React from 'react';
import './App.css';
import Row from "./Row/Row"
import request from "./request"
import Banner from "./Banner/Banner";
import Nav from './Nav/Nav';

function App() {
  return (
    <div className="app">
      {/* Nav Bar */}
      <Nav />
      {/* Banner */}
      <Banner />
      <Row  isLargeRow title="Netflix Originals" fetchUrl={request.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={request.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries}/>
    </div>
  );
}

export default App;