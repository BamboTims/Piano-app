import { FunctionComponent } from "react";
import { NoteType } from "../../domain/note";
import clsx from "clsx";
import styles from "./Key.module.css";

type KeyProps = {
  type: NoteType;
  label: String;
  disabled?: boolean;
};

export const Key: FunctionComponent<KeyProps> = (props) => {
  const { type, label, ...rest } = props;

  return (
    <button className={clsx(styles.key, styles[type])} type="button" {...rest}>
      {label}
    </button>
  );
};
