import React from 'react';

// Router import 
import { BrowserRouter as Router, Redirect, Routes, Route, BrowserRouter } from 'react-router-dom';

// Pages
import {
    ContactPage,
    HomePage,
    OffertePage,
    PrivacyPage
} from './pages';

// Utilities
import { RouteWithLayout } from './utilities';

// Routes
import * as Paths from './routes';

import './app.scss';
import {PageLayout, HomePageLayout} from './layout';
import { PrivacyPolicy } from './components';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path={Paths.HOME} element={<HomePage/>} />
                    <Route exact path={Paths.CONTACT} element={<ContactPage/>} />
                    <Route exact path={Paths.OFFERTE} element={<OffertePage/>} />
                    <Route exact path={Paths.PRIVACY} element={<PrivacyPage/>} />

                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;