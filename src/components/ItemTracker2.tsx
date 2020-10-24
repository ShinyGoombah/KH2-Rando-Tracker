import React from 'react';
import { Table, Container, ButtonProps, Image, Grid, Label } from 'semantic-ui-react';

type ItemTrackerProps = {
  currentSettings: any;
};

type RowItemArray = {
  type: string;
  worldName?: string;
  foundItems?: number;
  worldChecks?: number;
  dataOrg?: number;
  absentSillhouette?: number;
  superBoss?: number;
  subSection?: number;
  ocCups?: number;
  hadesCup?: number;
  displayedTotal?: number;
  displayImage?: string;
  completeImg?: string;
  incompleteImg?: string;
  level?: number;
  firstSpell?: string;
  secondSpell?: string;
  thirdSpell?: string;
  charmFound?: boolean;
  formName?: string;
  auto?: boolean;
  abilityName?: string;
  itemName?: string;
  itemFound?: boolean;
}[];

type ItemTrackerState = {
  rows: RowItemArray[];
  pcSetting: boolean;
};

export default class ItemTrackerTwo extends React.Component<ItemTrackerProps, ItemTrackerState> {
  constructor(props: any) {
    super(props);

    this.state = {
      rows: [
        [
          {
            type: 'world',
            worldName: 'simTT',
            foundItems: 0,
            worldChecks: 26,
            dataOrg: 1,
            displayedTotal: 0,
            displayImage: 'Simulated TT.png',
            completeImg: 'Simulated TT Complete.png',
            incompleteImg: 'Simulated TT.png'
          },
          {
            type: 'world',
            worldName: 'twilightTown',
            foundItems: 0,
            worldChecks: 50,
            dataOrg: 1,
            displayedTotal: 0,
            displayImage: 'Twilight Town.png',
            completeImg: 'Twilight Town Complete.png',
            incompleteImg: 'Twilight Town.png'
          },
          {
            type: 'world',
            worldName: 'hollowBastion',
            foundItems: 0,
            worldChecks: 38,
            dataOrg: 1,
            superBoss: 1,
            subSection: 21,
            displayedTotal: 0,
            displayImage: 'Hollow Bastion.png',
            completeImg: 'Hollow Bastion Complete.png',
            incompleteImg: 'Hollow Bastion.png'
          },
          {
            type: 'world',
            worldName: 'landOfDragons',
            foundItems: 0,
            worldChecks: 28,
            dataOrg: 1,
            displayedTotal: 0,
            displayImage: 'Land of Dragons.png',
            completeImg: 'Land of Dragons Complete.png',
            incompleteImg: 'Land of Dragons.png'
          },
          {
            type: 'world',
            worldName: 'beastCastle',
            foundItems: 0,
            worldChecks: 28,
            dataOrg: 1,
            displayedTotal: 0,
            displayImage: 'Beast Castle.png',
            completeImg: 'Beast Castle Complete.png',
            incompleteImg: 'Beast Castle.png'
          },
        ],
        [
          {
            type: 'world',
            worldName: 'olympusColiseum',
            foundItems: 0,
            worldChecks: 31,
            dataOrg: 1,
            absentSillhouette: 1,
            ocCups: 8,
            hadesCup: 1,
            displayedTotal: 0,
            displayImage: 'Olympus Coliseum.png',
            completeImg: 'Olympus Coliseum Complete.png',
            incompleteImg: 'Olympus Coliseum.png'
          },
          {
            type: 'world',
            worldName: 'portRoyal',
            foundItems: 0,
            worldChecks: 30,
            dataOrg: 1,
            displayedTotal: 0,
            displayImage: 'Port Royal.png',
            completeImg: 'Port Royal Complete.png',
            incompleteImg: 'Port Royal.png'
          },
          {
            type: 'world',
            worldName: 'agrabah',
            foundItems: 0,
            worldChecks: 32,
            dataOrg: 1,
            absentSillhouette: 1,
            displayedTotal: 0,
            displayImage: 'Agrabah.png',
            completeImg: 'Agrabah Complete.png',
            incompleteImg: 'Agrabah.png'
          },
          {
            type: 'world',
            worldName: 'halloweenTown',
            foundItems: 0,
            worldChecks: 19,
            dataOrg: 1,
            absentSillhouette: 1,
            displayedTotal: 0,
            displayImage: 'Halloween Town.png',
            completeImg: 'Halloween Town Complete.png',
            incompleteImg: 'Halloween Town.png'
          },
          {
            type: 'world',
            worldName: 'prideLands',
            foundItems: 0,
            worldChecks: 28,
            dataOrg: 1,
            displayedTotal: 0,
            displayImage: 'Pride Lands.png',
            completeImg: 'Pride Lands Complete.png',
            incompleteImg: 'Pride Lands.png'
          },
        ],
        [
          {
            type: 'world',
            worldName: 'disneyCastle',
            foundItems: 0,
            worldChecks: 10,
            subSection: 12,
            dataOrg: 1,
            absentSillhouette: 1,
            superBoss: 2,
            displayedTotal: 0,
            displayImage: 'Disney Castle.png',
            completeImg: 'Disney Castle Complete.png',
            incompleteImg: 'Disney Castle.png'
          },
          {
            type: 'world',
            worldName: 'spaceParanoids',
            foundItems: 0,
            worldChecks: 18,
            dataOrg: 1,
            absentSillhouette: 1,
            displayedTotal: 0,
            displayImage: 'Space Paranoids.png',
            completeImg: 'Space Paranoids Complete.png',
            incompleteImg: 'Space Paranoids.png'
          },
          {
            type: 'world',
            worldName: 'twtnw',
            foundItems: 0,
            worldChecks: 30,
            dataOrg: 1,
            displayedTotal: 0,
            displayImage: 'The World That Never Was.png',
            completeImg: 'The World That Never Was Complete.png',
            incompleteImg: 'The World That Never Was.png'
          },
          {
            type: 'world',
            worldName: 'atlantica',
            foundItems: 0,
            worldChecks: 4,
            displayedTotal: 0,
            displayImage: 'Atlantica.png',
            completeImg: 'Atlantica Complete.png',
            incompleteImg: 'Atlantica.png'
          },
          {
            type: 'world',
            worldName: 'hundredAcre',
            foundItems: 0,
            worldChecks: 24,
            displayedTotal: 0,
            displayImage: '100 Acre Wood.png',
            completeImg: '100 Acre Wood Complete.png',
            incompleteImg: '100 Acre Wood.png'
          },
        ],
        [
          {
            level: 0,
            type: 'magic',
            displayImage: 'fire.png',
            firstSpell: 'fire',
            secondSpell: 'fira',
            thirdSpell: 'firaga'
          },
          {
            level: 0,
            type: 'magic',
            displayImage: 'blizzard.png',
            firstSpell: 'blizzard',
            secondSpell: 'blizzara',
            thirdSpell: 'blizzaga'
          },
          {
            level: 0,
            type: 'magic',
            displayImage: 'thunder.png',
            firstSpell: 'thunder',
            secondSpell: 'thundara',
            thirdSpell: 'thundaga'
          },
          {
            type: 'charm',
            displayImage: 'baseball.png',
            charmFound: false,
          },
          {
            type: 'charm',
            displayImage: 'lamp.png',
            charmFound: false,
          },
        ],
        [
          {
            level: 0,
            type: 'magic',
            displayImage: 'cure.png',
            firstSpell: 'cure',
            secondSpell: 'cura',
            thirdSpell: 'curaga'
          },
          {
            level: 0,
            type: 'magic',
            displayImage: 'reflect.png',
            firstSpell: 'reflect',
            secondSpell: 'reflera',
            thirdSpell: 'reflega'
          },
          {
            level: 0,
            type: 'magic',
            displayImage: 'magnet.png',
            firstSpell: 'magnet',
            secondSpell: 'magnera',
            thirdSpell: 'magnega'
          },
          {
            type: 'charm',
            displayImage: 'ukelele.png',
            charmFound: false,
          },
          {
            type: 'charm',
            displayImage: 'feather.png',
            charmFound: false,
          },
        ],
        [
          {
            type: 'form',
            formName: 'valor',
            level: 0,
            auto: false
          },
          {
            type: 'form',
            formName: 'wisdom',
            level: 0,
            auto: false
          },
          {
            type: 'form',
            formName: 'limit',
            level: 0,
            auto: false
          },
          {
            type: 'form',
            formName: 'master',
            level: 0,
            auto: false
          },
          {
            type: 'form',
            formName: 'final',
            level: 0,
            auto: false
          }
        ],
        [
          {
            type: 'ability',
            abilityName: 'highjump',
            level: 0,
          },
          {
            type: 'ability',
            abilityName: 'quickrun',
            level: 0,
          },
          {
            type: 'ability',
            abilityName: 'dodgeroll',
            level: 0,
          },
          {
            type: 'ability',
            abilityName: 'aerialdodge',
            level: 0,
          },
          {
            type: 'ability',
            abilityName: 'glide',
            level: 0,
          }
        ],
        [
          {
            type: 'goMode',
            itemName: 'promisecharm',
            itemFound: false,
          },
          {
            type: 'goMode',
            itemName: 'nonExistentProof',
            itemFound: false,
          },
          {
            type: 'goMode',
            itemName: 'connectionProof',
            itemFound: false,
          },
          {
            type: 'goMode',
            itemName: 'tranquilProof',
            itemFound: false,
          },
          {
            type: 'world',
            worldName: 'soraLevels',
            foundItems: 0,
            worldChecks: 23,
            displayedTotal: 23,
            displayImage: 'soraheart.png',
            completeImg: 'soraheart.png',
            incompleteImg: 'soraheart.png'
          }
        ],
      ],
      pcSetting: true
    }
  }

