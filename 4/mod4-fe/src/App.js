// Css is imported
// check fav icon , i changed it to sales force here.
import './App.css';
// all JS files are imported and routers are imported from react-router-dom.
import AddSales from './Pages/AddSales';
import TodayRevenue from './Pages/TodayRevenue';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Top5Sales from './Pages/Top5Sales';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Home';
import HomeCover from './Pages/cover';

function App() {
  return (
    <div className="App">
      {/* navbar is on the top */}
      <NavBar />
      {/* these are the routing parts which is connected to display  */}
      <Router>
        <Routes>
          {/* Home page is added which will be get into place when click on sales app, it just displayes nothing rather than the logo */}
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/AddSales' element={<AddSales />}></Route>
          <Route exact path='/TDR' element={<TodayRevenue />}></Route>
          <Route exact path='/T5S' element={<Top5Sales />}></Route>
          <Route exact path='/Cover' element={<HomeCover />}></Route>
          <Route exact path='/Login' element={<Login />}></Route>
          <Route exact path='/Register' element={<Register />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
