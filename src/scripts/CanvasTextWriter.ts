import { IFontParameters, IImageHelpers, ILine, IWord } from './types';

export default class CanvasTextWriter {
  ctx: CanvasRenderingContext2D;
  imageHelpers: IImageHelpers;

  defaultFont: string;
  lineHeight: number;

  textAlign: CanvasTextAlign;
  wordGap: number;

  constructor(
    ctx: CanvasRenderingContext2D,
    imageHelpers: IImageHelpers,
    fontParameters: IFontParameters
  ) {
    this.ctx = ctx;
    this.imageHelpers = imageHelpers;

    this.textAlign = fontParameters.textAlign || 'left';

    ctx.fillStyle = fontParameters.fillStyle || '#FFFFFF';

    ctx.font = fontParameters.font || '';
    this.defaultFont = ctx.font;

    ctx.textAlign = 'left';

    this.wordGap = 15;

    this.lineHeight = parseInt(ctx.font.match(/\d+/)?.[0] || '80') * 1.3;
  }

  // * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  private detectWord = (text: string): IWord => {
    // <b>bold</b>
    if (text.startsWith('<b>') && text.endsWith('</b>')) {
      text = text.replace(/<\/?b>/g, '');

      return {
        text: text.trim(),
        type: 'bold',
        width: this.ctx.measureText(text).width + this.wordGap,
      };
    }

    // ícone de éter %%
    if (text === '%%') {
      const fontSize = parseInt(this.ctx.font.match(/\d+/)?.[0] || '80');
      return {
        text: text.trim(),
        type: 'icon',
        // The icon width is set to be 87.5% of the font size. With a font of 80px, this results in a 70px width.
        width: fontSize * 0.875,
      };
    }

    // Quebra de linha
    if (text === '\n') {
      return {
        text: text.trim(),
        type: 'linebreak',
        width: 0,
      };
    }

    // Sem padrão nenhum, apenas a palavra
    return {
      text: text.trim(),
      type: 'text',
      width: this.ctx.measureText(text).width,
    };
  };

  private getLineXBasedOnTextAlign = (lineWidth: number, x: number) => {
    if (this.textAlign === 'center') {
      return x - lineWidth / 2;
    }

    if (this.textAlign === 'right') {
      return x - lineWidth;
    }

    return x;
  };

  private getLineWidth = (line: ILine) => {
    return line.word.reduce((acc, word) => acc + word.width + this.wordGap, 0);
  };

  // * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  // Imprime a palavra onde está especificado
  private writeWordOnCanvas = (word: IWord, x: number, y: number): void => {
    // # Detecta padrões

    switch (word.type) {
      case 'bold':
        this.ctx.font = `bold ${this.ctx.font}`;
        this.ctx.fillText(word.text, x, y);
        break;

      case 'icon':
        if (!this.imageHelpers.eterIcon) return;

        const iconSize = parseInt(this.ctx.font.match(/\d+/)?.[0] || '80'); // Get font size
        this.ctx.drawImage(this.imageHelpers.eterIcon, x, y - iconSize * 0.8, iconSize, iconSize);

        break;

      case 'linebreak':
        // apenas ignora
        break;

      case 'text':
      default:
        this.ctx.font = this.defaultFont;
        this.ctx.fillText(word.text, x, y);
        break;
    }
  };

  // Imprime a linha no canvas
  private writeLineOnCanvas = (line: ILine, x: number): void => {
    let wordX = this.getLineXBasedOnTextAlign(this.getLineWidth(line), x);

    line.word
      .filter((o) => o.type !== 'linebreak') // Não considera quebra de linha
      .forEach((word) => {
        // Imprime cada palavra de forma individual
        this.writeWordOnCanvas(word, wordX, line.y);

        // Descobre qual o x da próxima palavra
        wordX += word.width + this.wordGap;
      });
  };

  // Separa o texto em linhas de acordo com o limite máximo da largura
  private wrapText = (text: string, x: number, y: number, maxWidth: number) => {
    const words = text.split(' ');

    const lines: ILine[] = [];

    let lineWidth = 0;
    let currentLine: ILine = { word: [], y };

    // Para cada palavra que encontrar, verifica se ela passa do tamanho máximo da linha
    words.forEach((word, n) => {
      const currentWord = this.detectWord(word);

      lineWidth += currentWord.width + this.wordGap;

      const hasBreakLine = currentWord.type === 'linebreak';
      const exceedMaxWidth = lineWidth > maxWidth && n > 0; // Largura da linha atual passa do limite?

      if (exceedMaxWidth || hasBreakLine) {
        // Adiciona a linha atual ao array de linhas
        lines.push(currentLine);

        // Inicia uma nova linha

        lineWidth = currentWord.width + this.wordGap;
        y += this.lineHeight;

        currentLine = {
          word: [currentWord],
          y,
        };
        return;
      }

      // Adiciona essa palavra na linha
      currentLine.word.push(currentWord);
    });

    // Adiciona a última linha
    if (currentLine.word.length > 0) lines.push(currentLine);

    // Agora imprime cada uma delas
    lines.forEach((o) => this.writeLineOnCanvas(o, x));
  };

  writeText(text: string, x: number, y: number, maxWidth: number) {
    this.wrapText(text, x, y, maxWidth);
  }
}
