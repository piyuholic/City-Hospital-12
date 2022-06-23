import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Container/Home/Home';
import Department from './Container/Department/Department';
import Doctors from './Container/Doctors/Doctors';
import About from './Container/About/About';
import Contact from './Container/Contact/Contact';
import Login from './Container/Login/Login';
import Form_1 from './Container/Forms/Form';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>  
      <Header />
      <Switch>
        <Route exact path={"/"} component={Home}/>
        <Route exact path={"/department"} component={Department}/>
        <Route exact path={"/doctors"} component={Doctors}/>
        <Route exact path={"/about"} component={About}/>
        <Route exact path={"/contact"} component={Contact}/>
        <Route exact path={"/login"} component={Login}/>
        <Route  exact path={"/form"} component={Form_1}/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
