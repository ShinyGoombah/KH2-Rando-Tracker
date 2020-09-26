import * as React from 'react';
import ReactDOM from 'react-dom';
import { Tab } from 'semantic-ui-react';
import ItemTrackerTwo from './components/ItemTracker2';
import ItemTrackerSettings from './components/ItemTrackerSettings';
import ImportantChecksTracker from './components/ImportantChecksTracker';

const itemTrackerPanes = [
  { menuItem: 'Item Tracker', render: () => <Tab.Pane><ItemTrackerTwo /></Tab.Pane>},
  { menuItem: 'Settings', render: () => <Tab.Pane><ItemTrackerSettings /></Tab.Pane>}
]

const importantChecksPanes = [
  { menuItem: 'Important Checks', render: () => <Tab.Pane><ImportantChecksTracker /></Tab.Pane>}
]
ReactDOM.render(
  <React.StrictMode>
    <div className="main-grid">
      <div className="important-checks-tracker">
        {/* <Tab panes={importantChecksPanes} /> */}
      </div>
      <div className="item-tracker">
        <Tab panes={itemTrackerPanes} />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
