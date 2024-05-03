import './Style/global.scss';
import Sidenav from "./components/Sidenav";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Test from "./components/Test";
import Institute from "./components/Institute";
import Welfareadw from "./components/Welfareadw";
import Education from "./components/Education";
import Login from './components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard/Dashboard';
import Main from './components/Main/Main';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Admin from './components/Admin/Admin';


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" exact element={<Main />}></Route>
          <Route path="/login" exact element={<Login />}></Route>
          <Route path="/Contact" exact element={<Contact />}></Route>
          <Route path="/Test" exact element={<Test />}></Route>
          <Route path="/Institute" exact element={<Institute />}></Route>
          <Route path="/Welfareadw" exact element={<Welfareadw />}></Route>
          <Route path="/Education" exact element={<Education />}></Route>
          <Route path="/StudentProfile" exact element={<Home />}></Route>
          <Route path="/dashboard" exact element={<Dashboard />}></Route>
          <Route path="/admin" exact element={<Admin />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
