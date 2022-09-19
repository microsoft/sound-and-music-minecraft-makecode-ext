enum Music {
    //% block="Cat"
    Cat = 1,
}

//% color="#ff0000" weight=27 icon="\u266b"
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
