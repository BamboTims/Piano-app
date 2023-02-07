import { FunctionComponent } from "react";
import { notes, MidiValue } from "../../domain/note";
import { SelectKey } from "../../domain/keyboard";
import { Key } from "../Key/Key";
import styles from "./Keyboard.module.css";

type KeyboardProps = {
  loading: boolean;
  play: (note: MidiValue) => Promise<void>;
  stop: (note: MidiValue) => Promise<void>;
};

export const Keyboard: FunctionComponent<KeyboardProps> = ({
  loading,
  stop,
  play,
}) => {
  return (
    <div className={styles.keyboard}>
      {notes.map(({ midi, type, index, octave }) => {
        const label = SelectKey(octave, index);
        return (
          <Key
            key={midi}
            type={type}
            label={label}
            disabled={loading}
            onDown={() => play(midi)}
            onUp={() => stop(midi)}
          />
        );
      })}
    </div>
  );
};
