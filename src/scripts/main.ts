import cards from './expedition-cards';
import {
  ITemplates,
  ICard_Ataque,
  ICard_Feitico,
  ICard_Gema,
  ICard_Golpe,
  ICard_Poder,
  ICard_Reliquia,
  ICard_Servo,
  IImageHelpers,
} from './types';

import templateAtaqueSrc from '../assets/images/templates/ataque.png';
import templateFeiticoSrc from '../assets/images/templates/feitico.png';
import templateGemaSrc from '../assets/images/templates/gema.png';
import templateGolpeSrc from '../assets/images/templates/golpe.png';
import templatePoderSrc from '../assets/images/templates/poder.png';
import templateReliquiaSrc from '../assets/images/templates/reliquia.png';
import templateServoSrc from '../assets/images/templates/servo.png';

import eterIconSrc from '../assets/images/icone-eter.png';

import titleFontSRC from '../assets/fonts/Constantine.woff';
import paragraphFontSRC from '../assets/fonts/AGaramondPro-Regular.woff';
import CanvasTextWriter from './CanvasTextWriter';

const titleFont = new FontFace('Title', `url(${titleFontSRC})`);
(document.fonts as any).add(titleFont);

const paragraphFont = new FontFace('Arial', `url(${paragraphFontSRC})`);
(document.fonts as any).add(paragraphFont);

// * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const cardSize = {
  width: 2000,
  height: 2771,
};

const margin = cardSize.width - cardSize.width * 0.1;

const resultDOM = document.getElementById('result');

// # Templates

const templates: ITemplates = {
  ataque: null,
  feitico: null,
  gema: null,
  golpe: null,
  poder: null,
  reliquia: null,
  servo: null,
};

const imageHelpers: IImageHelpers = {
  eterIcon: null,
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
  loadTemplateImage(templateAtaqueSrc, 'ataque'),
  loadTemplateImage(templateFeiticoSrc, 'feitico'),
  loadTemplateImage(templateGemaSrc, 'gema'),
  loadTemplateImage(templateGolpeSrc, 'golpe'),
  loadTemplateImage(templatePoderSrc, 'poder'),
  loadTemplateImage(templateReliquiaSrc, 'reliquia'),
  loadTemplateImage(templateServoSrc, 'servo'),
  loadHelperImage(eterIconSrc, 'eterIcon'),
  titleFont.load(),
  paragraphFont.load(),
];

// * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const getRealYFromPercent = (percent: number): number => {
  return (percent / 100) * cardSize.height;
};

const getRealXFromPercent = (percent: number): number => {
  return (percent / 100) * cardSize.width;
};

// * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const createCanvasContext = (): CanvasRenderingContext2D | null => {
  const canvas = document.createElement('canvas');
  canvas.width = 2000;
  canvas.height = 2771;

  if (!resultDOM) return null;
  resultDOM.appendChild(canvas);

  return canvas.getContext('2d');
};

const writeCardName = (
  ctx: CanvasRenderingContext2D,
  text: string,
  yPercent: number,
  color: string
) => {
  const y = getRealYFromPercent(yPercent);
  const x = getRealXFromPercent(50);

  const writer = new CanvasTextWriter(ctx, imageHelpers, {
    fillStyle: color,
    textAlign: 'center',
    font: "bold 100px 'Title'",
  });

  writer.writeText(text, x, y, margin);
};

const writeCharacterName = (ctx: CanvasRenderingContext2D, text: string) => {
  const y = getRealYFromPercent(97);
  const x = getRealXFromPercent(96);

  const writer = new CanvasTextWriter(ctx, imageHelpers, {
    fillStyle: '#FFFFFF',
    textAlign: 'right',
    font: "bold 55px 'Title'",
  });

  writer.writeText(text, x, y, margin);
};

const writeCost = (ctx: CanvasRenderingContext2D, text: string) => {
  const y = getRealYFromPercent(9.3);
  const x = getRealXFromPercent(90.5);

  const writer = new CanvasTextWriter(ctx, imageHelpers, {
    fillStyle: '#FFFFFF',
    textAlign: 'center',
    font: "bold 150px 'Title'",
  });

  writer.writeText(text, x, y, margin);
};

const writeLife = (ctx: CanvasRenderingContext2D, text: string) => {
  const y = getRealYFromPercent(57);
  const x = getRealXFromPercent(90);

  const writer = new CanvasTextWriter(ctx, imageHelpers, {
    fillStyle: '#FFFFFF',
    textAlign: 'center',
    font: "bold 160px 'Title'",
  });

  writer.writeText(text, x, y, margin);
};

const writeNemesis = (ctx: CanvasRenderingContext2D, text: string, yPercent: number) => {
  const y = getRealYFromPercent(yPercent);
  const x = getRealXFromPercent(50);

  const writer = new CanvasTextWriter(ctx, imageHelpers, {
    fillStyle: '#111111',
    textAlign: 'center',
    font: "bold 70px 'Title'",
  });

  writer.writeText(text, x, y, margin);
};

const writeLevel = (
  ctx: CanvasRenderingContext2D,
  text: string,
  xPercent: number,
  yPercent: number
) => {
  const y = getRealYFromPercent(yPercent);
  const x = getRealXFromPercent(xPercent);

  const writer = new CanvasTextWriter(ctx, imageHelpers, {
    fillStyle: '#111111',
    textAlign: 'center',
    font: "bold 50px 'Title'",
  });

  writer.writeText(text, x, y, margin);
};

const writeDescription = (ctx: CanvasRenderingContext2D, text: string, yPercent: number) => {
  const y = getRealYFromPercent(yPercent);
  const x = getRealXFromPercent(50);

  const writer = new CanvasTextWriter(ctx, imageHelpers, {
    fillStyle: '#111111',
    textAlign: 'center',
    font: "74px 'Paragraph'",
    verticalAlign: 'center',
  });

  writer.writeText(text, x, y, margin);
};

// * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const generateAtaqueCard = (card: ICard_Ataque) => {
  const ctx = createCanvasContext();
  if (!ctx || !templates.ataque) return;

  // Template
  ctx.drawImage(templates.ataque, 0, 0, cardSize.width, cardSize.height);

  // Name
  writeCardName(ctx, card.name, 15, '#FFFFFF');

  // Descrição
  writeDescription(ctx, card.description, 60);

  // Nêmesis
  writeNemesis(ctx, card.nemesis, 95.5);

  // Level
  writeLevel(ctx, String(card.level), 93.8, 96.6);
};

const generateFeiticoCard = (card: ICard_Feitico) => {
  const ctx = createCanvasContext();
  if (!ctx || !templates.feitico) return;

  const image = new Image();
  image.src = card.image;
  image.onload = () => {
    if (!templates.feitico) return;

    // Imagem
    ctx.drawImage(image, 0, 0, cardSize.width, cardSize.height);

    // Template
    ctx.drawImage(templates.feitico, 0, 0, cardSize.width, cardSize.height);

    // Nome
    writeCardName(ctx, card.name, 65, '#111111');

    // Descrição
    writeDescription(ctx, card.description, 80);

    // Nome do Personagem
    if (card.characterName) writeCharacterName(ctx, card.characterName);

    // Custo
    writeCost(ctx, String(card.cost));
  };
};

const generateGemaCard = (card: ICard_Gema) => {
  const ctx = createCanvasContext();
  if (!ctx) return;

  if (!ctx || !templates.gema) return;

  const image = new Image();
  image.src = card.image;
  image.onload = () => {
    if (!templates.gema) return;

    // Imagem
    ctx.drawImage(image, 0, 0, cardSize.width, cardSize.height);

    // Template
    ctx.drawImage(templates.gema, 0, 0, cardSize.width, cardSize.height);

    // Nome
    writeCardName(ctx, card.name, 65, '#111111');

    // Descrição
    writeDescription(ctx, card.description, 80);

    // Nome do Personagem
    if (card.characterName) writeCharacterName(ctx, card.characterName);

    // Custo
    writeCost(ctx, String(card.cost));
  };
};

const generateGolpeCard = (card: ICard_Golpe) => {
  const ctx = createCanvasContext();
  if (!ctx || !templates.golpe) return;

  // Template
  ctx.drawImage(templates.golpe, 0, 0, cardSize.width, cardSize.height);

  // Name
  writeCardName(ctx, card.name, 15, '#FFFFFF');

  // Descrição
  writeDescription(ctx, card.description, 60);

  // Nêmesis
  writeNemesis(ctx, card.nemesis, 95.5);

  // Level
  writeLevel(ctx, String(card.level), 94.8, 96.6);
};

const generatePoderCard = (card: ICard_Poder) => {
  const ctx = createCanvasContext();
  if (!ctx || !templates.poder) return;

  // Template
  ctx.drawImage(templates.poder, 0, 0, cardSize.width, cardSize.height);

  // Name
  writeCardName(ctx, card.name, 15, '#FFFFFF');

  // Descrição
  writeDescription(ctx, card.description, 60);

  // Nêmesis
  writeNemesis(ctx, card.nemesis, 95.5);

  // Level
  writeLevel(ctx, String(card.level), 94.6, 96.4);
};

const generateReliquiaCard = (card: ICard_Reliquia) => {
  const ctx = createCanvasContext();
  if (!ctx || !templates.reliquia) return;

  const image = new Image();
  image.src = card.image;
  image.onload = () => {
    if (!templates.reliquia) return;

    // Imagem
    ctx.drawImage(image, 0, 0, cardSize.width, cardSize.height);

    // Template
    ctx.drawImage(templates.reliquia, 0, 0, cardSize.width, cardSize.height);

    // Nome
    writeCardName(ctx, card.name, 65, '#111111');

    // Descrição
    writeDescription(ctx, card.description, 80);

    // Nome do Personagem
    if (card.characterName) writeCharacterName(ctx, card.characterName);

    // Custo
    writeCost(ctx, String(card.cost));
  };
};

const generateServoCard = (card: ICard_Servo) => {
  const ctx = createCanvasContext();
  if (!ctx || !templates.servo) return;

  const image = new Image();
  image.src = card.image;
  image.onload = () => {
    if (!templates.servo) return;

    // Imagem
    ctx.drawImage(image, 0, 0, cardSize.width, cardSize.height);

    // Template
    ctx.drawImage(templates.servo, 0, 0, cardSize.width, cardSize.height);

    // Nome
    writeCardName(ctx, card.name, 64, '#111111');

    // Descrição
    writeDescription(ctx, card.description, 81);

    // Vida
    writeLife(ctx, String(card.life));

    // Nêmesis
    writeNemesis(ctx, card.nemesis, 95.5);

    // Level
    writeLevel(ctx, String(card.level), 94.4, 96.6);
  };
};

const generateCards = () => {
  cards.forEach((card) => {
    switch (card.type) {
      case 'ataque':
        return generateAtaqueCard(card);

      case 'feitico':
        return generateFeiticoCard(card);

      case 'gema':
        return generateGemaCard(card);

      case 'golpe':
        return generateGolpeCard(card);

      case 'poder':
        return generatePoderCard(card);

      case 'reliquia':
        return generateReliquiaCard(card);

      case 'servo':
        return generateServoCard(card);

      default:
        break;
    }
  });
};

// * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

window.onload = () => {
  Promise.all(assetsToLoad).then(() => {
    generateCards();
  });
};
