import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = () => (
  <div id="title" className="head" tabIndex="5">
    <h1 className="head" tabIndex="5">GoodBye From just Yuvaraj!</h1>
    <h2 className="head" tabIndex="5">Founder of CodeFromScratch</h2>
  </div>
);

const Heading = () => (
  <div id="heading" className="head" tabIndex="5">
    <h1 className="head" tabIndex="5">Will see You Soon !!!</h1>
    <Title />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Heading />);
