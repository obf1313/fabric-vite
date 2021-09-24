/**
 * @description: 路由
 * @author: cnn
 * @createTime: 2020/7/16 15:42
 **/
import React, { createContext, useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ErrorBoundary } from '@components/index';
import {
  NotFound, Home, Welcome, CanvasIntro, FabricIntro,
  FabricCanvas, GraphClass, Listener
} from '@views/index';
import { platform } from '@utils/CommonVars';
import { homeInit, homeReducer } from '@views/home/HomeReducer';

export const HomeContext = createContext({ homeState: homeInit, homeDispatch: (value: any) => {} });

const App = () => {
  const [homeState, homeDispatch] = useReducer(homeReducer, homeInit);
  return (
    <HomeContext.Provider value={{ homeState, homeDispatch }}>
      <Router>
        <Switch>
          <Home>
            <Switch>
              <ErrorBoundary>
                <Route exact path={platform} component={Welcome} />
                <Route exact path={platform + 'canvasIntro'} component={CanvasIntro} />
                <Route exact path={platform + 'fabricIntro'} component={FabricIntro} />
                <Route exact path={platform + 'fabricCanvas'} component={FabricCanvas} />
                <Route exact path={platform + 'graphClass'} component={GraphClass} />
                <Route exact path={platform + 'Listener'} component={Listener} />
              </ErrorBoundary>
              <Route component={NotFound} />
            </Switch>
          </Home>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </HomeContext.Provider>
  );
};
export default App;
