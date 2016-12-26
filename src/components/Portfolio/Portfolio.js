import React, { Component } from 'react';
import styles from './Portfolio.mod.scss';
import { spring, Motion, TransitionMotion } from 'react-motion';
import { PortfolioItem } from './PortfolioItem';

export class Portfolio extends Component {
  static props = {
    items: React.PropTypes.list,
  }

  renderItems() {
    const { items } = this.props;

    return items.map((item, i) => <PortfolioItem key={i} item={item} />);
  }

  render() {
    return (
      <div className={styles.portfolio}>
        {this.renderItems()}
      </div>
    );
  }
}

export default Portfolio;
