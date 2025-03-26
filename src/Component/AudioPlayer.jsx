import { useEffect, useContext } from "react";
import { AudioContext } from "../context/AudioContext";
import { Howl } from "howler";

const AudioPlayer = ({ src, volume = 1.0, loop = false }) => {
  const { volumeOnOff } = useContext(AudioContext);
  useEffect(() => {
    if (!src) return;

    const sound = new Howl({
      src: [src],
      volume,
      loop,
      html5: true,
    });

    // Tentative de lecture automatique dès le montage
    if(volumeOnOff){
      sound.play();
    }else{
      sound.stop();
    }

    // Nettoyage lors du démontage
    return () => {
      sound.stop();
      sound.unload();
    };
  }, [src]);

  return null;
};

export default AudioPlayer;
