import { ICardSize } from './types';

const defaultCardSize: Omit<ICardSize, 'margin'> = {
  width: 2000,
  height: 2771,
};

const cardSizes = {
  default: {
    ...defaultCardSize,
    margin: defaultCardSize.width - defaultCardSize.width * 0.1,
  },
};

export default {
  label: {
    attack: 'Attack',
    gem: 'Gem',
    power: 'Power',
    relic: 'Relic',
    minion: 'Minion',
    spell: 'Spell',
  },
  cardSizes,
};
