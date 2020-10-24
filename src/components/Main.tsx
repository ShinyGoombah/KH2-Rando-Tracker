import React from 'react';
import ItemTrackerTwo from './ItemTracker2';
import ImportantChecksTracker from './ImportantChecksTracker';
import TitleBar from './TitleBar';

type MainState = {
  currentSettings: any;
}

export default class Main extends React.Component<{}, MainState> {
  constructor(props: any) {
    super(props);

    this.state = {
      currentSettings: {
        activeTrackers: [
          {label: 'Important Checks Tracker', active: true},
          {label: 'Item Tracker', active: true}
        ],
        worldSettings: [
          { key: 'simTT', label: 'Simulated Twilight Town', active: true},
          { key: 'twilightTown', label: 'Twilight Town', active: true},
          { key: 'hollowBastion', label: 'Hollow Bastion', active: true},
          { key: 'hollowBastion2', label: 'Cavern of Remembrance', active: true},
          { key: 'landOfDragons', label: 'Land of Dragons', active: true},
          { key: 'beastCastle', label: 'Beasts Castle', active: true},
          { key: 'olympusColiseum', label: 'Olympus Coliseum', active: true},
          { key: 'portRoyal', label: 'Port Royal', active: true},
          { key: 'agrabah', label: 'Agrabah', active: true},
          { key: 'halloweenTown', label: 'Halloween Town', active: true},
          { key: 'prideLands', label: 'Pride Lands', active: true},
          { key: 'disneyCastle', label: 'Disney Castle', active: true},
          { key: 'disneyCastle2', label: 'Timeless River', active: true},
          { key: 'spaceParanoids', label: 'Space Paranoids', active: true},
          { key: 'twtnw', label: 'The World That Never Was', active: true},
          { key: 'atlantica', label: 'Atlantica', active: false},
          { key: 'hundredAcre', label: '100 Acre Wood', active: true}
        ],
        additionalSettings: [
          { key: 'absentSillhouettes', label: 'Absent Sillhouettes', active: true},
          { key: 'dataOrg', label: 'Data Organization', active: true},
          { key: 'ocCups', label: 'Olympus Cups', active: true},
          { key: 'hadesCup', label: 'Hades Cup', active: true},
          { key: 'lingeringWill', label: 'Lingering Will', active: true},
          { key: 'sephiroth', label: 'Sephiroth', active: true},
          { key: 'promiseCharm', label: 'Promise Charm', active: true}
        ]
      }
    }
  }

  componentDidMount = () => {
    this.getSettings();
  }

  getSettings = () => {
    const retrievedSettings = localStorage.getItem('trackerSettings');

    if (retrievedSettings) {
      this.setState({ currentSettings: JSON.parse(retrievedSettings) });
    }
  }

  updateSettings = (newSettings: any) => {
    localStorage.setItem('trackerSettings', JSON.stringify(newSettings));
    this.setState({ currentSettings: newSettings });
  }

  render(): React.ReactNode {
    const {
      currentSettings
    } = this.state;

    return (
      <div>
        <TitleBar currentSettings={currentSettings} updateSettings={this.updateSettings} />
        <div className="main-grid">
          <div style={currentSettings.activeTrackers[0].active ? {} : {display: 'none'}} className="important-checks-tracker">
            <ImportantChecksTracker currentSettings={currentSettings} />
          </div>
          <div style={currentSettings.activeTrackers[1].active ? {} : {display: 'none'}} className="item-tracker">
            <ItemTrackerTwo currentSettings={currentSettings} />
          </div>
        </div>
      </div>
    );
  }
}