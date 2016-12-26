import React, { Component } from 'react';
import styles from './PortfolioItem.mod.scss';
import { spring, Motion, TransitionMotion } from 'react-motion';

export class PortfolioItem extends Component {
  static props = {
    item: React.PropTypes.object,
  }

  render() {
    const { item } = this.props;

    return (
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          {item.img ? <img className={styles.image} src={item.img} /> : null}
          <div className={styles.content}>
            <h2>{item.title}</h2>
            {item.description ? <p>{item.description}</p> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioItem;
