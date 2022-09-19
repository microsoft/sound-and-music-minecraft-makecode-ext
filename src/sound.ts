enum Sound {
    //% block="Piano Note"
    PianoNote = 1,
    //% block="Bass Note"
    BassNote = 2,
    Chicken = 3
}

//% color="#ff0000" weight=27 icon="\u266a"
namespace sound {
    //% block="play sound $sound || at volume $volume|at pitch $pitch"
    //% sound.defl=Sound.PianoNote
    //% volume.defl=10 volume.min=0 volume.max=10
    //% pitch.defl=0.7 pitch.min=0 pitch.max=2
    export function playSound(sound: Sound, volume: number, pitch: number): void {
        player.execute(`playsound ${minecraftSoundId(sound)} @s ~ ~ ~ ${volume} ${pitch}`)
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
