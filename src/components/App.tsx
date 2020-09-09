import React from 'react';

export default class App extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
  }

  public render(): React.ReactNode {
    return (
      <div>
        <button>Test button</button>
      </div>
    );
  }
}