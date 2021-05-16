import React from 'react';

import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'
import PrivateRoute from 'src/components/PrivateRoute';
import './scss/style.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));
function App() {

    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <PrivateRoute path="/" component={TheLayout}  />
            </Switch>
          </React.Suspense>
      </HashRouter>
    )
    // render={props => isAuthenticated ? <TheLayout {...props}/> :  <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
}

export default App;
