import React, { Component } from 'react';
import styles from '../Header/Header.module.sass';
import CONSTANTS from '../../constants';

export class HeaderNav extends Component {

  headerItemsRender = (item) => (
    <li key={item.title}>
      <button>{item.title}</button>
      <img src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`} alt="menu"/>
      <ul>
        {item.items.map((i) => <li><a key={i} href="https://google.com">{i}</a></li>)}
      </ul>
    </li>
  );

  headerRender() {
    return CONSTANTS.HeaderItems.map((item) => this.headerItemsRender(item));
  }

  render() {
    return (
      <div className={styles.headerContainer}>
        <div className={styles.navContainer}>
          <a href='/'><img src={`${CONSTANTS.STATIC_IMAGES_PATH}blue-logo.png`} className={styles.logo} alt="blue_logo" />
          </a>
            <div className={styles.leftNav}>
              <div className={styles.nav}>
                  <ul>
                    {this.headerRender()}
                  </ul>
              </div>
        {this.props.data && this.props.data.role !== CONSTANTS.CREATOR
                  && <div className={styles.startContestBtn} onClick={this.startContests}>START CONTEST</div>}
        </div>
    </div>
    </div>

    )
  }
}

export default HeaderNav;