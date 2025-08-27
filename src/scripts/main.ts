import readXlsxFile from 'read-excel-file';

import {
  ITemplates,
  ICard_Attack,
  ICard_Spell,
  ICard_Gem,
  ICard_Power,
  ICard_Relic,
  ICard_Minion,
  IImageHelpers,
  ICard,
} from './types';

import config from './config';

import templateAttackSrc from '../assets/images/templates/attack.png';
import templateSpellSrc from '../assets/images/templates/spell.png';
import templateGemSrc from '../assets/images/templates/gem.png';
import templatePowerSrc from '../assets/images/templates/power.png';
import templateRelicSrc from '../assets/images/templates/relic.png';
import templateServoSrc from '../assets/images/templates/minion.png';

import etherIconSrc from '../assets/images/card-ether-icon.png';

import titleFontSRC from '../assets/fonts/Constantine.woff';
import paragraphFontSRC from '../assets/fonts/AGaramondPro-Regular.woff';
import CardDefault from './CardDefault';

const { cardSizes } = config;

const titleFont = new FontFace('Title', `url(${titleFontSRC})`);
(document.fonts as any).add(titleFont);

const paragraphFont = new FontFace('Arial', `url(${paragraphFontSRC})`);
(document.fonts as any).add(paragraphFont);

// * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const loaderDOM = document.getElementById('loader');
if (loaderDOM) loaderDOM.style.display = 'none';

const resultDOM = document.getElementById('result');

const form = document.getElementById('form-upload');
const submitButton = document.getElementById('submit');

// # Templates

const templates: ITemplates = {
  attack: null,
  spell: null,
  gem: null,
  power: null,
  relic: null,
  minion: null,
};

const imageHelpers: IImageHelpers = {
  etherIcon: null,
};

const loadTemplateImage = (src: string, type: keyof ITemplates): Promise<void> => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      templates[type] = image;
      resolve();
    };
    image.onerror = reject;
  });
};

const loadHelperImage = (src: string, type: keyof IImageHelpers): Promise<void> => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      imageHelpers[type] = image;
      resolve();
    };
    image.onerror = reject;
  });
};

const assetsToLoad = [
  loadTemplateImage(templateAttackSrc, 'attack'),
  loadTemplateImage(templateSpellSrc, 'spell'),
  loadTemplateImage(templateGemSrc, 'gem'),
  loadTemplateImage(templatePowerSrc, 'power'),
  loadTemplateImage(templateRelicSrc, 'relic'),
  loadTemplateImage(templateServoSrc, 'minion'),
  loadHelperImage(etherIconSrc, 'etherIcon'),
  titleFont.load(),
  paragraphFont.load(),
];

// * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const createCanvasContext = (): CanvasRenderingContext2D | null => {
  const canvas = document.createElement('canvas');
  canvas.width = 2000;
  canvas.height = 2771;

  if (!resultDOM) return null;
  resultDOM.appendChild(canvas);

  return canvas.getContext('2d');
};

// * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const generateAttackCard = (card: ICard_Attack) => {
  const ctx = createCanvasContext();
  if (!ctx || !templates.attack) return;

  const cardDefault = new CardDefault(ctx, imageHelpers);

  // Template
  ctx.drawImage(templates.attack, 0, 0, cardSizes.default.width, cardSizes.default.height);
  cardDefault.writeAttackLabel();

  // Name
  cardDefault.writeCardName(card.name, 14, '#FFFFFF');

  // Descrição
  cardDefault.writeDescription(card.description, 60);

  // Nêmesis
  cardDefault.writeNemesis(card.nemesis, 95.5);

  // Level
  cardDefault.writeLevel(String(card.level), 93.8, 96.6);
};

const generateSpellCard = (card: ICard_Spell) => {
  const ctx = createCanvasContext();
  if (!ctx || !templates.spell) return;

  console.log(card.image);

  const image = new Image();
  image.src = card.image;
  image.onload = () => {
    if (!templates.spell) return;

    const cardDefault = new CardDefault(ctx, imageHelpers);

    // Imagem
    ctx.drawImage(image, 0, 0, cardSizes.default.width, cardSizes.default.height);

    // Template
    ctx.drawImage(templates.spell, 0, 0, cardSizes.default.width, cardSizes.default.height);
    cardDefault.writeSpellLabel();

    // Nome
    cardDefault.writeCardName(card.name, 65, '#111111');

    // Descrição
    cardDefault.writeDescription(card.description, 80);

    // Nome do Personagem
    if (card.characterName) cardDefault.writeCharacterName(card.characterName);

    // Custo
    cardDefault.writeCost(String(card.cost));
  };
};