  componentDidMount = () => {
    this.calculateChecks();
  }

  componentDidUpdate = (prevProps: any) => {
    if (prevProps !== this.props) {
      this.calculateChecks();
    }
  }

  calculateChecks = () => {
    const { rows } = this.state;
    const { currentSettings } = this.props;

    const worlds = [...rows[0], ...rows[1], ...rows[2]];

    worlds.forEach(world => {
      const updatedRow = rows.find(row => row.find(item => item.worldName === world.worldName));

      if (updatedRow) {
        if (currentSettings) {
          const filteredSettings = currentSettings.worldSettings.filter((setting: any) => setting.key.includes(world.worldName));
          if (filteredSettings) {
            world.displayedTotal = 0
            if (world.worldChecks && filteredSettings[0].active) {
              world.displayedTotal = world.displayedTotal + world.worldChecks;

              if (currentSettings.additionalSettings[0].active && world.absentSillhouette) {
                world.displayedTotal = world.displayedTotal + world.absentSillhouette;
              }
              if (currentSettings.additionalSettings[1].active && world.dataOrg) {
                world.displayedTotal = world.displayedTotal + world.dataOrg;
              }
              if (currentSettings.additionalSettings[2].active && world.ocCups) {
                world.displayedTotal = world.displayedTotal + world.ocCups;

                if (currentSettings.additionalSettings[3].active && world.hadesCup) {
                  world.displayedTotal = world.displayedTotal + world.hadesCup;
                }
              }
              if (world.superBoss) {
                if ((world.worldName === 'disneyCastle' && currentSettings.additionalSettings[4].active) || (world.worldName === 'hollowBastion' && currentSettings.additionalSettings[5].active)) {
                  world.displayedTotal = world.displayedTotal + world.superBoss;
                }
              }
            }
            if (world.subSection && filteredSettings.length === 2 && filteredSettings[1].active) {
              world.displayedTotal = world.displayedTotal + world.subSection;
            }
          }
        } else {
          if (world.displayedTotal === 0 && world.worldChecks) {
            world.displayedTotal = world.displayedTotal + world.worldChecks;

            if (world.dataOrg) {
              world.displayedTotal = world.displayedTotal + world.dataOrg;
            }
            if (world.absentSillhouette) {
              world.displayedTotal = world.displayedTotal + world.absentSillhouette;
            }
            if (world.superBoss) {
              world.displayedTotal = world.displayedTotal + world.superBoss;
            }
            if (world.subSection) {
              world.displayedTotal = world.displayedTotal + world.subSection;
            }
            if (world.ocCups && world.hadesCup) {
              world.displayedTotal = world.displayedTotal + world.ocCups + world.hadesCup;
            }
          }
        }

        const itemIndex = updatedRow.findIndex(item => item.worldName === world.worldName);
        updatedRow[itemIndex] = world;
        const rowIndex = rows.indexOf(updatedRow);
        rows[rowIndex] = updatedRow;
      }
    });

    this.setState({ rows, pcSetting: currentSettings.additionalSettings[6].active });
  }

