import './App.css';
import {Route} from 'react-router-dom'
import Navbar from './Compontent/Navbar';
import Home from './Compontent/pages/Home';
import Rider from './Compontent/pages/Rider';
import Delivery from './Compontent/pages/Delivery';
import Food from './Compontent/pages/Food';
import Cycling from './Compontent/pages/Cycling';
import Fleet from './Compontent/pages/Fleet';
import Business from './Compontent/pages/Business';
import Driver from './Compontent/pages/Driver';



function App() {
  return (
    <>
   <Navbar/>
   <Route exact path="/" component={Home}></Route>
   <Route exact path="/driver" component={Driver}></Route>
   <Route exact path="/rider" component={Rider}></Route>
   <Route exact path="/delivery" component={Delivery}></Route>
   <Route exact path="/food" component={Food}></Route>
   <Route exact path="/cycling" component={Cycling}></Route>
   <Route exact path="/fleet" component={Fleet}></Route>
   <Route exact path="/business" component={Business}></Route>
    </>
  );
}

export default App;
