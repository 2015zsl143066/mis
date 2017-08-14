import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Login from './routes/Login';
import Sucess from './routes/Sucess';
import Change from './routes/Change';
import Detail from './routes/Detail';
import Search from './routes/Search';
import Label from './routes/Label';
import Outer from './routes/Outer';
import Inner from './routes/Inner';
import Inner2 from './routes/Inner2';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/login" component={Login} />
      <Route path="/sucess" component={Sucess}/>




      <Route path="/" component={Outer}>
        <Route path="/a" component={Inner}/>
        <Route path="/b" component={Inner2}/>
        <Route path="/label" component={Label}/>
        <Route path="/change" component={Change}/>
        <Route path="/change/detail" component={Detail}/>
        <Route path="/search" component={Search}/>
      </Route>


    </Router>
  );
}

export default RouterConfig;
