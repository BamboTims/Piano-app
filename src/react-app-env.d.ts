// / <reference types="react-scripts" />
import Soundfont from "soundfont-player";

type AudioContextType = typeof AudioContext;

type SoundFontType = typeof Soundfont;

interface Window extends Window {
  webkitAudioContext: AudioContextType;
}