  increaseWorldCheck = (world: any): void => {
    const { rows } = this.state;
    const updatedRow = rows.find(row => row.find(item => item.worldName === world.worldName));

    if (updatedRow) {
      if (world.foundItems < world.displayedTotal) {
        world.foundItems++;
  
        if (world.foundItems === world.displayedTotal) {
          world.displayImage = world.completeImg;
        }
    
        const itemIndex = updatedRow.findIndex(item => item.worldName === world.worldName);
        updatedRow[itemIndex] = world;
        const rowIndex = rows.indexOf(updatedRow);
        rows[rowIndex] = updatedRow;
        this.setState({ rows });
      }
    }
  }

  decreaseWorldCheck = (world: any): void => {
    const { rows } = this.state;
    const updatedRow = rows.find(row => row.find(item => item.worldName === world.worldName));

    if (updatedRow) {
      if (world.foundItems > 0) {
        world.foundItems--;
  
        if (world.foundItems === world.displayedTotal - 1) {
          world.displayImage = world.incompleteImg;
        }
    
        const itemIndex = updatedRow.findIndex(item => item.worldName === world.worldName);
        updatedRow[itemIndex] = world;
        const rowIndex = rows.indexOf(updatedRow);
        rows[rowIndex] = updatedRow;
        this.setState({ rows });
      }
    }
  }

