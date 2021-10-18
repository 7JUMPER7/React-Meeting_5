import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './Header';
import Main from './Main';
import Sight from './Sight';
import Photos from './Photos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route path="/sight" component={Sight}></Route>
          <Route path="/photos/:photosCount(\d+)" component={Photos}></Route>
          <Route children={<h1>Not found</h1>}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
