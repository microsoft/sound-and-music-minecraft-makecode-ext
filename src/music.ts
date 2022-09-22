enum Music {
    //% block="Cat"
    Cat = 1,
}

//% color=#E63022 weight=40 icon="\uf025"
//% groups='["Music Discs", "Sound", "Notes", "Volume"]'
namespace music {
    //% block="play game music $music"
    export function playMusic(music: Music): void {
        player.execute(`music play ${minecraftMusicId(music)}`);
    }

    function minecraftMusicId(music: Music) {
        switch (music) {
            case Music.Cat: return "cat";
            default: throw `Unrecognized music enum value ${music}`;
        }
    }
}
