import { OctaveIndex, PitchIndex } from "./note";

export type Key = String;
export type Keys = Key[];

export const topRow: Keys = Array.from("q2w3er5t6y7u");
export const bottomRow: Keys = Array.from("zsxdcvgbhnjm");

export const SelectKey = (octave: OctaveIndex, index: PitchIndex): Key => {
  const keysRow = octave < 5 ? topRow : bottomRow;

  return keysRow[index];
};
