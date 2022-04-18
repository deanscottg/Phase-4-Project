import { useEffect,useState } from 'react'
import {  Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import LogIn from './LogIn'
import SignUp from './SignUp'
import Tutorial from './Tutorial'
import NavBar from './NavBar'
import BoxerAccountPage from './BoxerAccountPage'
import BoxerNews from './BoxerNews'
import WorkoutLog from './WorkoutLog'

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Login" element={<LogIn />} />
        <Route path="Signup" element={<SignUp />} />
        <Route path="MyPage" element={<BoxerAccountPage />} />
        <Route path="TheWork" element={<Tutorial />} />
        <Route path="MyPage" element={<BoxerAccountPage />} />
        <Route path="Workout-log" element={<WorkoutLog />} />




      </Routes>
    </div>
  );
}

export default App;
