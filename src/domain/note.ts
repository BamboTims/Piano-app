export type NoteType = "natural" | "flat" | "sharp";
export type NotePitch = "A" | "B" | "C" | "D" | "E" | "F" | "G";
export type OctaveIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type MidiValue = number;
export type PitchIndex = number;

export type Note = {
  midi: MidiValue;
  type: NoteType;
  pitch: NotePitch;
  index: PitchIndex;
  octave: OctaveIndex;
};

type NotesGeneratorSettings = {
  fromNote?: MidiValue;
  toNote?: MidiValue;
};

const C1_Midi_Number = 24;
const C4_Midi_Number = 60;
const B5_Midi_Number = 83;

export const lowerNote = C4_Midi_Number;
export const higherNote = B5_Midi_Number;
export const semitonesInOctave = 12;

export const naturalPitchIndex: PitchIndex[] = [0, 2, 4, 5, 7, 9, 11];
export const pitchesRegistry: Record<PitchIndex, NotePitch> = {
  0: "C",
  1: "C",
  2: "D",
  3: "D",
  4: "E",
  5: "F",
  6: "F",
  7: "G",
  8: "G",
  9: "A",
  10: "A",
  11: "B",
};

export const generateNotes = ({
  fromNote = lowerNote,
  toNote = higherNote,
}: NotesGeneratorSettings = {}): Note[] => {
  return Array(toNote - fromNote + 1)
    .fill(0)
    .map((_, index: number) => fromMidi(fromNote + index));
};

export const fromMidi = (midi: MidiValue): Note => {
    const pianoRange = midi - C1_Midi_Number;
    const octave = (Math.floor(pianoRange / semitonesInOctave) +
    1) as OctaveIndex;
    
    const index = pianoRange % semitonesInOctave;
    const pitch = pitchesRegistry[index];
    
    const isSharp = !naturalPitchIndex.includes(index);
    const type = isSharp ? "sharp" : "natural";
    
    return { octave, pitch, index, type, midi };
};

export const notes = generateNotes();