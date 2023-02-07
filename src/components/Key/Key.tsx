import { FunctionComponent } from "react";
import { NoteType } from "../../domain/note";
import clsx from "clsx";
import { usePressObserver } from "../PressObserver/usePressObserver";
import styles from "./Key.module.css";

type PressCallback = () => void;

type KeyProps = {
  type: NoteType;
  label: String;
  disabled?: boolean;
  onUp: PressCallback;
  onDown: PressCallback;
};

export const Key: FunctionComponent<KeyProps> = (props) => {
  const { type, label, onDown, onUp, ...rest } = props;

  const pressed = usePressObserver({
    watchKey: label,
    onStartPress: onDown,
    onFinishPress: onUp,
  });

  return (
    <button
      className={clsx(styles.key, styles[type], pressed && "is-pressed")}
      type="button"
      onMouseDown={onDown}
      onMouseUp={onUp}
      {...rest}
    >
      {label}
    </button>
  );
};
