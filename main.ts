scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    mySprite.setPosition(1, 6)
    tiles.setCurrentTilemap(tilemap`level7`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.shrub, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.crowd0, function (sprite, location) {
    mySprite.setPosition(1, 6)
    tiles.setCurrentTilemap(tilemap`level9`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.saplingOak, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    mySprite.setPosition(1, 6)
    tiles.setCurrentTilemap(tilemap`level11`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.crowd1, function (sprite, location) {
    mySprite.setPosition(1, 6)
    tiles.setCurrentTilemap(tilemap`level13`)
})
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
mySprite = sprites.create(assets.image`Thomasfigur`, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
mySprite.setPosition(1, 6)
forever(function () {
    mySprite.setVelocity(0, 50)
})
