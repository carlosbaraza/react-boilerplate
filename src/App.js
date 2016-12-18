import React, { Component } from 'react';
import styles from './App.mod.scss';
import { spring, Motion, TransitionMotion } from 'react-motion';

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className={styles.app}>
      </div>
    );
  }
}

export default App;
