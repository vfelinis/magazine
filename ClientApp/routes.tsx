import * as React from 'react';
import { Router, Route, HistoryBase } from 'react-router';
import { Layout } from './components/Layout';
import Grid from './components/Grid';

export default <Route component={ Layout }>
    <Route path='/' components={{ body: Grid }} />
</Route>;

// Enable Hot Module Replacement (HMR)
if (module.hot) {
    module.hot.accept();
}
