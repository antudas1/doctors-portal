import logo from './logo.svg';
import './App.css';
import Home from './Components/Page/Home/Home';
import Header from './Components/Page/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import About from './Components/Page/About/About';
import ContactUs from './Components/Page/ContactUs/ContactUs';
import Apointment from './Components/Page/About/Apointment/Apointment';
import Login from './Components/Page/Login/Login';
import Register from './Components/Page/Login/Register/Register';
import Reviews from './Components/Page/Reviews/Reviews';


function App() {
  return (
    <div className="App px-12">
      <Header></Header>
     <Routes>
       <Route path='/'element={<Home></Home>}></Route>
       <Route path='/home'element={<Home></Home>}></Route>
       <Route path='/about'element={<About></About>}></Route>
       <Route path='/contact'element={<ContactUs></ContactUs>}></Route>
       <Route path='/apointment'element={<Apointment></Apointment>}></Route>
       <Route path='/reviews'element={<Reviews></Reviews>}></Route>
       <Route path='/login'element={<Login></Login>}></Route>
       <Route path='/register'element={<Register></Register>}></Route>
       
     </Routes>
    
    </div>
  );
}

export default App;
