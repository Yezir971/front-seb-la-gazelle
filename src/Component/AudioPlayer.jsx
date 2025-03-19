import { useEffect, useState } from "react";
import { Howl } from "howler";

const AudioPlayer = ({ src, volume = 1.0, loop = false }) => {
    const [sound, setSound] = useState(null);

    useEffect(() => {
        if (src) {
            const newSound = new Howl({
                src: [src],
                volume,
                loop,
                html5: true, // Permet de bien charger le son sur mobile
            });

            newSound.play();
            setSound(newSound);
        }

        return () => {
            if (sound) {
                sound.stop(); // Arrête le son avant de démonter
                sound.unload();
            }
        };
    }, [src]); // Joue un nouveau son à chaque changement de src

    return null;
};

export default AudioPlayer;
