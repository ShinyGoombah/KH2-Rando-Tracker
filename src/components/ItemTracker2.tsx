import React from 'react';
import { Table, Container, ButtonProps, Image, Grid, Label } from 'semantic-ui-react';

type ItemTrackerProps = {};

type RowItemArray = {
  type: string;
  worldName?: string;
  foundItems?: number;
  totalChecks?: number;
  defaultTotal?: number;
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
            totalChecks: 27,
            defaultTotal: 27,
            displayImage: 'Simulated TT.png',
            completeImg: 'Simulated TT Complete.png',
            incompleteImg: 'Simulated TT.png'
          },
          {
            type: 'world',
            worldName: 'twilightTown',
            foundItems: 0,
            totalChecks: 44,
            defaultTotal: 44,
            displayImage: 'Twilight Town.png',
            completeImg: 'Twilight Town Complete.png',
            incompleteImg: 'Twilight Town.png'
          },
          {
            type: 'world',
            worldName: 'hollowBastion',
            foundItems: 0,
            totalChecks: 61,
            defaultTotal: 61,
            displayImage: 'Hollow Bastion.png',
            completeImg: 'Hollow Bastion Complete.png',
            incompleteImg: 'Hollow Bastion.png'
          },
          {
            type: 'world',
            worldName: 'landOfDragons',
            foundItems: 0,
            totalChecks: 29,
            defaultTotal: 29,
            displayImage: 'Land of Dragons.png',
            completeImg: 'Land of Dragons Complete.png',
            incompleteImg: 'Land of Dragons.png'
          },
          {
            type: 'world',
            worldName: 'beastCastle',
            foundItems: 0,
            totalChecks: 28,
            defaultTotal: 28,
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
            totalChecks: 42,
            defaultTotal: 42,
            displayImage: 'Olympus Coliseum.png',
            completeImg: 'Olympus Coliseum Complete.png',
            incompleteImg: 'Olympus Coliseum.png'
          },
          {
            type: 'world',
            worldName: 'portRoyal',
            foundItems: 0,
            totalChecks: 31,
            defaultTotal: 31,
            displayImage: 'Port Royal.png',
            completeImg: 'Port Royal Complete.png',
            incompleteImg: 'Port Royal.png'
          },
          {
            type: 'world',
            worldName: 'agrabah',
            foundItems: 0,
            totalChecks: 34,
            defaultTotal: 34,
            displayImage: 'Agrabah.png',
            completeImg: 'Agrabah Complete.png',
            incompleteImg: 'Agrabah.png'
          },
          {
            type: 'world',
            worldName: 'halloweenTown',
            foundItems: 0,
            totalChecks: 21,
            defaultTotal: 21,
            displayImage: 'Halloween Town.png',
            completeImg: 'Halloween Town Complete.png',
            incompleteImg: 'Halloween Town.png'
          },
          {
            type: 'world',
            worldName: 'prideLands',
            foundItems: 0,
            totalChecks: 29,
            defaultTotal: 29,
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
            totalChecks: 26,
            defaultTotal: 26,
            displayImage: 'Disney Castle.png',
            completeImg: 'Disney Castle Complete.png',
            incompleteImg: 'Disney Castle.png'
          },
          {
            type: 'world',
            worldName: 'spaceParanoids',
            foundItems: 0,
            totalChecks: 20,
            defaultTotal: 20,
            displayImage: 'Space Paranoids.png',
            completeImg: 'Space Paranoids Complete.png',
            incompleteImg: 'Space Paranoids.png'
          },
          {
            type: 'world',
            worldName: 'twtnw',
            foundItems: 0,
            totalChecks: 37,
            defaultTotal: 37,
            displayImage: 'The World That Never Was.png',
            completeImg: 'The World That Never Was Complete.png',
            incompleteImg: 'The World That Never Was.png'
          },
          {
            type: 'world',
            worldName: 'atlantica',
            foundItems: 0,
            totalChecks: 4,
            defaultTotal: 4,
            displayImage: 'Atlantica.png',
            completeImg: 'Atlantica Complete.png',
            incompleteImg: 'Atlantica.png'
          },
          {
            type: 'world',
            worldName: 'hundredAcre',
            foundItems: 0,
            totalChecks: 24,
            defaultTotal: 24,
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
          }
        ],
      ]
    }
  }

  public increaseWorldCheck(world: any): void {
    const { rows } = this.state;
    const updatedRow = rows.find(row => row.find(item => item.worldName === world.worldName));

    if (updatedRow) {
      if (world.foundItems < world.totalChecks) {
        world.foundItems++;
  
        if (world.foundItems === world.totalChecks) {
          world.displayImage = world.completeImg;
        }
    
        const itemIndex = updatedRow?.findIndex(item => item.worldName === world.worldName)
        updatedRow[itemIndex] = world;
        const rowIndex = rows.indexOf(updatedRow);
        rows[rowIndex] = updatedRow;
        this.setState({ rows });
      }
    }
  }

  public decreaseWorldCheck(world: any): void {
    const { rows } = this.state;
    const updatedRow = rows.find(row => row.find(item => item.worldName === world.worldName));

    if (updatedRow) {
      if (world.foundItems > 0) {
        world.foundItems--;
  
        if (world.foundItems === world.totalChecks - 1) {
          world.displayImage = world.incompleteImg;
        }
    
        const itemIndex = updatedRow?.findIndex(item => item.worldName === world.worldName)
        updatedRow[itemIndex] = world;
        const rowIndex = rows.indexOf(updatedRow);
        rows[rowIndex] = updatedRow;
        this.setState({ rows });
      }
    }
  }

  public increaseMagicCheck(magic: any): void {
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

  public decreaseMagicCheck(magic: any): void {
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

  public toggleCharm(charm: any): void {
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

  public formLevelUp(form: any): void {
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

  public toggleAuto(form: any): void {
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

  public abilityLevelUp(ability: any): void {
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

  public abilityLevelDown(ability: any): void {
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

  public toggleGoItem(goItem: any): void {
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

  public render(): React.ReactNode {
    const {
      rows
    } = this.state;

    return (
      <Table
        className="trackerTable"
      >
        <Table.Body>
          {
            rows.map(row => {
              return (
                <Table.Row>
                  {
                    row.map(item => {
                      if (item.type === 'world') {
                        return (
                          <Table.Cell
                            world={item}
                            className="world"
                            onClick={(): void => {
                              this.increaseWorldCheck(item);
                            }}
                            onContextMenu={(): void => {
                              this.decreaseWorldCheck(item);
                            }}
                          >
                            <Container className="images">
                              <Image style={item.foundItems === 0 ? {opacity: '0.30'} : {}} src={`public/images/worlds/${item.displayImage}`} />
                              <Label
                                className="world-checks"
                                content={`${item.foundItems} / ${item.totalChecks}`}
                              />
                            </Container>
                          </Table.Cell>
                        );
                      }

                      if (item.type === 'magic') {
                        return (
                          <Table.Cell
                            magic={item}
                            onClick={(): void => {
                              this.increaseMagicCheck(item);
                            }}
                            onContextMenu={(): void => {
                              this.decreaseMagicCheck(item);
                            }}
                          >
                            <Image style={item.level === 0 ? {opacity: '0.30'} : {}} src={`public/images/magic/${item.displayImage}`} />
                          </Table.Cell>
                        );
                      }

                      if (item.type === 'charm') {
                        return (
                          <Table.Cell
                            charm={item}
                            onClick={(): void => {
                              this.toggleCharm(item);
                            }}
                          >
                            <Image style={!item.charmFound ? {opacity: '0.30'} : {}} src={`public/images/charms/${item.displayImage}`} />
                          </Table.Cell>
                        );
                      }

                      if (item.type === 'form') {
                        return (
                          <Table.Cell
                            form={item}
                            onClick={(): void => {
                              this.formLevelUp(item);
                            }}
                            onContextMenu={(): void => {
                              this.toggleAuto(item);
                            }}
                          >
                            <Container className="drive-ability">
                              <Image className="triangle" style={!item.auto ? {display: 'none'} : {}} src={`public/images/triangle.png`} />
                              <Image className="form-level" style={item.level === 0 ? {display: 'none'} : {}} src={`public/images/numbers/${item.level}.png`} />
                              <Image className="form" style={item.level === 0 ? {opacity: '0.30'} : {}} src={`public/images/drive/${item.formName}.png`} />
                            </Container>
                          </Table.Cell>
                        );
                      }

                      if (item.type === 'ability') {
                        return (
                          <Table.Cell
                            ability={item}
                            onClick={(): void => {
                              this.abilityLevelUp(item);
                            }}
                            onContextMenu={(): void => {
                              this.abilityLevelDown(item);
                            }}
                          >
                            <Container className="drive-ability">
                              <Image className="form-level" style={item.level === 0 ? {display: 'none'} : {}} src={`public/images/numbers/${item.level}.png`} />
                              <Image className="form" style={item.level === 0 ? {opacity: '0.30'} : {}} src={`public/images/growth abilities/${item.abilityName}.png`} />
                            </Container>
                          </Table.Cell>
                        );
                      }

                      if (item.type === 'goMode') {
                        return (
                          <Table.Cell
                            className="images"
                            goItem={item}
                            onClick={(): void => {
                              this.toggleGoItem(item);
                            }}
                          >
                            <Image style={!item.itemFound ? {opacity: '0.30'} : {}} src={`public/images/proofpromise/${item.itemName}.png`} />
                          </Table.Cell>
                        );
                      }
                    })
                  }
                </Table.Row>
              );
            })
          }
        </Table.Body>
      </Table>
    );
  }
}
