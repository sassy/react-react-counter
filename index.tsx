import React, { Component } from 'react';
import { render } from 'react-dom';
import { Hello } from './Hello';
import './style.css';

interface AppProps { }
interface AppState {
  value: number;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      value: 5
    };
  }

  render() {
    return (
      <div>
        <Hello value={this.state.value} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
