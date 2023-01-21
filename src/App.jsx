import { Routes, Route } from 'react-router-dom';


import { Navbar } from './components/Navbar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home />  } />
        <Route path='/login' element={  <Login /> } />
      </Routes>
    </>
  )
}

export default App
