import { Keyboard } from "../Keyboard/Keyboard";
import { NoAudioMessage } from "../noAudioMessage/noAudioMessage";
import { useAudioContext } from "../AudioContextProvider/useAudioContext";

export const Main = () => {
  const audioContext = useAudioContext();
  
  return !!audioContext ? <Keyboard /> : <NoAudioMessage />;
};
