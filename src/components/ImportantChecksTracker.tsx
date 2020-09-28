import React from 'react';
import { Grid } from 'semantic-ui-react';

type ImportantChecksTrackerState = {
  activeWorld: number;
  worlds: {
    index: number;
    active: boolean,
    icon: string;
    totalImportantChecks: number;
    foundImportantChecks: any[];
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
          active: false,
          icon: 'worlds/Simulated TT',
          totalImportantChecks: 0,
          foundImportantChecks: []
        },
        {
          index: 1,
          active: false,
          icon: 'worlds/Twilight Town',
          totalImportantChecks: 0,
          foundImportantChecks: []
        },
        {
          index: 2,
          active: false,
          icon: 'worlds/Hollow Bastion',
          totalImportantChecks: 0,
          foundImportantChecks: []
        },
        {
          index: 3,
          active: false,
          icon: 'worlds/Land of Dragons',
          totalImportantChecks: 0,
          foundImportantChecks: []
        },
        {
          index: 4,
          active: false,
          icon: 'worlds/Beast Castle',
          totalImportantChecks: 0,
          foundImportantChecks: []
        },
        {
          index: 5,
          active: false,
          icon: 'worlds/Olympus Coliseum',
          totalImportantChecks: 0,
          foundImportantChecks: []
        },
        {
          index: 6,
          active: false,
          icon: 'worlds/Port Royal',
          totalImportantChecks: 0,
          foundImportantChecks: []
        },
        {
          index: 7,
          active: false,
          icon: 'worlds/Agrabah',
          totalImportantChecks: 0,
          foundImportantChecks: []
        },
        {
          index: 8,
          active: false,
          icon: 'worlds/Halloween Town',
          totalImportantChecks: 0,
          foundImportantChecks: []
        },
        {
          index: 9,
          active: false,
          icon: 'worlds/Pride Lands',
          totalImportantChecks: 0,
          foundImportantChecks: []
        },
        {
          index: 10,
          active: false,
          icon: 'worlds/Disney Castle',
          totalImportantChecks: 0,
          foundImportantChecks: []
        },
        {
          index: 11,
          active: false,
          icon: 'worlds/Space Paranoids',
          totalImportantChecks: 0,
          foundImportantChecks: []
        },
        {
          index: 12,
          active: false,
          icon: 'worlds/The World That Never Was',
          totalImportantChecks: 0,
          foundImportantChecks: []
        },
        {
          index: 13,
          active: false,
          icon: 'worlds/Atlantica',
          totalImportantChecks: 0,
          foundImportantChecks: []
        },
        {
          index: 14,
          active: false,
          icon: 'worlds/100 Acre Wood',
          totalImportantChecks: 0,
          foundImportantChecks: []
        },
        {
          index: 15,
          active: false,
          icon: 'soraheart',
          totalImportantChecks: 0,
          foundImportantChecks: []
        },
        {
          index: 16,
          active: false,
          icon: 'driveorb',
          totalImportantChecks: 0,
          foundImportantChecks: []
        }
      ],
      unFoundChecks: [
        { key: 'report1', image: 'reports/report1', found: false},
        { key: 'report2', image: 'reports/report2', found: false},
        { key: 'report3', image: 'reports/report3', found: false},
        { key: 'report4', image: 'reports/report4', found: false},
        { key: 'report5', image: 'reports/report5', found: false},
        { key: 'report6', image: 'reports/report6', found: false},
        { key: 'report7', image: 'reports/report7', found: false},
        { key: 'report8', image: 'reports/report8', found: false},
        { key: 'report9', image: 'reports/report9', found: false},
        { key: 'report10', image: 'reports/report10', found: false},
        { key: 'report11', image: 'reports/report11', found: false},
        { key: 'report12', image: 'reports/report12', found: false},
        { key: 'report13', image: 'reports/report13', found: false},
        { key: 'fire1', image: 'magic/fire', found: false},
        { key: 'fire2', image: 'magic/fire', found: false},
        { key: 'fire3', image: 'magic/fire', found: false},
        { key: 'blizzard1', image: 'magic/blizzard', found: false},
        { key: 'blizzard2', image: 'magic/blizzard', found: false},
        { key: 'blizzard3', image: 'magic/blizzard', found: false},

        { key: 'thunder1', image: 'magic/thunder', found: false},
        { key: 'thunder2', image: 'magic/thunder', found: false},
        { key: 'thunder3', image: 'magic/thunder', found: false},

        { key: 'cure1', image: 'magic/cure', found: false},
        { key: 'cure2', image: 'magic/cure', found: false},
        { key: 'cure3', image: 'magic/cure', found: false},

        { key: 'reflect1', image: 'magic/reflect', found: false},
        { key: 'reflect2', image: 'magic/reflect', found: false},
        { key: 'reflect3', image: 'magic/reflect', found: false},

        { key: 'magnet1', image: 'magic/magnet', found: false},
        { key: 'magnet2', image: 'magic/magnet', found: false},
        { key: 'magnet3', image: 'magic/magnet', found: false},

        { key: 'chickenLittle', image: 'charms/baseball', found: false},
        { key: 'genie', image: 'charms/lamp', found: false},
        { key: 'stitch', image: 'charms/ukelele', found: false},
        { key: 'peterPan', image: 'charms/feather', found: false},

        { key: 'valorForm', image: 'drive/valor', found: false},
        { key: 'wisdomForm', image: 'drive/wisdom', found: false},
        { key: 'limitForm', image: 'drive/limit', found: false},
        { key: 'masterForm', image: 'drive/master', found: false},
        { key: 'finalForm', image: 'drive/final', found: false},

        { key: 'promiseCharm', image: 'proofpromise/promisecharm', found: false},
        { key: 'nonExistProof', image: 'proofpromise/nonExistentProof', found: false},
        { key: 'connectionProof', image: 'proofpromise/connectionProof', found: false},
        { key: 'peaceProof', image: 'proofpromise/tranquilProof', found: false},

        { key: 'tp1', image: 'tornpages', found: false},
        { key: 'tp2', image: 'tornpages', found: false},
        { key: 'tp3', image: 'tornpages', found: false},
        { key: 'tp4', image: 'tornpages', found: false},
        { key: 'tp5', image: 'tornpages', found: false},

        { key: 'secondChance', image: 'secondchance', found: false},
        { key: 'onceMore', image: 'oncemore', found: false},
      ],
      activeWorld: -1
    }
  }

  handleWorldSelection = (world: any) => {
    const { activeWorld } = this.state;

    const newActive = activeWorld === world.index ? -1 : world.index;

    this.setState({ activeWorld: newActive });
  }

  handleScroll = (event: any, world: any): void => {
    const { worlds } = this.state;
    
    if (event.deltaY < 0) {
      world.totalImportantChecks = world.totalImportantChecks + 1;
    } else {
      if (world.totalImportantChecks > 0) {
        world.totalImportantChecks = world.totalImportantChecks - 1;
      }
    }
    worlds[world.index] = world;
    this.setState({ worlds });
  }

  handleUnfoundItemClick = (foundItem: any) => {
    const { unFoundChecks, activeWorld, worlds } = this.state;
    if (activeWorld !== -1) {
      foundItem.found = !foundItem.found;
      foundItem.worldIndex = worlds[activeWorld].index;    

      if (foundItem.found) {
        worlds[activeWorld].foundImportantChecks.push(foundItem);

        if (worlds[activeWorld].foundImportantChecks.length > worlds[activeWorld].totalImportantChecks) {
          worlds[activeWorld].totalImportantChecks = worlds[activeWorld].totalImportantChecks + 1;
        }
      }
    }

    const itemIndex = unFoundChecks.findIndex(check => check.key === foundItem.key);
    unFoundChecks[itemIndex] = foundItem;
    this.setState({ unFoundChecks, worlds });
  }

  removeFoundCheck = (item: any) => {
    const { unFoundChecks, worlds } = this.state;
    item.found = !item.found
    
    if (!item.found) {
      const checkIndex = worlds[item.worldIndex].foundImportantChecks.findIndex(check => check.key === item.key);

      worlds[item.worldIndex].foundImportantChecks.splice(checkIndex, 1);
      if (worlds[item.worldIndex].foundImportantChecks.length === worlds[item.worldIndex].totalImportantChecks - 1) {
        worlds[item.worldIndex].totalImportantChecks = worlds[item.worldIndex].totalImportantChecks - 1;
      }
    }

    const itemIndex = unFoundChecks.findIndex(check => check.key === item.key);
    unFoundChecks[itemIndex].found = false;
    this.setState({ unFoundChecks, worlds });
  }

  public render(): React.ReactNode {
    const {
      activeWorld,
      worlds,
      unFoundChecks
    } = this.state;

    return (
      <div className="important-check-window">
        <Grid columns={2} className="important-checks-grid-top">
          <Grid.Row>
            {
              worlds.map(world => {
                const totalString = world.totalImportantChecks.toString();
                const splitString = totalString.split('');
                if (world.totalImportantChecks < 10) {
                  return (
                    <Grid.Column>
                      <div className="important-check-world-grid"
                        onClick={(): void => {
                          this.handleWorldSelection(world);
                        }}
                        onWheel={(e: any) => { this.handleScroll(e, world)}}
                      >
                        <img
                          style={world.totalImportantChecks === 0 ? {display: 'none'} : {}}
                          className="world-icon-total-important-ones"
                          src={`public/images/numbers/${world.totalImportantChecks}.png`}
                        />
                        <img style={activeWorld === world.index ? {} : {opacity: '0.30'}} className="important-check-world-icon" src={`public/images/${world.icon}.png`} />
                      </div>
                      <Grid className="world-check-grid">
                        <Grid.Row>
                          {
                            world.foundImportantChecks.map(item => {
                              const itemIndex = world.foundImportantChecks.findIndex(check => check.key === item.key);
                              return (
                              <Grid.Column
                                style={{'grid-column': `${itemIndex}`}}
                                className="important-check-item"
                                onClick={(): void => {
                                  this.removeFoundCheck(item);
                                }}
                              >
                                <img className="unfound-item-image" src={`public/images/${item.image}.png`} />
                              </Grid.Column>
                              );
                            })
                          }
                        </Grid.Row>
                      </Grid>
                    </Grid.Column>
                  );
                }
                return (
                  <Grid.Column>
                    <div className="important-check-world-grid"
                      onClick={(): void => {
                        this.handleWorldSelection(world);
                      }}
                      onWheel={(e: any) => { this.handleScroll(e, world)}}
                    >
                      <img
                        style={world.totalImportantChecks === 0 ? {display: 'none'} : {}}
                        className="world-icon-total-important-tens"
                        src={`public/images/numbers/${splitString[0]}.png`}
                      />
                      <img
                        style={world.totalImportantChecks === 0 ? {display: 'none'} : {}}
                        className="world-icon-total-important-ones"
                        src={`public/images/numbers/${splitString[1]}.png`}
                      />
                      <img style={activeWorld === world.index ? {} : {opacity: '0.30'}} className="important-check-world-icon" src={`public/images/${world.icon}.png`} />
                    </div>
                    <Grid className="world-check-grid">
                        <Grid.Row>
                          {
                            world.foundImportantChecks.map(item => {
                              const itemIndex = world.foundImportantChecks.findIndex(check => check.key === item.key);
                              return (
                              <Grid.Column
                                style={{'grid-column': `${itemIndex}`}}
                                className="important-check-item"
                                onClick={(): void => {
                                  this.removeFoundCheck(item);
                                }}
                              >
                                <img className="unfound-item-image" src={`public/images/${item.image}.png`} />
                              </Grid.Column>
                              );
                            })
                          }
                        </Grid.Row>
                      </Grid>
                  </Grid.Column>
                );
              })
            }
          </Grid.Row>
        </Grid>
        <div />
        <Grid columns={9} className="important-checks-grid-bottom">
          <Grid.Row className="important-check-row">
            {
              unFoundChecks.filter(check => !check.found).map(item => (
                <Grid.Column className="important-check-item"
                  onClick={(): void => {
                    this.handleUnfoundItemClick(item);
                  }}
                >
                  <img className="unfound-item-image" src={`public/images/${item.image}.png`} />
                </Grid.Column>
              ))
            }
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}