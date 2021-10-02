import { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from '../src/router/router'
import './App.scss';

function App() {
  return (
    <Router>

    <div className="App">
      <Suspense fallback="...cargando">
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact
              component={route.component}
            />
          ))}
        </Switch>
      </Suspense>
    </div>
    </Router>
  );
}

export default App;
