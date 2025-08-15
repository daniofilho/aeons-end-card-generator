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

const writeCardWhiteName = (ctx: CanvasRenderingContext2D, text: string, yPercent: number) => {
  ctx.fillStyle = '#FFFFFF';
  ctx.textAlign = 'center';
  ctx.font = "100px 'Title'";

  const y = getRealYFromPercent(yPercent);
  const x = getRealXFromPercent(50);

  ctx.fillText(text, x, y);
};

const writeNemesis = (ctx: CanvasRenderingContext2D, text: string, yPercent: number) => {
  ctx.fillStyle = '#111111';
  ctx.textAlign = 'center';
  ctx.font = "70px 'Title'";

  const y = getRealYFromPercent(yPercent);
  const x = getRealXFromPercent(50);

  ctx.fillText(text, x, y);
};

const writeLevel = (
  ctx: CanvasRenderingContext2D,
  text: string,
  xPercent: number,
  yPercent: number
) => {
  ctx.fillStyle = '#111111';
  ctx.textAlign = 'center';
  ctx.font = "50px 'Title'";

  const y = getRealYFromPercent(yPercent);
  const x = getRealXFromPercent(xPercent);

  ctx.fillText(text, x, y);
};

const writeDescription = (ctx: CanvasRenderingContext2D, text: string, yPercent: number) => {
  const y = getRealYFromPercent(yPercent);
  const x = getRealXFromPercent(50);

  const writer = new CanvasTextWriter(ctx, imageHelpers, {
    fillStyle: '#111111',
    textAlign: 'center',
    font: "80px 'Paragraph'",
  });

  writer.writeText(text, x, y, margin);
};

// * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const generateAtaqueCard = (card: ICard_Ataque) => {
  const ctx = createCanvasContext();
  if (!ctx) return;

  if (templates.ataque) ctx.drawImage(templates.ataque, 0, 0, cardSize.width, cardSize.height);

  // Name
  writeCardWhiteName(ctx, card.name, 15);

  // Descrição
  writeDescription(ctx, card.description, 50);

  // Nêmesis
  writeNemesis(ctx, card.nemesis, 95.5);

  // Level
  writeLevel(ctx, String(card.level), 93.5, 96.6);
};

const generateFeiticoCard = (card: ICard_Feitico) => {
  const ctx = createCanvasContext();
  if (!ctx) return;

  if (templates.feitico) ctx.drawImage(templates.feitico, 0, 0, cardSize.width, cardSize.height);
};

const generateGemaCard = (card: ICard_Gema) => {
  const ctx = createCanvasContext();
  if (!ctx) return;

  if (templates.gema) ctx.drawImage(templates.gema, 0, 0, cardSize.width, cardSize.height);
};

const generateGolpeCard = (card: ICard_Golpe) => {
  const ctx = createCanvasContext();
  if (!ctx) return;

  if (templates.golpe) ctx.drawImage(templates.golpe, 0, 0, cardSize.width, cardSize.height);
};

const generatePoderCard = (card: ICard_Poder) => {
  const ctx = createCanvasContext();
  if (!ctx) return;

  if (templates.poder) ctx.drawImage(templates.poder, 0, 0, cardSize.width, cardSize.height);
};

const generateReliquiaCard = (card: ICard_Reliquia) => {
  const ctx = createCanvasContext();
  if (!ctx) return;

  if (templates.reliquia) ctx.drawImage(templates.reliquia, 0, 0, cardSize.width, cardSize.height);
};

const generateServoCard = (card: ICard_Servo) => {
  const ctx = createCanvasContext();
  if (!ctx) return;

  if (templates.servo) ctx.drawImage(templates.servo, 0, 0, cardSize.width, cardSize.height);
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
