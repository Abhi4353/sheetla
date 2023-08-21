import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Maingallery from '../src/pages/Maingallery';
import Courses from '../src/pages/Courses'
import Faculty from './pages/Faculty';
import Contact from './pages/Contact';
import Privateadminlogin from './components/loginroutes/Privateadminlogin';
import Privateuserlogin from './components/loginroutes/Privateuserlogin';
import Admindashboard from './components/admin/Admindashboard';
import Dashboard from './components/user/Dashboard';
import Addstudent from './components/admin/components/pages/Addstudent';
import Newcourse from './components/admin/components/pages/Newcourse';
import Newstaff from './components/admin/components/pages/Newstaff';
import Newgalleryimage from './components/admin/components/pages/Newgalleryimage';
import Newenquries from './components/admin/components/pages/Newenquries';
function App() {
  return (
  <>
  <Router>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path="/aboutus" element={<About/>}/>
      <Route exact path="/registration" element={<Registration/>}/>
      <Route exact path="/maingallery" element={<Maingallery/>}/>
      <Route exact path="/courses" element={<Courses/>}/>
      <Route exact path="/faculty" element={<Faculty/>}/>
      <Route exact path="/contactus" element={<Contact/>}/>
      <Route exact path="/login" element={<Login/>}/>

      <Route path="/" element={<Privateadminlogin/>}>
        <Route path="/admindashboard" element={<Admindashboard/>}/>
        <Route path="/studentregistration" element={<Addstudent/>}/>
        <Route path='/newcourse' element={<Newcourse/>}/>
        <Route path='/newstaffmember' element={<Newstaff/>}/>
        <Route path="/addimage" element={<Newgalleryimage/>}/>
        <Route path="/newenquries" element={<Newenquries/>}/>
      </Route>

      <Route path='/' element={<Privateuserlogin/>}>
        <Route path='/userdashboard' element={<Dashboard/>}/>
      </Route>
    </Routes>
  </Router>
    </>
  );
}

export default App;
