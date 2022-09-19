// tests go here; this will not be compiled when this package is used as an extension.
import { runTests, it, assertExecuted } from './test-framework';

it('should invoke /playsound from playSound block', () => {
    sound.playSound(Sound.Chicken, 10, .7);

    assertExecuted('/playsound mob.chicken.say @s ~ ~ ~ 10 0.7');
});

runTests();
