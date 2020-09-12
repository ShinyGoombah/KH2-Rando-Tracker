import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
/* import '../public/semantic/build/semantic.min.css'; */
import ItemTrackerTwo from './components/ItemTracker2';

ReactDOM.render(
  <React.StrictMode>
    <div className="main-grid">
      <div className="item-tracker">
        <ItemTrackerTwo />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
