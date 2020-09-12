import React from 'react';
import { Table, Container, ButtonProps, Image, Grid, Label } from 'semantic-ui-react';

type ItemTrackerProps = {};

type ItemTrackerState = {
  worlds: {
    worldName: string;
    foundItems: number;
    totalChecks: number;
    defaultTotal: number;
    displayedImage: string;
    completeImg: string;
    incompleteImg: string;
  }[];
  forms: {
    formName: string;
    imageId: string;
    autoId: string;
    levelId: string;
    levelImage: string;
    level: number;
    auto: boolean;
  }[];
  growthAbilities: {
    abilityName: string;
    imageId: string;
    levelId: string;
    levelImage: string;
    level: number;
  }[];
  magicAndCharms: {
    level?: number;
    type: string;
    displayImage: string;
    firstSpell?: string;
    secondSpell?: string;
    thirdSpell?: string;
    charmFound?: boolean;
  }[];
  goMode: {
    itemName: string;
    itemFound: boolean;
  }[];
};

export default class ItemTracker extends React.Component<ItemTrackerProps, ItemTrackerState> {
  constructor(props: any) {
    super(props);

    this.state = {
      worlds: [
        {
          worldName: 'hundredAcre',
          foundItems: 0,
          totalChecks: 24,
          defaultTotal: 24,
          displayedImage: '100 Acre Wood.png',
          completeImg: '100 Acre Wood Complete.png',
          incompleteImg: '100 Acre Wood.png'
        },
        {
          worldName: 'agrabah',
          foundItems: 0,
          totalChecks: 34,
          defaultTotal: 34,
          displayedImage: 'Agrabah.png',
          completeImg: 'Agrabah Complete.png',
          incompleteImg: 'Agrabah.png'
        },
        {
          worldName: 'atlantica',
          foundItems: 0,
          totalChecks: 4,
          defaultTotal: 4,
          displayedImage: 'Atlantica.png',
          completeImg: 'Atlantica Complete.png',
          incompleteImg: 'Atlantica.png'
        },
        {
          worldName: 'beastCastle',
          foundItems: 0,
          totalChecks: 28,
          defaultTotal: 28,
          displayedImage: 'Beast Castle.png',
          completeImg: 'Beast Castle Complete.png',
          incompleteImg: 'Beast Castle.png'
        },
        {
          worldName: 'disneyCastle',
          foundItems: 0,
          totalChecks: 26,
          defaultTotal: 26,
          displayedImage: 'Disney Castle.png',
          completeImg: 'Disney Castle Complete.png',
          incompleteImg: 'Disney Castle.png'
        },
        {
          worldName: 'halloweenTown',
          foundItems: 0,
          totalChecks: 21,
          defaultTotal: 21,
          displayedImage: 'Halloween Town.png',
          completeImg: 'Halloween Town Complete.png',
          incompleteImg: 'Halloween Town.png'
        },
        {
          worldName: 'hollowBastion',
          foundItems: 0,
          totalChecks: 61,
          defaultTotal: 61,
          displayedImage: 'Hollow Bastion.png',
          completeImg: 'Hollow Bastion Complete.png',
          incompleteImg: 'Hollow Bastion.png'
        },
        {
          worldName: 'landOfDragons',
          foundItems: 0,
          totalChecks: 29,
          defaultTotal: 29,
          displayedImage: 'Land of Dragons.png',
          completeImg: 'Land of Dragons Complete.png',
          incompleteImg: 'Land of Dragons.png'
        },
        {
          worldName: 'olympusColiseum',
          foundItems: 0,
          totalChecks: 42,
          defaultTotal: 42,
          displayedImage: 'Olympus Coliseum.png',
          completeImg: 'Olympus Coliseum Complete.png',
          incompleteImg: 'Olympus Coliseum.png'
        },
        {
          worldName: 'portRoyal',
          foundItems: 0,
          totalChecks: 31,
          defaultTotal: 31,
          displayedImage: 'Port Royal.png',
          completeImg: 'Port Royal Complete.png',
          incompleteImg: 'Port Royal.png'
        },
        {
          worldName: 'prideLands',
          foundItems: 0,
          totalChecks: 29,
          defaultTotal: 29,
          displayedImage: 'Pride Lands.png',
          completeImg: 'Pride Lands Complete.png',
          incompleteImg: 'Pride Lands.png'
        },
        {
          worldName: 'simTT',
          foundItems: 0,
          totalChecks: 27,
          defaultTotal: 27,
          displayedImage: 'Simulated TT.png',
          completeImg: 'Simulated TT Complete.png',
          incompleteImg: 'Simulated TT.png'
        },
        {
          worldName: 'spaceParanoids',
          foundItems: 0,
          totalChecks: 20,
          defaultTotal: 20,
          displayedImage: 'Space Paranoids.png',
          completeImg: 'Space Paranoids Complete.png',
          incompleteImg: 'Space Paranoids.png'
        },
        {
          worldName: 'twilightTown',
          foundItems: 0,
          totalChecks: 44,
          defaultTotal: 44,
          displayedImage: 'Twilight Town.png',
          completeImg: 'Twilight Town Complete.png',
          incompleteImg: 'Twilight Town.png'
        },
        {
          worldName: 'twtnw',
          foundItems: 0,
          totalChecks: 37,
          defaultTotal: 37,
          displayedImage: 'The World That Never Was.png',
          completeImg: 'The World That Never Was Complete.png',
          incompleteImg: 'The World That Never Was.png'
        },
      ],
      forms: [
        {
          formName: 'valor',
          imageId: 'valorForm',
          autoId: 'autoValor',
          levelId: 'valorLevel',
          levelImage: 'valorNumber',
          level: 0,
          auto: false
        },
        {
          formName: 'wisdom',
          imageId: 'wisdomForm',
          autoId: 'autoWisdom',
          levelId: 'wisdomLevel',
          levelImage: 'wisdomNumber',
          level: 0,
          auto: false
        },
        {
          formName: 'limit',
          imageId: 'limitForm',
          autoId: 'autoLimit',
          levelId: 'limitLevel',
          levelImage: 'limitNumber',
          level: 0,
          auto: false
        },
        {
          formName: 'master',
          imageId: 'masterForm',
          autoId: 'autoMaster',
          levelId: 'masterLevel',
          levelImage: 'masterNumber',
          level: 0,
          auto: false
        },
        {
          formName: 'final',
          imageId: 'finalForm',
          autoId: 'autoFinal',
          levelId: 'finalLevel',
          levelImage: 'finalNumber',
          level: 0,
          auto: false
        }
      ],
      growthAbilities: [
        {
          abilityName: 'highJump',
          imageId: 'hjImage',
          levelId: 'hjLevel',
          levelImage: 'hjNumber',
          level: 0,
        },
        {
          abilityName: 'quickRun',
          imageId: 'qrImage',
          levelId: 'qrLevel',
          levelImage: 'qrNumber',
          level: 0,
        },
        {
          abilityName: 'dodgeRoll',
          imageId: 'drImage',
          levelId: 'drLevel',
          levelImage: 'drNumber',
          level: 0,
        },
        {
          abilityName: 'aerialDodge',
          imageId: 'adImage',
          levelId: 'adLevel',
          levelImage: 'adNumber',
          level: 0,
        },
        {
          abilityName: 'glide',
          imageId: 'glideImage',
          levelId: 'glideLevel',
          levelImage: 'glideNumber',
          level: 0,
        }
      ],
      magicAndCharms: [
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
          displayImage: 'baseball.png',
          charmFound: false,
        },
        {
          type: 'charm',
          displayImage: 'lamp.png',
          charmFound: false,
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
        }
      ],
      goMode: [
        {
          itemName: 'promisecharm',
          itemFound: false,
        },
        {
          itemName: 'nonExistentProof',
          itemFound: false,
        },
        {
          itemName: 'connectionProof',
          itemFound: false,
        },
        {
          itemName: 'tranquilProof',
          itemFound: false,
        }
      ]
    }
  }

  public increaseWorldCheck(world: any): void {
    const { worlds } = this.state;
    if (world.foundItems < world.totalChecks) {
      world.foundItems++;

      if (world.foundItems === world.totalChecks) {
        world.displayedImage = world.completeImg;
      }
      const worldIndex = worlds.findIndex(item => item.worldName === world.worldName);
      worlds[worldIndex] = world;
      this.setState({ worlds });
    }
  }

  public decreaseWorldCheck(world: any): void {
    const { worlds } = this.state;
    if (world.foundItems > 0) {
      world.foundItems--;

      if (world.foundItems === world.totalChecks - 1) {
        world.displayedImage = world.incompleteImg;
      }
      const worldIndex = worlds.findIndex(item => item.worldName === world.worldName);
      worlds[worldIndex] = world;
      this.setState({ worlds });
    }
  }

  public increaseMagicCheck(magic: any): void {
    const { magicAndCharms } = this.state;

    if (magic.level < 3) {
      magic.level++;
    }

    if (magic.level === 2) {
      magic.displayImage = `${magic.secondSpell}.png`;
    } else if (magic.level === 3) {
      magic.displayImage = `${magic.thirdSpell}.png`;
    }

    const worldIndex = magicAndCharms.findIndex(item => item.firstSpell === magic.firstSpell);
    magicAndCharms[worldIndex] = magic;
    this.setState({ magicAndCharms });
  }

  public decreaseMagicCheck(magic: any): void {
    const { magicAndCharms } = this.state;

    if (magic.level > 0) {
      magic.level--;
    }

    if (magic.level === 1) {
      magic.displayImage = `${magic.firstSpell}.png`;
    } else if (magic.level === 2) {
      magic.displayImage = `${magic.secondSpell}.png`;
    }

    const worldIndex = magicAndCharms.findIndex(item => item.firstSpell === magic.firstSpell);
    magicAndCharms[worldIndex] = magic;
    this.setState({ magicAndCharms });
  }

  public toggleCharm(charm: any): void {
    const { magicAndCharms } = this.state;

    charm.charmFound = !charm.charmFound;

    const charmIndex = magicAndCharms.findIndex(item => item.displayImage === charm.displayImage);
    magicAndCharms[charmIndex] = charm;
    this.setState({ magicAndCharms });
  }

  public formLevelUp(form: any): void {
    const { forms } = this.state;

    if (form.level < 7) {
      form.level++;
    } else {
      form.level = 0;
    }

    const formIndex = forms.findIndex(item => item.formName === form.formName);
    forms[formIndex] = form;
    this.setState({ forms });
  }

  public toggleAuto(form: any): void {
    const { forms } = this.state;

    form.auto = !form.auto;
    const formIndex = forms.findIndex(item => item.formName === form.formName);
    forms[formIndex] = form;
    this.setState({ forms });
  }

  public abilityLevelUp(ability: any): void {
    const { growthAbilities } = this.state;

    if (ability.level < 4) {
      ability.level++;
    }

    const abilityIndex = growthAbilities.findIndex(item => item.abilityName === ability.abilityName);
    growthAbilities[abilityIndex] = ability;
    this.setState({ growthAbilities });
  }

  public abilityLevelDown(ability: any): void {
    const { growthAbilities } = this.state;

    if (ability.level !== 0) {
      ability.level--;
    }

    const abilityIndex = growthAbilities.findIndex(item => item.abilityName === ability.abilityName);
    growthAbilities[abilityIndex] = ability;
    this.setState({ growthAbilities });
  }

  public toggleGoItem(goItem: any): void {
    const { goMode } = this.state;

    goItem.itemFound = !goItem.itemFound;

    const itemIndex = goMode.findIndex(item => item.itemName === goItem.itemName);
    goMode[itemIndex] = goItem;
    this.setState({ goMode });
  }

  public render(): React.ReactNode {
    const {
      worlds,
      magicAndCharms,
      forms,
      growthAbilities,
      goMode,
    } = this.state;
    return (
      <Grid
        className="trackerTable"
        columns={5}
      >
          <Grid.Row>
            {
              worlds.map(world => {
                return (
                  <Grid.Column
                    world={world}
                    className="world"
                    onClick={(): void => {
                      this.increaseWorldCheck(world);
                    }}
                    onContextMenu={(): void => {
                      this.decreaseWorldCheck(world);
                    }}
                  >
                    <Image style={world.foundItems === 0 ? {opacity: '0.30'} : {}} src={`public/images/worlds/${world.displayedImage}`} />
                    <Label
                      className="world-checks"
                      content={`${world.foundItems} / ${world.totalChecks}`}
                    />
                  </Grid.Column>
                );
              })
            }
            {
              magicAndCharms.map(item => {
                if (item.type === 'magic') {
                  return (
                    <Grid.Column
                      magic={item}
                      onClick={(): void => {
                        this.increaseMagicCheck(item);
                      }}
                      onContextMenu={(): void => {
                        this.decreaseMagicCheck(item);
                      }}
                    >
                      <Image style={item.level === 0 ? {opacity: '0.30'} : {}} src={`public/images/magic/${item.displayImage}`} />
                    </Grid.Column>
                  );
                }
                return (
                  <Grid.Column
                    charm={item}
                    onClick={(): void => {
                      this.toggleCharm(item);
                    }}
                  >
                    <Image style={!item.charmFound ? {opacity: '0.30'} : {}} src={`public/images/charms/${item.displayImage}`} />
                  </Grid.Column>
                );
              })
            }
            {
              forms.map(form => {
                return (
                  <Grid.Column
                    className="drive-ability"
                    form={form}
                    onClick={(): void => {
                      this.formLevelUp(form);
                    }}
                    onContextMenu={(): void => {
                      this.toggleAuto(form);
                    }}
                  >
                    <Image className="triangle" style={!form.auto ? {display: 'none'} : {}} src={`public/images/triangle.png`} />
                    <Image className="form-level" style={form.level === 0 ? {display: 'none'} : {}} src={`public/images/numbers/${form.level}.png`} />
                    <Image className="form" style={form.level === 0 ? {opacity: '0.30'} : {}} src={`public/images/drive/${form.formName}.png`} />
                  </Grid.Column>
                );
              })
            }
            {
              growthAbilities.map(ability => {
                return (
                  <Grid.Column
                    className="drive-ability"
                    ability={ability}
                    onClick={(): void => {
                      this.abilityLevelUp(ability);
                    }}
                    onContextMenu={(): void => {
                      this.abilityLevelDown(ability);
                    }}
                  >
                    <Image className="form-level" style={ability.level === 0 ? {display: 'none'} : {}} src={`public/images/numbers/${ability.level}.png`} />
                    <Image className="form" style={ability.level === 0 ? {opacity: '0.30'} : {}} src={`public/images/growth abilities/${ability.abilityName}.png`} />
                  </Grid.Column>
                );
              })
            }
            {
              goMode.map(goItem => {
                return (
                  <Grid.Column
                    className="images"
                    goItem={goItem}
                    onClick={(): void => {
                      this.toggleGoItem(goItem);
                    }}
                  >
                    <Image style={!goItem.itemFound ? {opacity: '0.30'} : {}} src={`public/images/proofpromise/${goItem.itemName}.png`} />
                  </Grid.Column>
                );
              })
            }
          </Grid.Row>
      </Grid>
    );
  }
}
