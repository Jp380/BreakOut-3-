var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e3e16764-bcc5-4687-85c3-f4d8765fdc17","69c4c8cf-8c53-4426-bd70-201c587e9904","e9f91643-a0c6-4fd9-b45b-74759fcc393d","3f7df0f4-96f4-4ccb-bead-01893290081c","d6c933b7-9f43-487e-b135-438f8626ebc6","528e251e-e166-4928-8b9e-ec944bd3aca0","540dc38a-5101-43a1-8a94-83b5c7da2069","8219ee70-52be-4c52-93d5-981555e7c68d"],"propsByKey":{"e3e16764-bcc5-4687-85c3-f4d8765fdc17":{"name":"Bola","sourceUrl":"assets/api/v1/animation-library/gamelab/pwucKp9Jx5Ksr1oGABFcKnFJjewfORMI/category_sports/soccer_blue.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"pwucKp9Jx5Ksr1oGABFcKnFJjewfORMI","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/pwucKp9Jx5Ksr1oGABFcKnFJjewfORMI/category_sports/soccer_blue.png"},"69c4c8cf-8c53-4426-bd70-201c587e9904":{"name":"Player","sourceUrl":null,"frameSize":{"x":5,"y":41},"frameCount":1,"looping":true,"frameDelay":12,"version":"LqqzkxDar8DZ7Vps8LXNxsShdMOi2izt","loadedFromSource":true,"saved":true,"sourceSize":{"x":5,"y":41},"rootRelativePath":"assets/69c4c8cf-8c53-4426-bd70-201c587e9904.png"},"e9f91643-a0c6-4fd9-b45b-74759fcc393d":{"name":"Bot","sourceUrl":null,"frameSize":{"x":5,"y":41},"frameCount":1,"looping":true,"frameDelay":12,"version":"dFNFFdhiyA_Zs_PI6pTUH5K40E3i8QAp","loadedFromSource":true,"saved":true,"sourceSize":{"x":5,"y":41},"rootRelativePath":"assets/e9f91643-a0c6-4fd9-b45b-74759fcc393d.png"},"3f7df0f4-96f4-4ccb-bead-01893290081c":{"name":"Nave Bot","sourceUrl":"assets/api/v1/animation-library/gamelab/oe91580NRX_lq0_AXmFgzqY7HFhJ5gkQ/category_retro/spacebattle_07.png","frameSize":{"x":380,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"oe91580NRX_lq0_AXmFgzqY7HFhJ5gkQ","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oe91580NRX_lq0_AXmFgzqY7HFhJ5gkQ/category_retro/spacebattle_07.png"},"d6c933b7-9f43-487e-b135-438f8626ebc6":{"name":"Nave Player","sourceUrl":null,"frameSize":{"x":216,"y":290},"frameCount":1,"looping":true,"frameDelay":12,"version":"a7P9VT2mo2gj7vPTVrY8xdSW4JYCKbV7","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":216,"y":290},"rootRelativePath":"assets/d6c933b7-9f43-487e-b135-438f8626ebc6.png"},"528e251e-e166-4928-8b9e-ec944bd3aca0":{"name":"Player Gold","sourceUrl":null,"frameSize":{"x":216,"y":290},"frameCount":1,"looping":true,"frameDelay":12,"version":"8o_MxYqcmwl1QYA5CwBefeqVCsrrVPlX","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":216,"y":290},"rootRelativePath":"assets/528e251e-e166-4928-8b9e-ec944bd3aca0.png"},"540dc38a-5101-43a1-8a94-83b5c7da2069":{"name":"Bola Espacial","sourceUrl":"assets/api/v1/animation-library/gamelab/NLtwV2Syoag9LPwdF8r91wCF6jRKYq07/category_retro/retro_powerup_coin.png","frameSize":{"x":352,"y":352},"frameCount":1,"looping":true,"frameDelay":2,"version":"NLtwV2Syoag9LPwdF8r91wCF6jRKYq07","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":352,"y":352},"rootRelativePath":"assets/api/v1/animation-library/gamelab/NLtwV2Syoag9LPwdF8r91wCF6jRKYq07/category_retro/retro_powerup_coin.png"},"8219ee70-52be-4c52-93d5-981555e7c68d":{"name":"Espaço","sourceUrl":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Fundo
var fundo = createSprite(200, 200);
fundo.setAnimation("Espaço");

//Título
var titulo = "BREAKOUT IMPOSSIBLE";

//Pontuação Player
var score = 0;

//Pontuação Bot
var scorebot = 0;

//Começar jogo
var espaco = "Aperte espaço para jogar";

//Player
var player = createSprite(370, 230);
player.setAnimation("Nave Player");
player.scale = 0.3;

//Bot
var bot = createSprite(30, 230);
bot.setAnimation("Nave Bot");
bot.scale = 0.3;

//Bola
var bola = createSprite(200, 200);
bola.setAnimation("Bola Espacial");
bola.scale = 0.1;

//Bordas
createEdgeSprites();

function draw() {
  
  background("black");
  
  
//Sons
  if (bola.isTouching(topEdge) || bola.isTouching(bottomEdge)) {
    
    playSound("assets/category_hits/retro_game_simple_impact_2.mp3", false);
    
  }
  if (bola.isTouching(player) || bola.isTouching(bot)) {
    
    playSound("assets/category_digital/bounce_1.mp3", false);
  
    
  }
  if (bola.isTouching(rightEdge) || bola.isTouching(leftEdge)) {
  
   playSound("assets/category_digital/power_down_2.mp3");
  
  }
//Rede
  for (var rede = 0; rede < 400; rede = rede + 20) {

   line (200, rede, 200, rede + 10);

}
  
//Texto da pontuação
  fill("green");
  textSize(50);
  text(score, 350, 40);
  text(scorebot, 10, 40);
  textSize(30);
  textFont("Georgia");
  text(espaco, 40, 80);
  
//Movimentação Player
  if (keyDown("up")) {
    
    player.y = player.y - 8;
    
  }
  if (keyDown("down")) {
    
    player.y = player.y + 8;
    
  }
  
//Começo do jogo
  if (keyDown("space")) {
    
    titulo = "";
    espaco = "";
    bola.velocityX = 6;
    bola.velocityY = 6;
    bola.rotationSpeed = 13;
    espaco.x = 500;
    
  }
  
//Bola voltando pra posição inicial e pontuação
 if (bola.x > 400) {
   
   bola.x = 200;
   bola.y = 200;
   score = score - 1;
   
 }
 if (bola.x < 0) {
   
   bola.x = 200;
   bola.y = 200;
   scorebot = scorebot - 1;
   
 }
 if (bola.bounceOff(player)) {
   
   score = score + 1;
   
 }
 if (bola.bounceOff(bot)) {
   
   scorebot = scorebot + 1;
   
 }
 
//Bot seguindo a bola
  bot.y = bola.y;
  
//BounceOffs
  bola.bounceOff(player);
  bola.bounceOff(topEdge);
  bola.bounceOff(bottomEdge);
  bola.bounceOff(bot);
  
//Movimento automático
  if (keyDown("a")) {
  
  player.y = bola.y;
  
  }
  
//Modo Hacker
  if (keyDown("h")) {
    
    score = 1000;
    bola.scale = 0.35;
    
  }
  
  
  drawSprites();
  
  //Texto da pontuação
  fill("green");
  textSize(50);
  text(score, 350, 40);
  text(scorebot, 10, 40);
  textSize(30);
  textFont("Georgia");
  text(espaco, 40, 80);
  
  //Título
  textFont("Trebuchet MS");
  textSize(37);
  fill("red");
  text(titulo, 14, 360);
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
