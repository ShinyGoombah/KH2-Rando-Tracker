import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import '../public/semantic/build/semantic.min.css';
import ItemTracker from './components/ItemTracker';

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <div className="item-tracker">
        <ItemTracker />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
