import * as React from 'react';
import ReactDOM from 'react-dom';
import { Tab } from 'semantic-ui-react';
import ItemTrackerTwo from './components/ItemTracker2';
import ItemTrackerSettings from './components/ItemTrackerSettings';

const panes = [
  { menuItem: 'Item Tracker', render: () => <Tab.Pane><ItemTrackerTwo /></Tab.Pane>},
  { menuItem: 'Settings', render: () => <Tab.Pane><ItemTrackerSettings /></Tab.Pane>}
]
ReactDOM.render(
  <React.StrictMode>
    <div className="main-grid">
      <div className="item-tracker">
        <Tab panes={panes} />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
