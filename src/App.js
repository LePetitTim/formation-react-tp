import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'

import store from './services/store';
import MainLayout from './layouts/Main';
import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';
import Loading from './components/Loading';

const Home = lazy(() => import('./views/Home'))
const List = lazy(() => import('./views/List'))
const Form = lazy(() => import('./views/Form'))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <MainLayout
            header={<MainHeader />}
            footer={<MainFooter />}>
            <Switch>
              <Route
                path="/"
                exact>
                <Suspense
                  fallback={<Loading />}>
                  <Home />
                </Suspense>
              </Route>
              <Route
                path="/list"
                exact>
                <Suspense
                  fallback={<Loading />}>
                  <List />
                </Suspense>
              </Route>
              <Route
                path="/create">
                <Suspense
                  fallback={<Loading />}>
                  <Form />
                </Suspense>
              </Route>
              <Route
                path="/edit/:id">
                <Suspense
                  fallback={<Loading />}>
                  <Form />
                </Suspense>
              </Route>
            </Switch>
          </MainLayout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
