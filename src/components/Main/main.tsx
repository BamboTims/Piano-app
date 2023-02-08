import { Plaground } from "../Playground/Playground";
import { NoAudioMessage } from "../noAudioMessage/noAudioMessage";
import { useAudioContext } from "../AudioContextProvider/useAudioContext";

export const Main = () => {
  const audioContext = useAudioContext();

  return !!audioContext ? <Plaground /> : <NoAudioMessage />;
};
