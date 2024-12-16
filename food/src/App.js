
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import AddChef from './components/AddChef';
import Admin from './components/Admin';
import Chefs from './components/Chefs';
import UserList from './components/UserList';
import Plats from './components/Plats';
import AddPlate from './components/AddPlate';
import PlateInfo from './components/PlateInfo';
import UserInfo from './components/UserInfo';
import ChefInfo from './components/ChefInfo';
import PlateEdit from './components/PlateEdit';
import UserEdit from './components/UserEdit';
import ChefEdit from './components/ChefEdit';

function App() {
  return (
    <BrowserRouter>
      <div classname="App">
        <Header />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addChef" element={<AddChef />} />
          <Route path="PlateInfo/:id" element={<PlateInfo/>} />
          <Route path="UserInfo/:id" element={<UserInfo/>} />
          <Route path="ChefInfo/:id" element={<ChefInfo/>} />

          <Route path="PlateEdit/:id" element={<PlateEdit/>} />
          <Route path="UserEdit/:id" element={<UserEdit/>} />
          <Route path="ChefEdit/:id" element={<ChefEdit/>} />
        

          {/* Admin Routes */}
          <Route path="/Admin" element={<Admin />}>
            <Route path="chefs" element={<Chefs />} />
            <Route path="users" element={<UserList />} />
            <Route path="Plates" element={<Plats />} />
            <Route path="Addplate" element={<AddPlate/>} />
            


          </Route>

      </Routes>
      {/* footer part start*/}
      <Footer />
    </div>
</BrowserRouter >

  );
}

export default App;
