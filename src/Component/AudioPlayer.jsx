import { useEffect } from "react";
import { Howl } from "howler";

const AudioPlayer = ({ src, volume = 1.0, loop = false }) => {
  useEffect(() => {
    if (!src) return;

    const sound = new Howl({
      src: [src],
      volume,
      loop,
      html5: true,
    });

    // Tentative de lecture automatique dès le montage
    sound.play();

    // Nettoyage lors du démontage
    return () => {
      sound.stop();
      sound.unload();
    };
  }, [src]);

  return null;
};

export default AudioPlayer;