  increaseMagicCheck = (magic: any): void => {
    const { rows } = this.state;
    const updatedRow = rows.find(row => row.find(item => item.firstSpell === magic.firstSpell));

    if (updatedRow) {
      if (magic.level < 3) {
        magic.level++;
      }
  
      if (magic.level === 2) {
        magic.displayImage = `${magic.secondSpell}.png`;
      } else if (magic.level === 3) {
        magic.displayImage = `${magic.thirdSpell}.png`;
      }

      const itemIndex = updatedRow?.findIndex(item => item.firstSpell === magic.firstSpell)
      updatedRow[itemIndex] = magic;
      const rowIndex = rows.indexOf(updatedRow);
      rows[rowIndex] = updatedRow;
      this.setState({ rows });
    }
  }

  decreaseMagicCheck = (magic: any): void => {
    const { rows } = this.state;
    const updatedRow = rows.find(row => row.find(item => item.firstSpell === magic.firstSpell));

    if (updatedRow) {
      if (magic.level > 0) {
        magic.level--;
      }
  
      if (magic.level === 1) {
        magic.displayImage = `${magic.firstSpell}.png`;
      } else if (magic.level === 2) {
        magic.displayImage = `${magic.secondSpell}.png`;
      }

      const itemIndex = updatedRow?.findIndex(item => item.firstSpell === magic.firstSpell)
      updatedRow[itemIndex] = magic;
      const rowIndex = rows.indexOf(updatedRow);
      rows[rowIndex] = updatedRow;
      this.setState({ rows });
    }
  }

