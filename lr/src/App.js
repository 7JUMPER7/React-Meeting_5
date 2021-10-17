import './App.css';
import HeadsOrTails from './HeadsOrTails';
// import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import Main from './Main';
// import About from './About';
// import NotFound from './NotFound';
// import Contacts from './Contacts';
// import Products from './Products';
// import Nav from './Nav';
// import Branches from './Branches';
// import Branch from './Branch';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Nav></Nav>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route strict path="/about" component={About}></Route>
          <Route path="/contacts" component={Contacts}></Route>
          <Route path="/products" component={Products}></Route>
          <Route exact path="/branches" component={Branches}></Route>
          <Route path="/branches/:name" component={Branch}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </BrowserRouter> */}
      <HeadsOrTails></HeadsOrTails>
    </div>
  );
}

export default App;
