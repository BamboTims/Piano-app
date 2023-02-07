import { useAudioContext } from "../AudioContextProvider/useAudioContext";
import { useSoundFont } from "../../adapters/Soundfont/useSoundfont";
import { Keyboard } from "./Keyboard";
import { useMount } from "../../utils/useMount";

export const KeyboardWithInstrument = () => {
  const AudioContext = useAudioContext()!;
  const { loading, play, stop, load } = useSoundFont({ AudioContext });

  useMount(load);

  return <Keyboard loading={loading} play={play} stop={stop} />;
};
