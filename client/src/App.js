import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home/Home.jsx';
import RegisterUser from './components/RegisterUser/RegisterUser.jsx';
import RegisterEvent from './components/RegisterEvent/RegisterEvents';
import Detail from './components/Detail/Detail';
import PageNotFound from './components/PageNotFound/PageNotFound';
import ProfileUser from './components/ProfileUser/ProfileUser.jsx';
import PanelAdmin from './components/Admin/adminPanel'
import Favorites from './components/Favorites/Favorites';
import TicketVoucher from './components/TicketVoucher/TicketVoucher.jsx';

function App() {
  return (
    <BrowserRouter>
      <div>
          <Routes>
            <Route path='/' element= {<Home/>}/>
            <Route path= '/:id' element={<Detail/>}/>
            <Route path='/perfil/panelAdmin' element={<PanelAdmin/>}/>
            <Route exact path='/registrar/:usuario' element= {<RegisterUser/>}/>
            <Route exact path='/perfil/:id' element={<ProfileUser/>}/>
            <Route exact path='/ticket/:id' element={<TicketVoucher/>}/>
            {/* <Route exact path='' element= {<Ruta/>}/> 
            <Route exact path='' element= {<Ruta/>}/>  */} 
            <Route exact path='/events' element={<RegisterEvent/>}/>
            <Route path='/events' element={<RegisterEvent/>}/>
            <Route path='/favs' element={<Favorites/>}/>
            <Route path='*' element={<PageNotFound/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;