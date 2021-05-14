import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
//import Creator from '../Creator/Creator.js';
import Card from '../Card/Card.js';
import Icon from './Icon';
import Button from '../Button/Button';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    cards: PropTypes.array,
    icon: PropTypes.node,
    action: PropTypes.func,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  deleteAction = ()=> {   

    console.log('this.props', this.props.id)
    this.props.action(this.props.id);
  }

  render() {
    const {title, icon, cards} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title}
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
          <span>
            <Button onClick={this.deleteAction}>X</Button>
          </span>
        </h3>
        <div className={styles.cards}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        {/*
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div>
        */}
      </section>
    );
  }
}
export default Column;

