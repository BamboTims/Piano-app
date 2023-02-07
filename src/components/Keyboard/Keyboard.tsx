import { notes } from "../../domain/note";
import { SelectKey } from "../../domain/keyboard";
import { Key } from "../Key/Key";
import styles from "./Keyboard.module.css";

export const Keyboard = () => {
  return (
    <div className={styles.keyboard}>
      {notes.map(({ midi, type, index, octave }) => {
        const label = SelectKey(octave, index);
        return <Key key={midi} type={type} label={label} />;
      })}
    </div>
  );
};