const generateGemCard = (card: ICard_Gem) => {
  const ctx = createCanvasContext();
  if (!ctx) return;

  if (!ctx || !templates.gem) return;

  const image = new Image();
  image.src = card.image;
  image.onload = () => {
    if (!templates.gem) return;

    const cardDefault = new CardDefault(ctx, imageHelpers);

    // Imagem
    ctx.drawImage(image, 0, 0, cardSizes.default.width, cardSizes.default.height);

    // Template
    ctx.drawImage(templates.gem, 0, 0, cardSizes.default.width, cardSizes.default.height);
    cardDefault.writeGemLabel();

    // Nome
    cardDefault.writeCardName(card.name, 65, '#111111');

    // Descrição
    cardDefault.writeDescription(card.description, 80);

    // Nome do Personagem
    if (card.characterName) cardDefault.writeCharacterName(card.characterName);

    // Custo
    cardDefault.writeCost(String(card.cost));
  };
};

const generatePowerCard = (card: ICard_Power) => {
  const ctx = createCanvasContext();
  if (!ctx || !templates.power) return;

  const cardDefault = new CardDefault(ctx, imageHelpers);

  // Template
  ctx.drawImage(templates.power, 0, 0, cardSizes.default.width, cardSizes.default.height);
  cardDefault.writePowerLabel();

  // Name
  cardDefault.writeCardName(card.name, 14, '#FFFFFF');

  // Descrição
  cardDefault.writeDescription(card.description, 60);

  // Nêmesis
  cardDefault.writeNemesis(card.nemesis, 95.5);

  // Level
  cardDefault.writeLevel(String(card.level), 94.6, 96.4);
};

const generateRelicCard = (card: ICard_Relic) => {
  const ctx = createCanvasContext();
  if (!ctx || !templates.relic) return;

  const image = new Image();
  image.src = card.image;
  image.onload = () => {
    if (!templates.relic) return;

    const cardDefault = new CardDefault(ctx, imageHelpers);

    // Imagem
    ctx.drawImage(image, 0, 0, cardSizes.default.width, cardSizes.default.height);

    // Template
    ctx.drawImage(templates.relic, 0, 0, cardSizes.default.width, cardSizes.default.height);
    cardDefault.writeRelicLabel();

    // Nome
    cardDefault.writeCardName(card.name, 65, '#111111');

    // Descrição
    cardDefault.writeDescription(card.description, 80);

    // Nome do Personagem
    if (card.characterName) cardDefault.writeCharacterName(card.characterName);

    // Custo
    cardDefault.writeCost(String(card.cost));
  };
};

const generateMinionCard = (card: ICard_Minion) => {
  const ctx = createCanvasContext();
  if (!ctx || !templates.minion) return;

  const image = new Image();
  image.src = card.image;
  image.onload = () => {
    if (!templates.minion) return;

    const cardDefault = new CardDefault(ctx, imageHelpers);

    // Imagem
    ctx.drawImage(image, 0, 0, cardSizes.default.width, cardSizes.default.height);

    // Template
    ctx.drawImage(templates.minion, 0, 0, cardSizes.default.width, cardSizes.default.height);
    cardDefault.writeMinionLabel();

    // Nome
    cardDefault.writeCardName(card.name, 64, '#111111');

    // Descrição
    cardDefault.writeDescription(card.description, 81);

    // Vida
    cardDefault.writeLife(String(card.life));

    // Nêmesis
    cardDefault.writeNemesis(card.nemesis, 95.5);

    // Level
    cardDefault.writeLevel(String(card.level), 94.4, 96.6);
  };
};

const generateCards = (cards: ICard[]) => {
  // TODO colocar esses geradores como Promise

  cards.forEach((card) => {
    switch (card.type) {
      case 'attack':
        return generateAttackCard(card);

      case 'spell':
        return generateSpellCard(card);

      case 'gem':
        return generateGemCard(card);

      case 'power':
        return generatePowerCard(card);

      case 'relic':
        return generateRelicCard(card);

      case 'minion':
        return generateMinionCard(card);

      default:
        break;
    }
  });

  if (loaderDOM) loaderDOM.style.display = 'none';
};

// * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const handleFormSubmit = (e: Event) => {
  e.preventDefault();

  const fileInput = document.getElementById('file') as HTMLInputElement;

  if (!fileInput?.files?.length) {
    alert('Selecione um arquivo csv!');
    return;
  }

  const file = fileInput.files?.[0];

  if (!file) {
    alert('Selecione um arquivo csv no formato válido!');
    return;
  }

  try {
    if (loaderDOM) loaderDOM.style.display = 'block';

    // Lê o arquivo
    readXlsxFile(file).then((rows) => {
      const cardIndexes = {
        type: 0,
        name: 0,
        description: 0,
        characterName: 0,
        image: 0,
        cost: 0,
        nemesis: 0,
        level: 0,
        life: 0,
      };

      // identifica quais os campos/indices de coluna de acordo com a primeira linha
      // (pro caso de mudar a ordem das colunas sem querer no xlsx)
      rows.forEach((row, rowIndex) => {
        row.forEach((field, index) => {
          switch (field) {
            case 'type':
              cardIndexes.type = index;
              break;

            case 'name':
              cardIndexes.name = index;
              break;
            case 'description':
              cardIndexes.description = index;
              break;
            case 'characterName':
              cardIndexes.characterName = index;
              break;
            case 'image':
              cardIndexes.image = index;
              break;
            case 'cost':
              cardIndexes.cost = index;
              break;
            case 'nemesis':
              cardIndexes.nemesis = index;
              break;
            case 'level':
              cardIndexes.level = index;
              break;

            default:
              break;
          }
        });

        if (rowIndex > 0) return;
      });

      // Agora que sei onde estão todos os campos, monto o objeto dos cards
      const cards: ICard[] = [];

      rows.forEach((row, rowIndex) => {
        if (rowIndex === 0) return; // Skip header row

        const cardType = row[cardIndexes.type] as ICard['type'];
        const cardName = row[cardIndexes.name] as string;
        const cardDescription = row[cardIndexes.description] as string;
        const cardImage = row[cardIndexes.image] as string;
        const cardCost = row[cardIndexes.cost] as number;
        const cardCharacterName = row[cardIndexes.characterName] as string;
        const cardNemesis = row[cardIndexes.nemesis] as string;
        const cardLevel = row[cardIndexes.level] as number;
        const cardLife = row[cardIndexes.life] as number;

        switch (cardType) {
          case 'attack':
            cards.push({
              type: 'attack',
              name: cardName,
              description: cardDescription,
              nemesis: cardNemesis,
              level: cardLevel,
            } as ICard_Attack);
            break;

          case 'spell':
            cards.push({
              type: 'spell',
              name: cardName,
              description: cardDescription,
              image: cardImage,
              cost: cardCost,
              characterName: cardCharacterName,
            } as ICard_Spell);
            break;

          case 'gem':
            cards.push({
              type: 'gem',
              name: cardName,
              description: cardDescription,
              image: cardImage,
              cost: cardCost,
              characterName: cardCharacterName,
            } as ICard_Gem);
            break;

          case 'power':
            cards.push({
              type: 'power',
              name: cardName,
              description: cardDescription,
              nemesis: cardNemesis,
              level: cardLevel,
            } as ICard_Power);
            break;

          case 'relic':
            cards.push({
              type: 'relic',
              name: cardName,
              description: cardDescription,
              image: cardImage,
              cost: cardCost,
              characterName: cardCharacterName,
            } as ICard_Relic);
            break;

          case 'minion':
            cards.push({
              type: 'minion',
              name: cardName,
              description: cardDescription,
              image: cardImage,
              nemesis: cardNemesis,
              level: cardLevel,
              life: cardLife,
            } as ICard_Minion);
            break;

          default:
            break;
        }
      });

      generateCards(cards);
    });
  } catch (error) {
    console.warn(error);
    alert('Arquivo inválido!');
  }
};

// * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

window.onload = () => {
  Promise.all(assetsToLoad).then(() => {
    if (submitButton) submitButton.removeAttribute('disabled');
  });

  form?.addEventListener('submit', handleFormSubmit, false);
};
