var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["fccd3157-a3db-4e2e-99e3-c761493dce6e"],"propsByKey":{"fccd3157-a3db-4e2e-99e3-c761493dce6e":{"name":"flat_medal8_1","sourceUrl":"assets/api/v1/animation-library/gamelab/zBM__CIzX9Bc1cLmt9cp03XKpNrhOkaO/category_gameplay/flat_medal8.png","frameSize":{"x":41,"y":74},"frameCount":1,"looping":true,"frameDelay":2,"version":"zBM__CIzX9Bc1cLmt9cp03XKpNrhOkaO","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":41,"y":74},"rootRelativePath":"assets/api/v1/animation-library/gamelab/zBM__CIzX9Bc1cLmt9cp03XKpNrhOkaO/category_gameplay/flat_medal8.png"}}};
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

var laser1,laser2,laser3,thief,diamond;
laser1 = createSprite(100,360,200,6);
laser1.shapeColor = "blue";
laser1.velocityY =-3;
laser2 = createSprite(300,200,200,6);
laser2.shapeColor = "red";
laser2.velocityY = 3;
laser3 = createSprite(100,40,200,6);
laser3.shapeColor = "green";
laser3.velocityY = 3;
thief = createSprite(10,390,10,10);
thief.shapeColor = "black";
diamond = createSprite(380,10,10,10);
diamond.setAnimation("flat_medal8_1");


function draw() {
  background("yellow");
  
  createEdgeSprites();
  
  laser1.bounceOff(topEdge);
  laser1.bounceOff(bottomEdge);
  laser2.bounceOff(topEdge);
  laser2.bounceOff(bottomEdge);
  laser3.bounceOff(topEdge);
  laser3.bounceOff(bottomEdge);
  
  if (keyDown(UP_ARROW)){
  thief.velocityX=0;
  thief.velocityY=-5;
}

if (keyDown(DOWN_ARROW)){
  thief.velocityX=0;
  thief.velocityY=5;
}

if (keyDown(RIGHT_ARROW)){
  thief.velocityX=5;
  thief.velocityY=0;
}

if (keyDown(LEFT_ARROW)){
  thief.velocityX=-5;
  thief.velocityY=0;
}

if (keyWentUp(UP_ARROW)){
thief.velocityX=0;
thief.velocityY=0;
}

if (keyWentUp(DOWN_ARROW)){
thief.velocityX=0;
thief.velocityY=0;
}

if (keyWentUp(RIGHT_ARROW)){
thief.velocityX=0;
thief.velocityY=0;
}

if (keyWentUp(LEFT_ARROW)){
thief.velocityX=0;
thief.velocityY=0;
}
  
  if (thief.isTouching(laser1) || thief.isTouching(laser2) || thief.isTouching(laser3)) {
  textSize(20);
  fill("red");
  text("Thief has been caught !!", 90,180);
  thief.velocityX = 0;
  thief.velocityY=0;
  laser1.setVelocity(0,0);
  laser2.setVelocity(0,0);
  laser3.setVelocity(0,0);
  }
  
  
  
  if (thief.isTouching(diamond)) {
  textSize(10);
  fill("cyan");
  text("CONGRATULATONS!!You've SuccessFully Passed The World's Hardest Game", 20,160);
  thief.velocityX = 0;
  thief.velocityY=0;
  laser1.setVelocity(0,0);
  laser2.setVelocity(0,0);
  laser3.setVelocity(0,0);
  }
  thief.bounceOff(edges);
  
  drawSprites();
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
