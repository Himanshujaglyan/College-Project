import LandingPage from './LandingPage';
import Login from './Login';
import Signup from './Signup';
import './App.css'
import { Routes, Route } from 'react-router';
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <LandingPage />
    </>
  )
}

export default App;
