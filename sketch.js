let wheel = 0
let zpos = -1;
let name = ''
let mainName = ""
let reverb
let images = []
let sounds = []
let autoscroll = false
let direction = -1
let names = {
  "1": "a close up of a person wearing a suit and tie",
  "6": "a group of people standing around a table",
  "10": "a living room filled with furniture and a tv",
  "15": "a bunch of umbrellas that are on a wall",
  "19": "a person riding a skate board on a ramp",
  "23": "a vase filled with flowers on top of a table",
  "27": "A person riding a skate board",
  "33": "a bird flying over a body of water",
  "38": "a vase with a bunch of flowers in it",
  "43": "a bunch of bananas hanging from a tree",
  "48": "a bird perched on top of a tree branch",
  "53": "a herd of sheep grazing on a lush green hillside",
  "58": "a bench sitting in the middle of a forest",
  "64": "a couple of people that are standing in the grass",
  "69": "a group of people standing on top of a lush green field",
  "77": "a bird that is sitting on a rock",
  "83": "a bunch of bananas sitting on a table",
  "88": "a bunch of bananas hanging from a tree",
  "95": "a group of people sitting around a table",
  "101": "a laptop computer sitting on top of a desk",
  "106": "a bunch of bananas sitting on a table",
  "111": "a group of people standing next to each other",
  "116": "a group of people sitting around a table",
  "124": "a group of people standing next to each other",
  "133": "a couple of umbrellas sitting next to each other",
  "142": "a person on a snowboard in the snow",
  "148": "a group of people on a beach with umbrellas",
  "153": "a man riding a skateboard down a street",
  "158": "a person riding a skate board at a skate park",
  "163": "a fire hydrant sitting on the side of a road",
  "168": "a group of people flying kites in a field",
  "173": "a person riding a surf board on a wave",
  "178": "a person riding a snowboard down a snow covered slope",
  "182": "a man flying through the air while riding a snowboard",
  "190": "a person jumping a skate board in the air",
  "195": "a close up of a person holding an umbrella",
  "200": "a bunch of flowers in a vase on a table",
  "205": "a bunch of flowers in a vase on a table",
  "210": "a bunch of flowers in a vase on a table",
  "215": "a person riding a skate board on a city street",
  "220": "a city street filled with lots of traffic",
  "225": "a double decker bus driving down a street",
  "231": "a city street filled with lots of traffic",
  "236": "a group of people walking down a street",
  "241": "a group of people riding skis down a snow covered slope",
  "247": "a person on a snowboard in the snow",
  "253": "a person riding a snowboard down a snow covered slope",
  "258": "a man riding skis down a snow covered slope",
  "264": "a person riding a snowboard down a snow covered slope",
  "270": "a flock of birds flying in the air",
  "277": "a person on a surfboard in the water",
  "282": "a person on a snowboard in the snow",
  "287": "a flock of birds flying in the sky",
  "292": "a close up of a pair of scissors",
  "297": "a row of motorcycles parked next to each other",
  "302": "a group of people standing around a luggage carousel",
  "307": "a bunch of bananas that are on a table",
  "312": "a cat sitting on top of a wooden bench",
  "317": "a bathroom with a toilet and a sink",
  "324": "a man flying through the air while riding a skateboard",
  "328": "a person riding a skate board on a ramp",
  "333": "a flock of birds flying over a body of water",
  "336": "a person riding a surf board on a wave",
  "340": "a group of people riding skis down a snow covered slope",
  "345": "a person riding a surf board on a wave",
  "350": "a person riding a surf board on a wave",
  "355": "a group of people flying kites in a field",
  "359": "a group of people flying kites in a field",
  "364": "a person on a snowboard in the air",
  "369": "a bunch of bananas hanging from a tree",
  "374": "a herd of sheep grazing on a lush green hillside",
  "378": "a bunch of bananas hanging from a tree",
  "383": "a bunch of umbrellas that are sitting in the sand",
  "388": "a city street filled with lots of traffic",
  "393": "a group of people walking down a street",
  "398": "a man riding skis down a snow covered slope",
  "402": "a traffic light suspended over a city street",
  "407": "a city street filled with lots of traffic",
  "412": "a city street filled with lots of traffic",
  "417": "a group of people walking down a street",
  "421": "a bird perched on top of a tree branch",
  "426": "a vase filled with flowers on top of a table",
  "431": "a bathroom with a sink and a mirror",
  "437": "a group of people riding bikes down a street",
  "444": "a close up of a plate of food on a table",
  "452": "a bunch of bananas hanging from a tree",
  "457": "a couple of men standing next to each other",
  "463": "a group of people standing next to each other",
  "469": "a group of people standing next to each other",
  "473": "a bunch of umbrellas that are on a wall",
  "478": "a group of people standing around a table",
  "482": "a group of people standing around a table",
  "487": "a bird perched on top of a tree branch",
  "492": "a person riding a surf board on a wave",
  "497": "a flock of birds flying over a body of water",
  "503": "a group of people riding skis down a snow covered slope",
  "511": "a man riding skis down a snow covered slope",
  "516": "a person on a snowboard in the snow",
  "522": "a train traveling through a rural country side",
  "527": "a person riding skis on a snowy surface",
  "532": "a group of people that are standing in the snow",
  "537": "a truck that is sitting in the snow",
  "542": "a person on a snowboard in the snow",
  "547": "a man riding skis down a snow covered slope",
  "551": "a man flying through the air while riding a snowboard",
  "556": "a bunch of bananas hanging from a tree",
  "561": "a flock of birds flying in the sky",
  "566": "a bunch of bananas hanging from a tree",
  "571": "a herd of sheep grazing on a lush green hillside",
  "576": "a person on a beach flying a kite",
  "580": "a herd of sheep grazing on a lush green hillside",
  "584": "a person riding a snowboard down a snow covered slope",
  "589": "a bird perched on top of a tree branch",
  "594": "a man standing in a kitchen preparing food",
  "599": "a group of people sitting around a table",
  "604": "a bird perched on top of a tree branch",
  "612": "a bird perched on top of a tree branch",
  "620": "a group of people standing in a kitchen",
  "625": "a large jetliner sitting on top of an airport tarmac",
  "630": "a group of people sitting around a table",
  "635": "a bunch of items that are on a table",
  "640": "a group of people standing around a train",
  "648": "a man riding a snowboard down a snow covered slope",
  "652": "a person jumping a snow board in the air",
  "657": "a person on a surfboard in the water",
  "662": "a person on a surfboard in the water",
  "665": "a vase of flowers sitting on a table"
}
let soundmap = [1, 6, 10, 15, 19, 23, 27, 33, 38, 43, 48, 53, 58, 64, 69, 77, 83, 88, 95, 101, 106, 111, 116, 124, 133, 142, 148, 153, 158, 163, 168, 173, 178, 182, 190, 195, 200, 205, 210, 215, 220, 225, 231, 236, 241, 247, 253, 258, 264, 270, 277, 282, 287, 292, 297, 302, 307, 312, 317, 324, 328, 333, 336, 340, 345, 350, 355, 359, 364, 369, 374, 378, 383, 388, 393, 398, 402, 407, 412, 417, 421, 426, 431, 437, 444, 452, 457, 463, 469, 473, 478, 482, 487, 492, 497, 503, 511, 516, 522, 527, 532, 537, 542, 547, 551, 556, 561, 566, 571, 576, 580, 584, 589, 594, 599, 604, 612, 620, 625, 630, 635, 640, 648, 652, 657, 662, 664]
let loading = true
let soundcount = 0;
let scrolled = false
let loadloop = 0