  toggleCharm = (charm: any): void => {
    const { rows } = this.state;
    const updatedRow = rows.find(row => row.find(item => item.displayImage === charm.displayImage));

    if (updatedRow) {
      charm.charmFound = !charm.charmFound;

      const itemIndex = updatedRow?.findIndex(item => item.displayImage === charm.displayImage)
      updatedRow[itemIndex] = charm;
      const rowIndex = rows.indexOf(updatedRow);
      rows[rowIndex] = updatedRow;
      this.setState({ rows });
    }
  }

  formLevelUp = (form: any): void => {
    const { rows } = this.state;
    const updatedRow = rows.find(row => row.find(item => item.formName === form.formName));

    if (updatedRow) {
      if (form.level < 7) {
        form.level++;
      } else {
        form.level = 0;
      }

      const itemIndex = updatedRow?.findIndex(item => item.formName === form.formName)
      updatedRow[itemIndex] = form;
      const rowIndex = rows.indexOf(updatedRow);
      rows[rowIndex] = updatedRow;
      this.setState({ rows });
    }
  }

  toggleAuto = (form: any): void => {
    const { rows } = this.state;
    const updatedRow = rows.find(row => row.find(item => item.formName === form.formName));

    if (updatedRow) {
      form.auto = !form.auto;

      const itemIndex = updatedRow?.findIndex(item => item.formName === form.formName)
      updatedRow[itemIndex] = form;
      const rowIndex = rows.indexOf(updatedRow);
      rows[rowIndex] = updatedRow;
      this.setState({ rows });
    }
  }

  abilityLevelUp = (ability: any): void => {
    const { rows } = this.state;
    const updatedRow = rows.find(row => row.find(item => item.abilityName === ability.abilityName));

    if (updatedRow) {
      if (ability.level < 4) {
        ability.level++;
      }

      const itemIndex = updatedRow?.findIndex(item => item.abilityName === ability.abilityName)
      updatedRow[itemIndex] = ability;
      const rowIndex = rows.indexOf(updatedRow);
      rows[rowIndex] = updatedRow;
      this.setState({ rows });
    }
  }

  abilityLevelDown = (ability: any): void => {
    const { rows } = this.state;
    const updatedRow = rows.find(row => row.find(item => item.abilityName === ability.abilityName));

    if (updatedRow) {
      if (ability.level !== 0) {
        ability.level--;
      }

      const itemIndex = updatedRow?.findIndex(item => item.abilityName === ability.abilityName)
      updatedRow[itemIndex] = ability;
      const rowIndex = rows.indexOf(updatedRow);
      rows[rowIndex] = updatedRow;
      this.setState({ rows });
    }
  }

  toggleGoItem = (goItem: any): void => {
    const { rows } = this.state;
    const updatedRow = rows.find(row => row.find(item => item.itemName === goItem.itemName));

    if (updatedRow) {
      goItem.itemFound = !goItem.itemFound;

      const itemIndex = updatedRow?.findIndex(item => item.itemName === goItem.itemName)
      updatedRow[itemIndex] = goItem;
      const rowIndex = rows.indexOf(updatedRow);
      rows[rowIndex] = updatedRow;
      this.setState({ rows });
    }
  }

  handleScroll = (event: any, data: any): void => {
    if (event.deltaY < 0) {
      this.increaseWorldCheck(data);
    } else {
      this.decreaseWorldCheck(data);
    }
  }

