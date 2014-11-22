﻿var game = new Phaser.Game(800, 600, Phaser.AUTO, "", { preload: preload, create: create, update: update, render: render });

var arrowkeys;
var m;
var win;
var ObstaclesCollisionGroup;
var winFlagCollisionGroup;
var currentState;
var Obstacles;
var snow;
var pausebutton;

function preload()
{
    game.load.image("chopper", "content/chopper2.png");
    game.load.image("tire", "content/tire.png");
    game.load.image("start_button", "content/start_game.png");
    game.load.image("credits", "content/credits.png");
    game.load.image("poller", "content/poller.png")
    game.load.image("rampe", "content/rampe.png");
    game.load.image("tinysnowflake", "content/tinysnowflake.png");
    game.load.image("mediumsnowflake", "content/mediumsnowflake.png");
    game.load.image("hugesnowflake", "content/hugesnowflake.png");
    game.load.image("merkel", "content/merkel.png");
    game.load.image("nextLevel", "content/nextlevel.png");
    game.load.image("hinweis1", "content/joachim_hinweis1.png");

    //pause menü
    game.load.image("pausemenu", "content/pausemenü.png");
    game.load.image("pausebutton", "content/pausebutton.png");
    game.load.image("continue", "content/continue.png");
    game.load.image("selectlevel", "content/selectlevel.png");
    game.load.image("restart", "content/restart.png");
    game.load.image("exit", "content/exit.png");

    game.time.advancedTiming = true;
}

function create()
{
    Obstacles = new Array(100);
    game.physics.startSystem(Phaser.Physics.P2JS);
    game.physics.p2.setImpactEvents(true);
    game.physics.p2.gravity.y = 300;
    arrowkeys = game.input.keyboard.createCursorKeys();
    ObstaclesCollisionGroup = game.physics.p2.createCollisionGroup();
    winFlagCollisionGroup = game.physics.p2.createCollisionGroup();
    currentState = new MainMenu();        //start off with the main menu

    pausebutton = new Pause();

    game.input.onDown.add(unpause, self);
    pausebutton.pausebutton.alpha = 0;
}

function update()
{
    currentState.update();
}

function render()
{
    game.debug.text(game.time.fps || '--', 2, 14, "#00ff00");
    game.debug.text(currentState.level, 2, 25, "#00ff00");
    game.debug.text(game.camera.position.x, 2, 45, "#00ff00");
    game.debug.text(game.camera.position.y, 2, 60, "#00ff00");
}