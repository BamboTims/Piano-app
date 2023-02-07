import { useRef } from "react";
import { Optional } from "../../domain/types";
import { accessContext } from "../../domain/audio";
import { AudioContextType } from "../../react-app-env";

export const useAudioContext = (): Optional<AudioContextType> => {
  const audioCtx = useRef(accessContext());

  return audioCtx;
};
