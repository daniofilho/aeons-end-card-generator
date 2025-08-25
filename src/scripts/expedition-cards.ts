import { ICard } from './types';

/*
  Padrão:

  Quebra de linha:
  \n (coloque espaços para detectar como uma palavra)

  Ícone de Éter:
  %% (coloque espaços para detectar como uma palavra)

 */

const cards: ICard[] = [
  {
    nemesis: 'Artifice',
    description:
      '<b>Each</b> <b>player</b> destroys their <b>most</b> expensive card in hand. Unleash %% for each player that destroyed a card that costs less than 3 %% . \n OR \n Place the <b>most</b> recently discarded minion card in the nemesis discard pile back into play.',

    life: 6,
    image: '/images/expedition-cards/servo-teste.jpg',
    level: 9,
    name: 'Nome muito grande mesmo',
    type: 'minion',
  },
  {
    nemesis: 'Artifice',
    description:
      '<b>Each</b> <b>player</b> destroys their <b>most</b> \n The nemesis discard pile back into play.',

    life: 6,
    image: '/images/expedition-cards/servo-teste.jpg',
    level: 9,
    name: 'Nome muito grande mesmo',
    type: 'minion',
  },
  {
    type: 'attack',
    nemesis: 'Artifice',
    description:
      '<b>Each</b> <b>player</b> destroys their <b>most</b> expensive card in hand. Unleash %% for each player that destroyed a card that costs less than 3 %% . \n OR \n Place the <b>most</b> recently discarded minion card in the nemesis discard pile back into play.',
    level: 9,
    name: 'Reembaralhador de Ataques',
  },
  {
    type: 'spell',
    description:
      '<b>Each</b> <b>player</b> destroys their <b>most</b> expensive card in hand. Unleash %% for each player that destroyed a card that costs less than 3 %% . \n OR \n Place the <b>most</b> recently discarded minion card in the nemesis discard pile back into play.',

    cost: 9,
    image: '/images/expedition-cards/feitico-teste.jpg',
    name: 'Nome muito grande mesmo',
    characterName: 'Gustave',
  },
  {
    type: 'gem',
    cost: 8,
    description:
      '<b>Each</b> <b>player</b> destroys their <b>most</b> expensive card in hand. Unleash %% for each player that destroyed a card that costs less than 3 %% . \n OR \n Place the <b>most</b> recently discarded minion card in the nemesis discard pile back into play.',

    image: '/images/expedition-cards/gema-teste.jpg',
    name: 'Nome muito grande mesmo',
  },
  {
    cost: 3,
    description:
      '<b>Each</b> <b>player</b> destroys their <b>most</b> expensive card in hand. Unleash %% for each player that destroyed a card that costs less than 3 %% . \n OR \n Place the <b>most</b> recently discarded minion card in the nemesis discard pile back into play.',

    image: '/images/expedition-cards/reliquia-teste.jpg',
    name: 'Nome muito grande mesmo',
    type: 'relic',
  },
  {
    nemesis: 'Artifice',
    description:
      '<b>Each</b> <b>player</b> destroys their <b>most</b> expensive card in hand. Unleash %% for each player that destroyed a card that costs less than 3 %% . \n OR \n Place the <b>most</b> recently discarded minion card in the nemesis discard pile back into play.',

    level: 2,
    name: 'Nome muito grande mesmo',
    type: 'power',
  },
];

export default cards;
