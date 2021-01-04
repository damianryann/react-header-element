import React from 'react';

import HeaderElement from '../../packages/index';

import './App.scss';
import logo from '../../assets/images/logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={logo} className="App-logo" alt="logo" />

              <HeaderElement
                isFunctional={true}
                className="this-class"
                id="This is an ID"
                title="This is a functional h1 Header (Header element) without fallback"
                value="h1"
                fallBack="h2"
                style={{
                  color: 'red',
                  fontWeight: 'bold',
                  textDecoration: 'underline'
                }}
              />

              <HeaderElement
                isFunctional={false}
                className="name-here"
                id="This is an ID but on a class"
                title="This is a decorative h1 Header (Header class) without fallback"
                value="h1"
                fallBack="h2"
              />

              <HeaderElement
                isFunctional={true}
                title="This is a functional h2 Header (Header element) with fallback"
                fallBack="h2"
              />

              <HeaderElement
                isFunctional={false}
                title="This is a decorative h2 Header (Header class) with fallback"
                fallBack="h2"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
