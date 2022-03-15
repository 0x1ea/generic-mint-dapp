import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './pages/App';
import { Web3ReactProvider } from '@web3-react/core'
import { getLibrary } from './config/web3'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from './pages/Home/index.js';
import { About } from './pages/About';
import { Airdrop } from './pages/Airdrop';

ReactDOM.render(
  
  <React.StrictMode>
    <BrowserRouter>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="airdrop" element={<Airdrop />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Route>
        </Routes>
      </Web3ReactProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

