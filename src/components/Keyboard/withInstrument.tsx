import { useEffect } from "react";
import { useInstrument } from "../../Instrument/Context";
import { useAudioContext } from "../AudioContextProvider/useAudioContext";
import { useSoundFont } from "../../adapters/Soundfont/useSoundfont";
import { Keyboard } from "./Keyboard";

export const KeyboardWithInstrument = () => {
  const AudioContext = useAudioContext()!;
  const { instrument } = useInstrument();
  const { loading, current, play, stop, load } = useSoundFont({ AudioContext });

  useEffect(() => {
    if (!loading && instrument !== current) load(instrument);
  }, [load, loading, current, instrument]);

  return <Keyboard loading={loading} play={play} stop={stop} />;
};
