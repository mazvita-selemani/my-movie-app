import React from 'react';
import './styles.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from "./HomePage";
import PlayMoviePage from "./PlayMoviePage";

const App = () => {

 return (
<Router>
 <Routes>
  <Route  path="/" element={<HomePage/>} />
  <Route path="/play" element={<PlayMoviePage/>} />
 </Routes>
</Router>
 )

};

export default App;