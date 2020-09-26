import React from 'react';
import { List, Divider } from 'semantic-ui-react';

type ImportantChecksTrackerState = {
  activeWorld: number;
  worlds: {
    index: number;
    icon: string;
    totalImportantChecks: number;
    foundImportantChecks: number;
  }[];
  unFoundChecks: {
    key: string;
    image: string;
    found: boolean;
  }[];
}

export default class ImportantChecksTracker extends React.Component<{}, ImportantChecksTrackerState> {
  constructor(props: any) {
    super(props);

    this.state = {
      worlds: [
        {
          index: 0,
          icon: 'worlds/Simulated TT',
          totalImportantChecks: 0,
          foundImportantChecks: 0
        },
        {
          index: 1,
          icon: 'worlds/Twilight Town',
          totalImportantChecks: 0,
          foundImportantChecks: 0
        },
        {
          index: 2,
          icon: 'worlds/Hollow Bastion',
          totalImportantChecks: 0,
          foundImportantChecks: 0
        },
        {
          index: 3,
          icon: 'worlds/Land of Dragons',
          totalImportantChecks: 0,
          foundImportantChecks: 0
        },
        {
          index: 4,
          icon: 'worlds/Beast Castle',
          totalImportantChecks: 0,
          foundImportantChecks: 0
        },
        {
          index: 5,
          icon: 'worlds/Olympus Coliseum',
          totalImportantChecks: 0,
          foundImportantChecks: 0
        },
        {
          index: 6,
          icon: 'worlds/Port Royal',
          totalImportantChecks: 0,
          foundImportantChecks: 0
        },
        {
          index: 7,
          icon: 'worlds/Agrabah',
          totalImportantChecks: 0,
          foundImportantChecks: 0
        },
        {
          index: 8,
          icon: 'worlds/Halloween Town',
          totalImportantChecks: 0,
          foundImportantChecks: 0
        },
        {
          index: 9,
          icon: 'worlds/Pride Lands',
          totalImportantChecks: 0,
          foundImportantChecks: 0
        },
        {
          index: 10,
          icon: 'worlds/Disney Castle',
          totalImportantChecks: 0,
          foundImportantChecks: 0
        },
        {
          index: 11,
          icon: 'worlds/Space Paranoids',
          totalImportantChecks: 0,
          foundImportantChecks: 0
        },
        {
          index: 12,
          icon: 'worlds/The World That Never Was',
          totalImportantChecks: 0,
          foundImportantChecks: 0
        },
        {
          index: 13,
          icon: 'worlds/Atlantica',
          totalImportantChecks: 0,
          foundImportantChecks: 0
        },
        {
          index: 14,
          icon: 'worlds/100 Acre Wood',
          totalImportantChecks: 0,
          foundImportantChecks: 0
        },
        {
          index: 15,
          icon: 'soraheart',
          totalImportantChecks: 0,
          foundImportantChecks: 0
        },
        {
          index: 16,
          icon: 'drive/final',
          totalImportantChecks: 0,
          foundImportantChecks: 0
        }
      ],
      unFoundChecks: [
        { key: 'report1', image: 'secret_reports.png', found: false},
        { key: 'report2', image: 'secret_reports.png', found: false},
        { key: 'report3', image: 'secret_reports.png', found: false},
        { key: 'report4', image: 'secret_reports.png', found: false},
        { key: 'report5', image: 'secret_reports.png', found: false},
        { key: 'report6', image: 'secret_reports.png', found: false},
        { key: 'report7', image: 'secret_reports.png', found: false},
        { key: 'report8', image: 'secret_reports.png', found: false},
        { key: 'report9', image: 'secret_reports.png', found: false},
        { key: 'report10', image: 'secret_reports.png', found: false},
        { key: 'report11', image: 'secret_reports.png', found: false},
        { key: 'report12', image: 'secret_reports.png', found: false},
        { key: 'report13', image: 'secret_reports.png', found: false},
        { key: 'fire1', image: 'magic/fire.png', found: false},
        { key: 'fire2', image: 'magic/fire.png', found: false},
        { key: 'fire3', image: 'magic/fire.png', found: false},
      ],
      activeWorld: -1
    }
  }

  handleWorldSelection = (e: any, titleProps: any) => {
    const { activeWorld } = this.state;

    const newActiveWorld = titleProps.index;

    if (activeWorld === newActiveWorld) {
      this.setState({ activeWorld: -1 });
    } else {
      this.setState({ activeWorld: newActiveWorld });
    }
  }

  public render(): React.ReactNode {
    const {
      activeWorld,
      worlds,
      unFoundChecks
    } = this.state;

    return (
      <div className="important-check-window">
        <List>
          {
            worlds.map(world => (
              <List.Item>
                <img className="important-check-world-icon" src={`public/images/${world.icon}.png`} />
              </List.Item>
            ))
          }
        </List>
        <Divider vertical/>
      </div>
    );
  }
}