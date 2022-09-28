# Sound and Music MakeCode extension for Minecraft: Education Edition

*This project is an experimental hackathon project with no support or quality guarantee.*

> Open this page at [https://microsofthackathons.github.io/sound-and-music-minecraft-makecode-ext/](https://microsofthackathons.github.io/sound-and-music-minecraft-makecode-ext/)

## Use the extension in Minecraft

* open [Minecraft: Education Edition](https://education.minecraft.net/) and log in
* create or join a world ("Code Builder" must be enabled under the "Classroom" world settings)
* open the code builder (by default, the "c" key)
* click on **New Project**
* click on **Extensions** in the left menu
* search for **https://github.com/microsofthackathons/sound-and-music-minecraft-makecode-ext#main** and import

The left menu should now contain a new **Music** category!

## Block documentation

### `playMusic(builtInMusicDisc, musicOption)`

Play a Minecraft music disc.

Examples:

```ts
playMusic(MusicDisc.Eleven, MusicOption.Once);
playMusic(MusicDisc.Otherside, MusicOption.Forever);
```

Available `MusicDisc`s include:

* Eleven
* Thirteen
* Blocks
* Cat
* Chirp
* Far
* Mall
* Mellohi
* Stal
* Strad
* Wait
* Ward
* Otherside
* Pigstep

Available `MusicOption`s include:

* Once
* Forever

### `stopMusic()`

Stop the music.

Example:
```ts
stopMusic();
```

### `playSound(sound)`

Plays the specified Minecraft game sound.

Examples:

```ts
playSound(Sound.CatMeow);
playSound(Sound.Firework);
```

Available `Sound`s include:

* Blaze
* BucketSplash
* CatHiss
* CatMeow
* CatPurr
* CatPurreow
* Chicken
* Click
* Cow
* Creeper
* Dolphin
* Drink
* Drowned
* Eat
* ElderGuardian
* Endermen
* Explode
* FallDamage
* Fire
* Firework
* FireworkLarge
* FireworkTwinkle
* Fizz
* Fuse
* Ghast
* Horse
* Hurt
* LevelUp
* LightningImpact
* Llama
* Pig
* PlayerAttack
* PlayerDie
* PlayerHurt
* Rain
* Sheep
* Skeleton
* Slime
* Spider
* Splash
* Thunder
* Totem
* Trident
* VillagerHaggle
* VillagerNo
* VillagerYes
* WolfBark
* WolfGrowl
* WolfWhine
* Zombie

### `playNote(note, instrument)`

Plays the specified note on the specified Minecraft instrument, as if it was played on a note block.

Minecraft can play notes from Low F# (`Note.FSharp3`) to High F# (`Note.FSharp5`).

Examples:

```ts
playNote(Note.E4, Instrument.Harp);
playNote(Note.FSharp4, Instrument.Banjo);
```

Available `Instrument`s include:

* Harp
* Bass
* SnareDrum
* HiHat
* BassDrum
* Bell
* Flute
* Chime
* Guitar
* Xylophone
* Vibraphone
* CowBell
* Didgeridoo
* Bit
* Banjo
* Pling

### `setVolume(newVolume)`

Changes the volume that `playSound` and `playNote` will play at.

Volumes can range from 0 to 100 and starts at 100.

This is *separate* from all Minecraft audio settings. It only affects the other blocks provided by this extension.

Examples:

```ts
setVolume(0); // mute
setVolume(100); // max volume
```

### `volume()`

Returns the volume previously set by `setVolume`.

Examples:

```ts
volume(); // returns 100 by default
setVolume(50);
volume(); // now returns 50
```

## Test the extension in a browser

This repository can be added as an **extension** in the MakeCode online editor (outside of Minecraft). *None of the functionality will work outside of Minecraft*, but this is a quick way to test out what the MakeCode blocks will look like without loading up the game.

* open [https://minecraft.makecode.com/](https://minecraft.makecode.com/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/microsofthackathons/sound-and-music-minecraft-makecode-ext#main** and import

## Edit this project

To edit this repository in MakeCode:

* open [https://minecraft.makecode.com/](https://minecraft.makecode.com/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/microsofthackathons/sound-and-music-minecraft-makecode-ext#main** and click import

## Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft 
trademarks or logos is subject to and must follow 
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.

#### Metadata (used for search, rendering)

* for PXT/minecraft
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
