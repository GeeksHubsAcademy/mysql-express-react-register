import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import 'antd/dist/antd.css'
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import Register from './containers/Register/Register';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact/>
        
        <Route path="/register" component={Register} exact/>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
