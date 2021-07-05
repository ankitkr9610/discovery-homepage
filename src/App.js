import React from 'react';
import './App.css';
import NavBar from './Components/Template/NavBar/NavBar';
import Carousel from './Components/Template/Carousel/Carousel';
import Genre from './Components/Template/Genre/Genre';
import WatchLearn from './Components/Template/WatchLearn/WatchLearn';
function App() {
  return (
    <div className="App">
        <NavBar />
        <Carousel />
        <Genre />
        <WatchLearn />
    </div>
  );
}

export default App;
