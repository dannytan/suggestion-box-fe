import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StateProvider } from '../state';
import { INITIAL_STATE as SUGGESTION_INITIAL_STATE } from '../state/suggestion/reducers';
import reducers from '../state/reducers';
import BaseStyles from './base-styles';
import Content from '../components/content';
import Header from '../components/header';
import Home from '../views/home';

const Root = props => {
  const initialState = {
    suggestion: SUGGESTION_INITIAL_STATE,
  };
  return (
    <StateProvider initialState={initialState} reducer={reducers}>
      <BaseStyles />
      <Router>
        <>
          <Header />
          <Content>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </Content>
        </>
      </Router>
    </StateProvider>
  );
};

export default Root;
