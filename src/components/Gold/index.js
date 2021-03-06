// @flow

import React from 'react';
import cx from 'classnames';
import colours from '../../styles/colours.less';
import goldImg from './gold.png';
import silverImg from './silver.png';
import copperImg from './copper.png';

import styles from './styles.less';

type Props = {
  coins: number,
  className?: string,
};

function calc (coins) {
  let remainder = coins;

  const gold = Math.floor(remainder / 10000);
  remainder %= 10000;

  const silver = Math.floor(remainder / 100);
  remainder %= 100;

  const copper = remainder;

  return {
    gold,
    silver,
    copper,
  };
}

type MoneyProps = {
  money: number,
  type: 'gold' | 'silver' | 'copper',
};

const moneyMap = {
  gold: goldImg,
  silver: silverImg,
  copper: copperImg,
};

const Money = ({ money, type }: MoneyProps) => (
  <span className={`${styles.money} ${colours[type]}`}>
    {` ${money}`} <img src={moneyMap[type]} alt={type[0]} className={styles.icon} />
  </span>
);

const Gold = ({ coins, className, ...props }: Props) => {
  const { gold, silver, copper } = calc(coins);

  return (
    <div className={cx(styles.root, className)} {...props}>
      {!!gold && <Money money={gold} type="gold" />}
      {!!silver && <Money money={silver} type="silver" />}
      {!!copper && <Money money={copper} type="copper" />}
    </div>
  );
};

export default Gold;
