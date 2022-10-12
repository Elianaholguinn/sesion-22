let sprite_1 = game.createSprite(0, randint(1, 5))
let enemigo = game.createSprite(randint(1, 4), randint(1, 4))
basic.forever(function () {
    while (input.buttonIsPressed(Button.AB)) {
        sprite_1.move(1)
        basic.pause(200)
    }
    while (input.logoIsPressed()) {
        sprite_1.move(-1)
        basic.pause(200)
    }
    while (input.buttonIsPressed(Button.A)) {
        sprite_1.change(LedSpriteProperty.Y, -1)
        basic.pause(200)
    }
    while (input.buttonIsPressed(Button.B)) {
        sprite_1.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
    }
    if (sprite_1.isTouching(enemigo)) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.Happy)
        basic.clearScreen()
        sprite_1.delete()
        enemigo.delete()
    }
})
