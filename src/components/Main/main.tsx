import { KeyboardWithInstrument } from "../Keyboard/withInstrument";
import { NoAudioMessage } from "../noAudioMessage/noAudioMessage";
import { useAudioContext } from "../AudioContextProvider/useAudioContext";

export const Main = () => {
  const audioContext = useAudioContext();

  return !!audioContext ? <KeyboardWithInstrument /> : <NoAudioMessage />;
};
