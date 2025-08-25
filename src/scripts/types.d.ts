export interface ITemplates {
  attack: HTMLImageElement | null;
  spell: HTMLImageElement | null;
  gem: HTMLImageElement | null;
  power: HTMLImageElement | null;
  relic: HTMLImageElement | null;
  minion: HTMLImageElement | null;
}

export interface IImageHelpers {
  etherIcon: HTMLImageElement | null;
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

export interface ICardSize {
  width: number;
  height: number;
  margin: number;
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

interface ICard_Spell extends ICardCommonFields, ICardCommonPlayerFields {
  type: 'spell';
}

interface ICard_Gem extends ICardCommonFields, ICardCommonPlayerFields {
  type: 'gem';
}

interface ICard_Relic extends ICardCommonFields, ICardCommonPlayerFields {
  type: 'relic';
}

// # Nêmesis

interface ICard_Attack extends ICardCommonFields, ICardCommonNemesisFields {
  type: 'attack';
}

interface ICard_Power extends ICardCommonFields, ICardCommonNemesisFields {
  type: 'power';
}

interface ICard_Minion extends ICardCommonFields, ICardCommonNemesisFields {
  type: 'minion';
  image: string;
  life: number;
}

export type ICard =
  | ICard_Attack
  | ICard_Spell
  | ICard_Gem
  | ICard_Power
  | ICard_Relic
  | ICard_Minion;
