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
  FabricCanvas, GraphClass, Listener, Brush, Effect,
  Serialize, CommonUse
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
                <Route exact path={platform + 'listener'} component={Listener} />
                <Route exact path={platform + 'brush'} component={Brush} />
                <Route exact path={platform + 'effect'} component={Effect} />
                <Route exact path={platform + 'serialize'} component={Serialize} />
                <Route exact path={platform + 'commonUse'} component={CommonUse} />
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
