import { useRef } from "react";
import { Optional } from "../../domain/types";
import { accessContext } from "../../domain/audio";

export const useAudioContext = (): Optional<AudioContextType> => {
  const audioCtx = useRef(accessContext());

  return audioCtx;
};
