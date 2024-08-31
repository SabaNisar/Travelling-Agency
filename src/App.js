import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/login';
import Home from './Components/home';
import AddHoneymoon from './Components/AddHoneymoon';
import MainHome from './layout/MainHome';
import AddHotel from './Components/AddHotel';
import ViewAllHotels from './Components/ViewAllHotels';


function App() {
  return (
    <div>
         <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Home" element={<MainHome />} >
                <Route path='AddHotel' element={<AddHotel/>}/>
                <Route path='ViewAllHotels' element={<ViewAllHotels/>}/>
                <Route path='AddHoneymoon' element={<AddHoneymoon/>}/>
                
                
                </Route>

            </Routes>
        </Router>
    </div>
  );
}

export default App;
