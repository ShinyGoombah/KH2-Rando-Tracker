import React from 'react';
import { Icon, Container, Modal, Form, Header, Grid, Button } from 'semantic-ui-react';

type TitleBarProps = {
  currentSettings: {
    activeTrackers: {
      label: string;
      active: boolean;
    }[];
    worldSettings: {
      key: string;
      label: string;
      active: boolean;
    }[];
    additionalSettings: {
      key: string;
      label: string;
      active: boolean;
    }[];
  };
  updateSettings: (newSettings: any) => void;
}

type TitleBarState = {
  settingsModal: boolean;
}
export default class TitleBar extends React.Component<TitleBarProps, TitleBarState> {
  constructor(props: any) {
    super(props);

    this.state = {
      settingsModal: false
    }
  }

  openSettingsModal = () => this.setState({ settingsModal: true });
  closeSettingsModal = () => this.setState({ settingsModal: false });

  changeSetting = (e: React.SyntheticEvent<HTMLElement, Event>, {categoryIndex, name, checked}: any) => {
    const { currentSettings, updateSettings } = this.props;
    const newSettings = currentSettings;
    
    const settingToUpdate = Object.values(newSettings)[categoryIndex].find((tracker) => tracker.label === name);
    
    if (settingToUpdate) {
      settingToUpdate.active = checked;
    }

    updateSettings(newSettings);
  }

  render () {
    const {settingsModal} = this.state;
    const {currentSettings} = this.props;

    return (
      <Container className="title-bar">
        <Icon
          className="titlebar-setting-icon"
          name="settings"
          onClick={this.openSettingsModal}
        />
        <Modal
          className="settings-modal"
          open={settingsModal}
        >
          <Modal.Header className="settings-modal-header" content="Settings" />
          <Modal.Content className="settings-modal-body">
            <Header style={{color: 'white'}} content="Toggle Trackers" />
            <Form>
              {
                currentSettings.activeTrackers.map((tracker) => {
                  return (
                  <Form.Checkbox
                    categoryIndex={0}
                    checked={tracker.active}
                    name={tracker.label}
                    label={<label className="settings-label" style={{color: 'white'}}>{tracker.label}</label>}
                    onChange={this.changeSetting}
                  />
                  );
                })
              }
            </Form>

            <Header style={{color: 'white'}} content="World Settings" />
            <Form>
              <Grid>
                <Grid.Row columns={2}>
                  {
                    currentSettings.worldSettings.map((world) => {
                      return (
                        <Grid.Column>
                          <Form.Checkbox
                            categoryIndex={1}
                            checked={world.active}
                            name={world.label}
                            label={<label className="settings-label" style={{color: 'white'}}>{world.label}</label>}
                            onChange={this.changeSetting}
                          />
                        </Grid.Column>
                      );
                    })
                  }
                </Grid.Row>
              </Grid>
            </Form>

            <Header style={{color: 'white'}} content="Additional Settings" />
            <Form>
              <Grid>
                <Grid.Row columns={2}>
                  {
                    currentSettings.additionalSettings.map((as) => {
                      return (
                        <Grid.Column>
                          <Form.Checkbox
                            categoryIndex={2}
                            checked={as.active}
                            name={as.label}
                            label={<label className="settings-label" style={{color: 'white'}}>{as.label}</label>}
                            onChange={this.changeSetting}
                          />
                        </Grid.Column>
                      );
                    })
                  }
                </Grid.Row>
              </Grid>
            </Form>
          </Modal.Content>
          <Modal.Actions className="settings-modal-actions">
            <Button
              color='violet'
              content="Close"
              onClick={this.closeSettingsModal}
            />
          </Modal.Actions>
        </Modal>
      </Container>
    );
  }
}