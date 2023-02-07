import { InstrumentName } from "soundfont-player";
import { MidiValue } from "./note";
import { Optional } from "./types";

export type AudioNodesRegistry = Record<MidiValue, Optional<Player>);
export const defaultInstrument: InstrumentName = "acoustic_grand_piano";