let colour // Instructions: Attach an Xbox controller and press the play button.
let controllers = []
let debug = false;
let deadzone = 0.15;
let colors = [];
let colorCount = 6;
let backgroundColorIndex = 0;
let lineColorIndex = 0;
let released = [];
let pressed = [];
let size = 10;
let deltaSize = 10;
let maxSize = 100;
let posX, posY;
let moveSpeed = 5;
let gamepad = false
//loading animation solution from Dan Schiffman https://www.youtube.com/watch?v=UWgDKtvnjIU&ab_channel=TheCodingTrain
//gamepad handling based on https://editor.p5js.org/jppoulter/sketches/xmb6DdZTg

function soundLoader(index, filename) {
  loadSound(filename, soundLoaded)

  function soundLoaded(sound) {
    sounds[index] = sound
    sounds[index].disconnect()
    reverb.process(sounds[index], 3, 2)
    soundcount++
    if (soundcount == soundmap.length) {
      loading = false
    }
  }
}

function setup() {
  background(0);
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER);

  zpos = random(-600, -100);
  reverb = new p5.Reverb();

  for (let i = 0; i < 665; i++) {
    images.push(null)
    if (soundmap.includes(i)) {
      soundLoader(i, './sounds/' + i + ".mp3")
    }
  }

  window.addEventListener("gamepadconnected", function (e) {
    gamepadHandler(e, true);
    gamepad = true
    console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
      e.gamepad.index, e.gamepad.id,
      e.gamepad.buttons.length, e.gamepad.axes.length);
  });
  window.addEventListener("gamepaddisconnected", function (e) {
    console.log("Gamepad disconnected from index %d: %s",
      e.gamepad.index, e.gamepad.id);
    colour = color(120, 0, 0);
    gamepadHandler(e, false);
  });
  for (var i = 0; i < 17; i++) {
    released[i] = true;
    pressed[i] = false;
  }
  posX = width / 2;
  posY = height / 2;
}

