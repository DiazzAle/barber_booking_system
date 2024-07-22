import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
function App() {
 return (
<div className="App">
<Switch>
<Route path="/" exact component={Home} />
<Route path="/login" component={Login} />
<Route path="/register" component={Register} />
</Switch>
</div>
 );
}
export default App;