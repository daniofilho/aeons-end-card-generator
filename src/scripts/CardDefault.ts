import CanvasTextWriter from './CanvasTextWriter';
import config from './config';
import { IImageHelpers } from './types';

const { cardSizes, label } = config;

export default class CardDefault {
  ctx: CanvasRenderingContext2D;
  imageHelpers: IImageHelpers;

  constructor(ctx: CanvasRenderingContext2D, imageHelpers: IImageHelpers) {
    this.ctx = ctx;
    this.imageHelpers = imageHelpers;
  }

  // * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  getRealYFromPercent = (percent: number): number => {
    return (percent / 100) * cardSizes.default.height;
  };

  getRealXFromPercent = (percent: number): number => {
    return (percent / 100) * cardSizes.default.width;
  };

  // * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  writeCardName = (text: string, yPercent: number, color: string) => {
    const y = this.getRealYFromPercent(yPercent);
    const x = this.getRealXFromPercent(50);

    const writer = new CanvasTextWriter(this.ctx, this.imageHelpers, {
      fillStyle: color,
      textAlign: 'center',
      font: "bold 100px 'Title'",
    });

    writer.writeText(text, x, y, cardSizes.default.margin);
  };

  writeCharacterName = (text: string) => {
    const y = this.getRealYFromPercent(97);
    const x = this.getRealXFromPercent(96);

    const writer = new CanvasTextWriter(this.ctx, this.imageHelpers, {
      fillStyle: '#FFFFFF',
      textAlign: 'right',
      font: "bold 55px 'Title'",
    });

    writer.writeText(text, x, y, cardSizes.default.margin);
  };

  writeCost = (text: string) => {
    const y = this.getRealYFromPercent(9.3);
    const x = this.getRealXFromPercent(90.5);

    const writer = new CanvasTextWriter(this.ctx, this.imageHelpers, {
      fillStyle: '#FFFFFF',
      textAlign: 'center',
      font: "bold 150px 'Title'",
    });

    writer.writeText(text, x, y, cardSizes.default.margin);
  };

  writeLife = (text: string) => {
    const y = this.getRealYFromPercent(57);
    const x = this.getRealXFromPercent(90);

    const writer = new CanvasTextWriter(this.ctx, this.imageHelpers, {
      fillStyle: '#FFFFFF',
      textAlign: 'center',
      font: "bold 160px 'Title'",
    });

    writer.writeText(text, x, y, cardSizes.default.margin);
  };

  writeNemesis = (text: string, yPercent: number) => {
    const y = this.getRealYFromPercent(yPercent);
    const x = this.getRealXFromPercent(50);

    const writer = new CanvasTextWriter(this.ctx, this.imageHelpers, {
      fillStyle: '#111111',
      textAlign: 'center',
      font: "bold 70px 'Title'",
    });

    writer.writeText(text, x, y, cardSizes.default.margin);
  };

  writeLevel = (text: string, xPercent: number, yPercent: number) => {
    const y = this.getRealYFromPercent(yPercent);
    const x = this.getRealXFromPercent(xPercent);

    const writer = new CanvasTextWriter(this.ctx, this.imageHelpers, {
      fillStyle: '#111111',
      textAlign: 'center',
      font: "bold 50px 'Title'",
    });

    writer.writeText(text, x, y, cardSizes.default.margin);
  };

  writeDescription = (text: string, yPercent: number) => {
    const y = this.getRealYFromPercent(yPercent);
    const x = this.getRealXFromPercent(50);

    const writer = new CanvasTextWriter(this.ctx, this.imageHelpers, {
      fillStyle: '#111111',
      textAlign: 'center',
      font: "74px 'Paragraph'",
      verticalAlign: 'center',
    });

    writer.writeText(text, x, y, cardSizes.default.margin);
  };

  writeAttackLabel = () => {
    const y = this.getRealYFromPercent(22.3);
    const x = this.getRealXFromPercent(50);

    const writer = new CanvasTextWriter(this.ctx, this.imageHelpers, {
      fillStyle: '#111111',
      textAlign: 'center',
      font: "bold 74px 'Title'",
      verticalAlign: 'center',
    });

    writer.writeText(label.attack, x, y, cardSizes.default.margin);
  };

  writeGemLabel = () => {
    const y = this.getRealYFromPercent(94.6);
    const x = this.getRealXFromPercent(51);

    const writer = new CanvasTextWriter(this.ctx, this.imageHelpers, {
      fillStyle: '#111111',
      textAlign: 'center',
      font: "bold 74px 'Title'",
      verticalAlign: 'center',
    });

    writer.writeText(label.gem, x, y, cardSizes.default.margin);
  };

  writeRelicLabel = () => {
    const y = this.getRealYFromPercent(94.7);
    const x = this.getRealXFromPercent(51.2);

    const writer = new CanvasTextWriter(this.ctx, this.imageHelpers, {
      fillStyle: '#111111',
      textAlign: 'center',
      font: "bold 74px 'Title'",
      verticalAlign: 'center',
    });

    writer.writeText(label.relic, x, y, cardSizes.default.margin);
  };

  writeSpellLabel = () => {
    const y = this.getRealYFromPercent(94.6);
    const x = this.getRealXFromPercent(51.2);

    const writer = new CanvasTextWriter(this.ctx, this.imageHelpers, {
      fillStyle: '#111111',
      textAlign: 'center',
      font: "bold 74px 'Title'",
      verticalAlign: 'center',
    });

    writer.writeText(label.spell, x, y, cardSizes.default.margin);
  };

  writePowerLabel = () => {
    const y = this.getRealYFromPercent(22);
    const x = this.getRealXFromPercent(49.5);

    const writer = new CanvasTextWriter(this.ctx, this.imageHelpers, {
      fillStyle: '#111111',
      textAlign: 'center',
      font: "bold 74px 'Title'",
      verticalAlign: 'center',
    });

    writer.writeText(label.power, x, y, cardSizes.default.margin);
  };

  writeMinionLabel = () => {
    const y = this.getRealYFromPercent(57);
    const x = this.getRealXFromPercent(50);

    const writer = new CanvasTextWriter(this.ctx, this.imageHelpers, {
      fillStyle: '#111111',
      textAlign: 'center',
      font: "bold 74px 'Title'",
      verticalAlign: 'center',
    });

    writer.writeText(label.minion, x, y, cardSizes.default.margin);
  };
}