function draw() {
  gamePad()
  textAlign(CENTER);
  if (loading) {
    background(0);

    loadloop += 0.11
    stroke(255)
    strokeWeight(5)
    translate(width / 2, height / 2)
    fill(0)
    for (let i = 0; i < 10; i++) {
      stroke(map(pow(2, -i + loadloop), 0, 1, 0, 255))
      rect(0, 0, pow(2, -i + loadloop) * windowWidth / 2, pow(2, -i + loadloop) * windowHeight / 2)
    }
    fill(255)
    textSize(25)
    noStroke()
    text("loading...", 0, 0)
  } else {
    background(0);
    fill(255);
    push();

    translate(width / 2, height / 2);
    if (!autoscroll) {
      translate(- (mouseX - width / 2) * .75, - (mouseY - height / 2) * .75)
    }
    reverb.drywet(map(abs(wheel), 0, 0.05, 0.1, 1))
    for (let i = images.length - 1; i > -1; i--) {
      if (-i - 4 <= zpos && -i > zpos) {
        if (images[i] == null) {
          images[i] = loadImage("./images/image (" + str(i + 1) + ").jpg");
        }
        push();
        scale(pow(2, zpos + i) * 3.5 * max(windowWidth / 1167, windowHeight / 714));
        fill(255, 0, 0);
        tint(255, map(pow(2, zpos + i + 3), 1, .5, 255, 0))
        image(images[i], -1, 0);
        pop();
      } else {
        //images[i] = null;
      }
      if (sounds[i] != null) {
        if (!sounds[i].isLooping()) {
          sounds[i].loop()
        }
        sounds[i].setVolume(constrain(map(abs(-zpos - i), 0, 7, 3, 0), 0, 3));
        sounds[i].rate(constrain(map(-zpos - i, -7, 7, 1.2, 0.8), 0.01, 1.2));
      }
    }
    if (autoscroll) {
      if (zpos > -1.5) {
        direction = -1
      }
      if (zpos < -667.5) {
        direction = 1
      }
      zpos += direction * 0.004
    } else {
      zpos += wheel;
      wheel = wheel * (1 - (0.01 * 33.33 / (0.01 * 33.33 + 50)));
    }
    zpos = constrain(zpos, -668, -1);
    pop();
    noStroke();

    let tempName = names[String(Math.round(-zpos))];
    if (tempName != null) {
      mainName = tempName;
    }

    fill(255);
    if (!gamepad) {
      if (mouseY > height - 65 && mouseY < height - 35) {
        cursor(HAND);
        let size = min(15, map(Math.abs(mouseY - (height - 50)), 0, 15, 15, 5));
        circle(50 + (-zpos / images.length) * (width - 100), height - 50, size);
        rect(width / 2, height - 50, width - 100, size / 2);
        let handPos = round(map(mouseX, 50, width - 50, 1, 665));
        name = null;
        for (let i = 0; i < 10; i++) {
          let thisName = names[str(handPos - 5 + i)];
          if (thisName != null) {
            name = thisName;
            i = 10;
          }
        }

        if (name != null) {
          textSize(14);
          text(name, mouseX, height - 70);
        }
      } else {
        if (mouseY > windowHeight - 40 && mouseX > windowWidth - 100) {
          cursor(HAND);
        } else {
          noCursor();
        }

        stroke(0);
        fill(255);
        stroke(0)
        strokeWeight(1)
        fill(255, map(abs(wheel), 0, 0.05, 255, 0))
        if (!autoscroll) {
          circle(mouseX, mouseY, 10);
        }
        noStroke();
        fill(255, min(120, map(mouseY, height * 3 / 5, height, 0, 255)));
        rect(width / 2, height - 50, width - 100, 2);
      }
      fill(255, min(255, map(mouseY, height * 3 / 5, height, 0, 255)));
      textSize(28);
      if (mainName != null) {
        text(mainName, width / 2, height - 100);
      }
      textSize(20)
      textAlign(RIGHT)
      text("autoscroll", width - 10, height - 10)
    }

    textAlign(CENTER)
    textSize(28)
    if (!scrolled && !autoscroll) {
      fill(0, 100)
      rect(windowWidth / 2, windowHeight / 2, windowWidth, windowHeight)
      fill(255);
      text(gamepad ? "use connected gamepad to move" : "use the scroll wheel to move", width / 2, height / 2)
    }
    if (getAudioContext().state !== 'running') {
      fill(255);
      text("click for audio", width / 2, height / 4)
    }

    fill(255, map(zpos, -650, -668, 0, 255))
    text("The infinite stretches beyond our sight,\n" +
      "A never-ending expanse of light,\n" +
      "But even the universe must come to an end,\n" +
      "And all that was infinite will soon transcend.\n" +
      "\n" +
      "As time marches on, and the cosmos unwinds,\n" +
      "The infinite will slip away from our minds,\n" +
      "Yet in its absence, we'll find a new start,\n" +
      "For even the end can ignite a spark.\n" +
      "\n" +
      "So let us not fear the end of infinity,\n" +
      "But instead, embrace its finality,\n" +
      "For in that final moment, we'll see,\n" +
      "The birth of a new eternity.", width / 2, height / 3)

    fill(255, map(zpos, -15, -5, 0, 255))
    textAlign(RIGHT)
    text("Louis La Riccia\nlouriccia@gmail.com", width - 50, height * 7 / 8)
  }

}

