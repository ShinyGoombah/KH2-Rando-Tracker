import React from 'react';
import { Divider, Form, Grid, Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

type ItemTrackerSettingsState = {
  worldOptions: {
    key: string;
    label: string;
    active: boolean;
  }[];
  additionalOptions: {
    key: string;
    label: string;
    active: boolean;
  }[];
};
export default class ItemTrackerSettings extends React.Component<{}, ItemTrackerSettingsState> {
  constructor(props: any) {
    super(props);

    this.state = {
      worldOptions: [
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
      additionalOptions: [
        { key: 'absentSillhouettes', label: 'Absent Sillhouettes', active: true},
        { key: 'dataOrg', label: 'Data Organization', active: true},
        { key: 'ocCups', label: 'Olympus Cups', active: true},
        { key: 'hadesCup', label: 'Hades Cup', active: true},
        { key: 'lingeringWill', label: 'Lingering Will', active: true},
        { key: 'sephiroth', label: 'Sephiroth', active: true},
        { key: 'promiseCharm', label: 'Promise Charm', active: true}
      ]
    };
  }

  componentDidMount = () => {
    this.getSettings();
  }

  getSettings = () => {
    const retrievedWorldSettings = localStorage.getItem('trackerWorldSettings');
    const retrievedAdditionalSettings = localStorage.getItem('trackerAdditionalSettings');

    if (retrievedWorldSettings && retrievedAdditionalSettings) {
      const myWorldOptions = [...JSON.parse(retrievedWorldSettings)];
      const myAdditionalOptions = [...JSON.parse(retrievedAdditionalSettings)];

      this.setState({ worldOptions: myWorldOptions, additionalOptions: myAdditionalOptions });
    }
  }

  handleWorldCheck = (e: React.SyntheticEvent<HTMLElement, Event>, {name, checked}: any) => {
    const { worldOptions, additionalOptions } = this.state;

    const worldIndex = worldOptions.findIndex(item => item.key === name);
    worldOptions[worldIndex].active = checked;

    if (name === 'hollowBastion' && !checked) {
      const optionIndex = additionalOptions.findIndex(item => item.key === 'sephiroth');
      additionalOptions[optionIndex].active = checked;
    }

    if (name === 'disneyCastle' && !checked) {
      const optionIndex = additionalOptions.findIndex(item => item.key === 'lingeringWill');
      additionalOptions[optionIndex].active = checked;
    }

    this.setState({ worldOptions, additionalOptions }, this.saveSettings);
  }

  handleOptionCheck = (e: React.SyntheticEvent<HTMLElement, Event>, {name, checked}: any) => {
    const { worldOptions, additionalOptions } = this.state;

    const optionIndex = additionalOptions.findIndex(item => item.key === name);
    additionalOptions[optionIndex].active = checked;

    if (name === 'lingeringWill' && checked) {
      const worldIndex = worldOptions.findIndex(item => item.key === 'disneyCastle');
      worldOptions[worldIndex].active = checked;
    }

    if (name === 'sephiroth' && checked) {
      const worldIndex = worldOptions.findIndex(item => item.key === 'hollowBastion');
      worldOptions[worldIndex].active = checked;
    }

    this.setState({ worldOptions, additionalOptions }, this.saveSettings);
  }

  saveSettings = () => {
    const { worldOptions, additionalOptions } = this.state;

    localStorage.setItem('trackerWorldSettings', JSON.stringify(worldOptions));
    localStorage.setItem('trackerAdditionalSettings', JSON.stringify(additionalOptions));
  }

  public render(): React.ReactNode {

    const { worldOptions, additionalOptions } = this.state;

    return (
      <div className="settings-container">
        <Form>
          <Header className="settings-header" content={`Included Worlds`} />
          <Grid>
            <Grid.Row>
              {
                worldOptions.map(world => {
                  return (
                    <Grid.Column
                      style={{width: '400px'}}
                      className="settings-grid-column"
                    >
                      <Form.Checkbox
                        name={world.key}
                        toggle
                        checked={world.active}
                        onChange={this.handleWorldCheck}
                        label={<label className="settings-label">{world.label}</label>}
                      />
                    </Grid.Column>
                  );
                })
              }
            </Grid.Row>
          </Grid>

          <Divider />

          <Header className="settings-header" content={`Additional Settings`} />
          <Grid columns={2}>
            <Grid.Row>
              {
                additionalOptions.map(option => {
                  return (
                    <Grid.Column className="settings-grid-column">
                      <Form.Checkbox
                        name={option.key}
                        toggle
                        checked={option.active}
                        onChange={this.handleOptionCheck}
                        label={<label className="settings-label">{option.label}</label>}
                      />
                    </Grid.Column>
                  );
                })
              }
            </Grid.Row>
          </Grid>
        </Form>
      </div>
      
    );
  }
}