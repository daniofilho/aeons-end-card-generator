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
    type: 'ataque',
    nemesis: 'Artifice',
    description:
      '<b>Each</b> <b>player</b> destroys their <b>most</b> expensive card in hand. Unleash %% for each player that destroyed a card that costs less than 3 %% . \n OR \n Place the <b>most</b> recently discarded minion card in the nemesis discard pile back into play.',
    level: 1,
    name: 'Reembaralhador de Ataques',
  },
  {
    type: 'feitico',
    description: 'Dê 1 de dano. Você pode destruir este card.',
    cost: 1,
    image: '/expedition-cards/feitico-teste.jpg',
    name: 'Machuca até a alma',
    characterName: 'Gustave',
  },
  {
    type: 'gema',
    cost: 8,
    description:
      'lipsum dolor sit amet, consectetur adipiscing elit. Nisl vel consectetur consectetur.',
    image: '/expedition-cards/gema-teste.jpg',
    name: 'Gema Teste',
  },
  {
    nemesis: 'Clair Obscure Expedition 33',
    description: 'O jogador com menos vida sofre 2 de dano.',
    level: 1,
    name: 'Espreitador de Cadáveres',
    type: 'golpe',
  },
  {
    nemesis: 'Artifice',
    description: 'Descarte 2 cards da sua mão. Ganhe 5 de vida.',
    level: 2,
    name: 'Poder do Curandeiro',
    type: 'poder',
  },
  {
    cost: 3,
    description:
      'Ganhe 1 de vida. Se você tiver 3 ou mais cards de Gema em sua mão, ganhe 2 de vida adicional.',
    image: '/expedition-cards/reliquia-teste.jpg',
    name: 'Amuleto da Vida',
    type: 'reliquia',
  },
  {
    nemesis: 'Artifice',
    description: '<strong>Contínuo</strong>: Causa 1 de dano a cada jogador.',
    life: 6,
    image: '/expedition-cards/servo-teste.jpg',
    level: 1,
    name: 'Servo Atacante',
    type: 'servo',
  },
];

export default cards;