function gamePad() {
  var gamepads = navigator.getGamepads();



  for (let i in controllers) {

    let controller = gamepads[i];

    if (controller.axes) {
      let axes = controller.axes;
      for (let axis = 0; axis < axes.length; axis++) {

        let val = controller.axes[axis];
        if (axis == 0) { //LX
          if (abs(val) > deadzone) {
            mouseX = mouseX * .99 + (windowWidth / 2 + val * windowWidth / 2) * .01
            gamepad = true
          } else if (gamepad) {
            mouseX = mouseX * .99 + (windowWidth / 2) * .01
          }
        }
        if (axis == 1) { //LY (inverted)
          if (abs(val) > deadzone) {
            scrolled = true
            wheel -= val * .0002;
            //wheel = constrain(wheel, -0.05, 0.05);
            gamepad = true
          }
        }
        if (axis == 2) { //RX
          if (abs(val) > deadzone) {
            mouseX = mouseX * .9 + (windowWidth / 2 + val * windowWidth / 2) * .1
            gamepad = true
          } else if (gamepad) {
            mouseX = mouseX * .9 + (windowWidth / 2) * .1
          }
        }
        if (axis == 3) { //RX
          if (abs(val) > deadzone) {
            mouseY = mouseY * .9 + (windowHeight / 2 + val * windowHeight / 2) * .1
            gamepad = true
          } else if (gamepad) {
            mouseY = mouseY * .9 + (windowHeight / 2) * .1
          }

        }
      }
    }
    if (controller.buttons) {
      for (var btn = 0; btn < controller.buttons.length; btn++) {
        let val = controller.buttons[btn];
        if (btn == 7) {
          if (buttonPressed(val, btn)) {
            wheel += val.value*.0002
          }
        }
        if (btn == 6) {
          if (buttonPressed(val, btn)) {
            wheel -= val.value*.0002
          }
        }
      }
    }
  }

}

function gamepadHandler(event, connecting) {
  let gamepad = event.gamepad;
  if (connecting) {
    print("Connecting to controller " + gamepad.index);
    controllers[gamepad.index] = gamepad;
  } else {
    delete controllers[gamepad.index];
  }
}

function buttonPressed(b, index) {
  if (typeof (b) == "object") {
    if (b.pressed) {
      pressed[index] = true;
    } else {
      pressed[index] = false;
      released[index] = true;
    }
    return pressed[index]; // binary 
  }
  return b > 0.9; // analog value
}

function mouseWheel(event) {
  let e = event.delta;
  wheel -= e * .00001;
  wheel = constrain(wheel, -0.05, 0.05);
  userStartAudio();
  scrolled = true;
}

function mouseClicked() {
  if (mouseY > height - 65 && mouseY < height - 35 && mouseX > 50 && mouseX < width - 50) {
    zpos = map(mouseX, 50, width - 50, -1, -665);
  }
  if (mouseX > width - 100 && mouseY > height - 40) {
    autoscroll = !autoscroll
    console.log("autoscroll")
  }
  userStartAudio();
}

function mouseMoved() {
  gamepad = false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}