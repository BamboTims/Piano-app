import { EffectCallback, useEffect } from "react";

type Effect = (...args: unknown[]) => void;

const useEffectOnce = (effect: EffectCallback) => {
  useEffect(effect, []);
};

export const useMount = (fn: Effect) => {
  useEffectOnce(() => {
    fn();
  });
};
