import './componants/home/Home.css'
import './componants/home/Body.css'
import './componants/loginpage/Login.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import LandingPage from './componants/LandingPage';
import HomeNav from './componants/home/HomeNav';
import FirstBody from './componants/home/FirstBody';
import Login from './componants/loginpage/Login';
import Mobiles from './componants/mobiles/Mobiles';
import './componants/mobiles/mobiles.css'
function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomeNav/>}>
        <Route index element={<LandingPage/>}/>      
        <Route path='/FirstBody' element={<FirstBody/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Mobiles' element={<Mobiles/>}/>
      </Route>
    

    
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
