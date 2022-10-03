declare const enum MusicDisc {
    //% block="C418 - 11"
    Eleven,
    //% block="C418 - 13"
    Thirteen,
    //% block="C418 - blocks"
    Blocks,
    //% block="C418 - cat"
    Cat,
    //% block="C418 - chirp"
    Chirp,
    //% block="C418 - far"
    Far,
    //% block="C418 - mall"
    Mall,
    //% block="C418 - mellohi"
    Mellohi,
    //% block="C418 - stal"
    Stal,
    //% block="C418 - strad"
    Strad,
    //% block="C418 - wait"
    Wait,
    //% block="C418 - ward"
    Ward,
    //% block="Lena Raine - otherside"
    Otherside,
    //% block="Lena Raine - Pigstep"
    Pigstep
}

declare const enum MusicOption {
    //% block="once"
    Once,
    //% block="forever"
    Forever
}

//% color=#E63022 weight=40 icon="\uf025"
//% groups='["Music Discs", "Sound", "Notes", "Volume"]'
namespace music {
    /**
     * Play a Minecraft music disc.
     * @param builtInMusicDisc a built-in Minecraft music disc you wish to play
     * @param musicOption the play option for the music disc
     */
    //% group="Music Discs" weight=60
    //% block="play music $builtInMusicDisc repeating $musicOption"
    export function playMusic(builtInMusicDisc: MusicDisc, musicOption: MusicOption = MusicOption.Once): void {
        let command = "";

        switch (musicOption) {
            case MusicOption.Once:
                command = `music play ${minecraftTrackName(builtInMusicDisc)} ${music.volumeInGameUnits}`;
                break;

            case MusicOption.Forever:
                command = `music play ${minecraftTrackName(builtInMusicDisc)} ${music.volumeInGameUnits} 0 loop`;
                break;

            default: throw `Unrecognized MusicOption enum value: ${musicOption}`;
        }

        player.execute(command);
    }

    /**
     * Stop the music.
     */
    //% group="Music Discs" weight=40
    //% block="stop music"
    export function stopMusic(): void {
        player.execute("music stop");
    }

    function minecraftTrackName(musicDisc: MusicDisc) {
        switch (musicDisc) {
            case MusicDisc.Eleven: return "record.11";
            case MusicDisc.Thirteen: return "record.13";
            case MusicDisc.Blocks: return "record.blocks";
            case MusicDisc.Cat: return "record.cat";
            case MusicDisc.Chirp: return "record.chirp";
            case MusicDisc.Far: return "record.far";
            case MusicDisc.Mall: return "record.mall";
            case MusicDisc.Mellohi: return "record.mellohi";
            case MusicDisc.Stal: return "record.stal";
            case MusicDisc.Strad: return "record.strad";
            case MusicDisc.Wait: return "record.wait";
            case MusicDisc.Ward: return "record.ward";
            case MusicDisc.Otherside: return "record.otherside";
            case MusicDisc.Pigstep: return "record.pigstep";
            default: throw `Unrecognized MusicDisc enum value: ${musicDisc}`;
        }
    }
}
