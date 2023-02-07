import { useState, useRef } from "react";
import SoundFont, { InstrumentName, Player } from "soundfont-player";
import { MidiValue } from "../../domain/note";
import { Optional } from "../../domain/types";
import { defaultInstrument, AudioNodesRegistry } from "../../domain/sound";
import { AudioContextType } from "../../react-app-env";

type Settings = {
  AudioContext: AudioContextType;
};

interface Adapted {
  loading: boolean;
  current: Optional<InstrumentName>;
  load(instrument?: InstrumentName): Promise<void>;
  play(note: MidiValue): Promise<void>;
  stop(note: MidiValue): Promise<void>;
}

export const useSoundFont = ({ AudioContext }: Settings): Adapted => {
  let activeNodes: AudioNodesRegistry = {};
  const [current, setCurrent] = useState<Optional<InstrumentName>>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [player, setPlayer] = useState<Optional<Player>>(null);
  const audio = useRef(new AudioContext());

  const load = async (instrument: InstrumentName = defaultInstrument) => {
    try {
      setLoading(true);
      const player = await SoundFont.instrument(audio.current, instrument);
      setLoading(false);
      setCurrent(instrument);
      setPlayer(player);
    } catch (e: any) {
      throw new Error(e.message);
    }
  };

  const resume = async () => {
    try {
      return audio.current.state === "suspended"
        ? await audio.current.resume()
        : Promise.resolve();
    } catch (e: any) {
      throw new Error(e.message);
    }
  };

  const play = async (note: MidiValue) => {
    try {
      await resume();
      if (!player) return;

      const node = player.play(note.toString());
      activeNodes = { ...activeNodes, [note]: node };
    } catch (e: any) {
      throw new Error(e.message);
    }
  };

  const stop = async (note: MidiValue) => {
    try {
      await resume();
      if (!activeNodes[note]) return;
      activeNodes[note]!.stop();
      activeNodes = { ...activeNodes, [note]: null };
    } catch (e: any) {
      throw new Error(e.message);
    }
  };

  return {
    loading,
    current,
    load,
    play,
    stop,
  };
};
