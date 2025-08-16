export interface ITemplates {
  ataque: HTMLImageElement | null;
  feitico: HTMLImageElement | null;
  gema: HTMLImageElement | null;
  golpe: HTMLImageElement | null;
  poder: HTMLImageElement | null;
  reliquia: HTMLImageElement | null;
  servo: HTMLImageElement | null;
}

export interface IImageHelpers {
  eterIcon: HTMLImageElement | null;
}

export interface IFontParameters {
  fillStyle?: string | CanvasGradient | CanvasPattern;
  textAlign?: 'left' | 'center' | 'right';
  verticalAlign?: 'top' | 'center' | 'bottom';
  font?: string;
}

export interface IWord {
  text: string;
  type: 'text' | 'bold' | 'icon' | 'linebreak';
  width: number;
}

export interface ILine {
  word: IWord[];
  y: number;
}

// * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

interface ICardCommonFields {
  name: string;
  description: string;
}

interface ICardCommonPlayerFields {
  characterName?: string;
  image: string;
  cost: number;
}

interface ICardCommonNemesisFields {
  nemesis: string;
  level: number;
}

// # Jogador

interface ICard_Feitico extends ICardCommonFields, ICardCommonPlayerFields {
  type: 'feitico';
}

interface ICard_Gema extends ICardCommonFields, ICardCommonPlayerFields {
  type: 'gema';
}

interface ICard_Reliquia extends ICardCommonFields, ICardCommonPlayerFields {
  type: 'reliquia';
}

// # Nêmesis

interface ICard_Ataque extends ICardCommonFields, ICardCommonNemesisFields {
  type: 'ataque';
}

interface ICard_Golpe extends ICardCommonFields, ICardCommonNemesisFields {
  type: 'golpe';
}

interface ICard_Poder extends ICardCommonFields, ICardCommonNemesisFields {
  type: 'poder';
}

interface ICard_Servo extends ICardCommonFields, ICardCommonNemesisFields {
  type: 'servo';
  image: string;
  life: number;
}

export type ICard =
  | ICard_Ataque
  | ICard_Feitico
  | ICard_Gema
  | ICard_Golpe
  | ICard_Poder
  | ICard_Reliquia
  | ICard_Servo;
