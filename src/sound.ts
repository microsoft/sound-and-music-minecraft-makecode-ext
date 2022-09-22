enum Sound {
    //% block="Piano Note"
    PianoNote = 1,
    //% block="Bass Note"
    BassNote = 2,
    Chicken = 3
}

namespace music {
    /**
     * Plays a Minecraft game sound.
     * @param sound pitch of the tone to play in Hertz (Hz), eg: Note.C
     * @param pitch tone duration in milliseconds (ms)
     */
    //% help=sound/play-sound weight=90
    //% blockId=sound_play_sound block="play|sound $sound|at pitch $pitch" blockGap=8
    //% parts="headphone"
    //% useEnumVal=1
    //% group="Sound"
    //% pitch.defl=0.7 pitch.min=0 pitch.max=2
    export function playSound(sound: Sound, pitch: number): void {
        player.execute(`playsound ${minecraftSoundId(sound)} @a ~ ~ ~ ${music.volumeInGameUnits} ${pitch}`)
    }

    function minecraftSoundId(sound: Sound) {
        switch (sound) {
            case Sound.PianoNote: return "note.harp";
            case Sound.BassNote: return "note.bass";
            case Sound.Chicken: return "mob.chicken.say";
            default: throw `Unrecognized sound enum value ${sound}`;
        }
    }
}
