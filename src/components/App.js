import React, { Component } from 'react';
import styles from './App.mod.scss';
import { Portfolio } from './Portfolio/Portfolio';

import portfolio from '../data/portfolio';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      portfolioItems: portfolio.items,
    };
  }

  render() {
    return (
      <div className={styles.app}>
        <Portfolio items={this.state.portfolioItems} />
      </div>
    );
  }
}

export default App;
