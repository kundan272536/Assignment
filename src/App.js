// import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Layout from './Components/Layout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import LoginPage from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Layout/> }/>
        <Route path="blogs" element={<Blogs /> }/>
          <Route path= "home" element={<Home />} />
          <Route path= "contact" element={<Contact />} />
          <Route path= "login" element={<LoginPage />} />
          <Route path= "sign_up" element={<SignUp />} />

      </Routes>
  
         </div>
  );
}

export default App;
