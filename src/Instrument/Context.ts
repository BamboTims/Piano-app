import { createContext, useContext } from "react";
import { InstrumentName } from "soundfont-player";
import { defaultInstrument } from "../domain/sound";

export type ContextValue = {
  instrument: InstrumentName;
  setInstrument: (instrument: InstrumentName) => void;
};

export const InstrumentContext = createContext<ContextValue>({
  instrument: defaultInstrument,
  setInstrument() {},
});

export const InstumentContextConsumer = InstrumentContext.Consumer;
export const useInstrument = () => useContext(InstrumentContext);