  public render(): React.ReactNode {
    const {
      rows,
      pcSetting
    } = this.state;

    const {
      currentSettings
    } = this.props;

    console.log(currentSettings);
    return (
      <table
        className="trackerTable"
      >
        <tbody>
          {
            rows.map(row => {
              return (
                <tr>
                  {
                    row.map(item => {
                      if (item.type === 'world') {
                        return (
                          <td
                            className="world"
                            onClick={(): void => {
                              this.increaseWorldCheck(item);
                            }}
                            onContextMenu={(): void => {
                              this.decreaseWorldCheck(item);
                            }}
                            onWheel={(e: any) => { this.handleScroll(e, item)}}
                          >
                            <div className="images">
                              <img style={item.displayedTotal === 0 ? {} : {display: 'none'}} className='heartless-image' src='public/images/heartless.png' />
                              <img
                                style={item.foundItems === 0 ? {opacity: '0.30'} : {}}
                                className='world-image'
                                src={item.worldName === 'soraLevels' ? `public/images/${item.displayImage}` : `public/images/worlds/${item.displayImage}`} />
                              <div style={item.displayedTotal === 0 ? {display: 'none'} : {}} className="world-checks">{`${item.foundItems}/${item.displayedTotal}`}</div>
                            </div>
                          </td>
                        );
                      }

                      if (item.type === 'magic') {
                        return (
                          <td
                            onClick={(): void => {
                              this.increaseMagicCheck(item);
                            }}
                            onContextMenu={(): void => {
                              this.decreaseMagicCheck(item);
                            }}
                          >
                            <img style={item.level === 0 ? {opacity: '0.30'} : {}} src={`public/images/magic/${item.displayImage}`} />
                          </td>
                        );
                      }

                      if (item.type === 'charm') {
                        return (
                          <td
                            onClick={(): void => {
                              this.toggleCharm(item);
                            }}
                          >
                            <img style={!item.charmFound ? {opacity: '0.30'} : {}} src={`public/images/charms/${item.displayImage}`} />
                          </td>
                        );
                      }

                      if (item.type === 'form') {
                        return (
                          <td
                            onClick={(): void => {
                              this.formLevelUp(item);
                            }}
                            onContextMenu={(): void => {
                              this.toggleAuto(item);
                            }}
                          >
                            <div className="drive-ability">
                              <img className="triangle" style={!item.auto ? {display: 'none'} : {}} src={`public/images/triangle.png`} />
                              <img className="form-level" style={item.level === 0 ? {display: 'none'} : {}} src={`public/images/numbers/${item.level}.png`} />
                              <img className="form" style={item.level === 0 ? {opacity: '0.30'} : {}} src={`public/images/drive/${item.formName}.png`} />
                            </div>
                          </td>
                        );
                      }

                      if (item.type === 'ability') {
                        return (
                          <td
                            onClick={(): void => {
                              this.abilityLevelUp(item);
                            }}
                            onContextMenu={(): void => {
                              this.abilityLevelDown(item);
                            }}
                          >
                            <div className="drive-ability">
                              <img className="form-level" style={item.level === 0 ? {display: 'none'} : {}} src={`public/images/numbers/${item.level}.png`} />
                              <img className="form" style={item.level === 0 ? {opacity: '0.30'} : {}} src={`public/images/growth abilities/${item.abilityName}.png`} />
                            </div>
                          </td>
                        );
                      }

                      if (item.type === 'goMode') {
                        if (item.itemName === 'promisecharm') {
                          return (
                            <td
                              className="promise-container"
                              onClick={(): void => {
                                if (pcSetting) {
                                  this.toggleGoItem(item);
                                }
                              }}
                            >
                              <img style={!pcSetting ? {} : {display: 'none'}} className='promise-heartless' src='public/images/heartless.png' />
                              <img style={!item.itemFound ? {opacity: '0.30'} : {}} className='promise-image' src={`public/images/proofpromise/${item.itemName}.png`} />
                            </td>
                          );
                        }
                        return (
                          <td
                            className="images"
                            onClick={(): void => {
                              this.toggleGoItem(item);
                            }}
                          >
                            <img style={!item.itemFound ? {opacity: '0.30'} : {}} src={`public/images/proofpromise/${item.itemName}.png`} />
                          </td>
                        );
                      }
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    );
  }
}
