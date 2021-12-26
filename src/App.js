import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Mainpage from './components/Main'
import Publications from './components/publicatonsFolder/Publications'
import Images from './components/Images'
import Contacts from './components/contactsFolder/Contacts'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav className='header'>
            <Link to='/main'>Main</Link>
            <Link to='/publications'>Publications</Link>
            <Link to='/images'>Images</Link>
            <Link to='/contacts'>Contacts</Link>
          </nav>
        </div>
        <Routes>
          <Route path='/main' element={<Mainpage />}></Route>
          <Route path='/publications' element={<Publications />}></Route>
          <Route path='/images' element={<Images />}></Route>
          <Route path='/contacts' element={<Contacts />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
