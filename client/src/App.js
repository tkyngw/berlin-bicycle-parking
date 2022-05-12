import './App.css';
import { Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage';
import StartPage from './pages/StartPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SuggestionPage from './pages/SuggestionPage';
import StationList from './components/StationList';
import AuthPage from './pages/AuthPage'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/start' element={ <StartPage /> } />
        <Route path='/about' element={ <AboutPage /> } />
        <Route path='/suggestion' element={ <SuggestionPage /> } />
        <Route path='/contact' element={ <ContactPage />} />
        <Route path='/startionlist' element={ <StationList /> } />
        <Route path='/signup' element={ <AuthPage/>} />
      </Routes>
    </div>
  );
}

export default App;
