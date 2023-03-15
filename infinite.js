import processing.sound.*;
SoundFile file;
PImage[] images;
SoundFile[] sounds;
float wheel;
float zpos;
float barheight;
StringDict names;
String name;
String mainName;
Delay delay;
Reverb reverb;
LowPass lowPass;

void setup() {
  size(1275, 834);
  imageMode(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER);
  frameRate(20);
//fullScreen();
  images = new PImage[665];
  sounds = new SoundFile[665];
  wheel = 0;
  zpos = random(-665, -1);

  names = new StringDict(new String[][] {
    {"1", "a close up of a person wearing a suit and tie"},
    {"6", "a group of people standing around a table"},
    {"10", "a living room filled with furniture and a tv"},
    {"15", "a bunch of umbrellas that are on a wall"},
    {"19", "a person riding a skate board on a ramp"},
    {"23", "a vase filled with flowers on top of a table"},
    {"27", "A person riding a skate board"},
    {"33", "a bird flying over a body of water"},
    {"38", "a vase with a bunch of flowers in it"},
    {"43", "a bunch of bananas hanging from a tree"},
    {"48", "a bird perched on top of a tree branch"},
    {"53", "a herd of sheep grazing on a lush green hillside"},
    {"58", "a bench sitting in the middle of a forest"},
    {"64", "a couple of people that are standing in the grass"},
    {"69", "a group of people standing on top of a lush green field"},
    {"77", "a bird that is sitting on a rock"},
    {"83", "a bunch of bananas sitting on a table"},
    {"88", "a bunch of bananas hanging from a tree"},
    {"95", "a group of people sitting around a table"},
    {"101", "a laptop computer sitting on top of a desk"},
    {"106", "a bunch of bananas sitting on a table"},
    {"111", "a group of people standing next to each other"},
    {"116", "a group of people sitting around a table"},
    {"124", "a group of people standing next to each other"},
    {"133", "a couple of umbrellas sitting next to each other"},
    {"142", "a person on a snowboard in the snow"},
    {"148", "a group of people on a beach with umbrellas"},
    {"153", "a man riding a skateboard down a street"},
    {"158", "a person riding a skate board at a skate park"},
    {"163", "a fire hydrant sitting on the side of a road"},
    {"168", "a group of people flying kites in a field"},
    {"173", "a person riding a surf board on a wave"},
    {"178", "a person riding a snowboard down a snow covered slope"},
    {"182", "a man flying through the air while riding a snowboard"},
    {"190", "a person jumping a skate board in the air"},
    {"195", "a close up of a person holding an umbrella"},
    {"200", "a bunch of flowers in a vase on a table"},
    {"205", "a bunch of flowers in a vase on a table"},
    {"210", "a bunch of flowers in a vase on a table"},
    {"215", "a person riding a skate board on a city street"},
    {"220", "a city street filled with lots of traffic"},
    {"225", "a double decker bus driving down a street"},
    {"231", "a city street filled with lots of traffic"},
    {"236", "a group of people walking down a street"},
    {"241", "a group of people riding skis down a snow covered slope"},
    {"247", "a person on a snowboard in the snow"},
    {"253", "a person riding a snowboard down a snow covered slope"},
    {"258", "a man riding skis down a snow covered slope"},
    {"264", "a person riding a snowboard down a snow covered slope"},
    {"270", "a flock of birds flying in the air"},
    {"277", "a person on a surfboard in the water"},
    {"282", "a person on a snowboard in the snow"},
    {"287", "a flock of birds flying in the sky"},
    {"292", "a close up of a pair of scissors"},
    {"297", "a row of motorcycles parked next to each other"},
    {"302", "a group of people standing around a luggage carousel"},
    {"307", "a bunch of bananas that are on a table"},
    {"312", "a cat sitting on top of a wooden bench"},
    {"317", "a bathroom with a toilet and a sink"},
    {"324", "a man flying through the air while riding a skateboard"},
    {"328", "a person riding a skate board on a ramp"},
    {"333", "a flock of birds flying over a body of water"},
    {"336", "a person riding a surf board on a wave"},
    {"340", "a group of people riding skis down a snow covered slope"},
    {"345", "a person riding a surf board on a wave"},
    {"350", "a person riding a surf board on a wave"},
    {"355", "a group of people flying kites in a field"},
    {"359", "a group of people flying kites in a field"},
    {"364", "a person on a snowboard in the air"},
    {"369", "a bunch of bananas hanging from a tree"},
    {"374", "a herd of sheep grazing on a lush green hillside"},
    {"378", "a bunch of bananas hanging from a tree"},
    {"383", "a bunch of umbrellas that are sitting in the sand"},
    {"388", "a city street filled with lots of traffic"},
    {"393", "a group of people walking down a street"},
    {"398", "a man riding skis down a snow covered slope"},
    {"402", "a traffic light suspended over a city street"},
    {"407", "a city street filled with lots of traffic"},
    {"412", "a city street filled with lots of traffic"},
    {"417", "a group of people walking down a street"},
    {"421", "a bird perched on top of a tree branch"},
    {"426", "a vase filled with flowers on top of a table"},
    {"431", "a bathroom with a sink and a mirror"},
    {"437", "a group of people riding bikes down a street"},
    {"444", "a close up of a plate of food on a table"},
    {"452", "a bunch of bananas hanging from a tree"},
    {"457", "a couple of men standing next to each other"},
    {"463", "a group of people standing next to each other"},
    {"469", "a group of people standing next to each other"},
    {"473", "a bunch of umbrellas that are on a wall"},
    {"478", "a group of people standing around a table"},
    {"482", "a group of people standing around a table"},
    {"487", "a bird perched on top of a tree branch"},
    {"492", "a person riding a surf board on a wave"},
    {"497", "a flock of birds flying over a body of water"},
    {"503", "a group of people riding skis down a snow covered slope"},
    {"511", "a man riding skis down a snow covered slope"},
    {"516", "a person on a snowboard in the snow"},
    {"522", "a train traveling through a rural country side"},
    {"527", "a person riding skis on a snowy surface"},
    {"532", "a group of people that are standing in the snow"},
    {"537", "a truck that is sitting in the snow"},
    {"542", "a person on a snowboard in the snow"},
    {"547", "a man riding skis down a snow covered slope"},
    {"551", "a man flying through the air while riding a snowboard"},
    {"556", "a bunch of bananas hanging from a tree"},
    {"561", "a flock of birds flying in the sky"},
    {"566", "a bunch of bananas hanging from a tree"},
    {"571", "a herd of sheep grazing on a lush green hillside"},
    {"576", "a person on a beach flying a kite"},
    {"580", "a herd of sheep grazing on a lush green hillside"},
    {"584", "a person riding a snowboard down a snow covered slope"},
    {"589", "a bird perched on top of a tree branch"},
    {"594", "a man standing in a kitchen preparing food"},
    {"599", "a group of people sitting around a table"},
    {"604", "a bird perched on top of a tree branch"},
    {"612", "a bird perched on top of a tree branch"},
    {"620", "a group of people standing in a kitchen"},
    {"625", "a large jetliner sitting on top of an airport tarmac"},
    {"630", "a group of people sitting around a table"},
    {"635", "a bunch of items that are on a table"},
    {"640", "a group of people standing around a train"},
    {"648", "a man riding a snowboard down a snow covered slope"},
    {"652", "a person jumping a snow board in the air"},
    {"657", "a person on a surfboard in the water"},
    {"662", "a person on a surfboard in the water"},
    {"665", "a vase of flowers sitting on a table"},
    });
  reverb = new Reverb(this);
  delay = new Delay(this);
  lowPass = new LowPass(this);
  for (int i = 0; i < sounds.length; i++) {
    if (new File(dataPath(i + ".mp3")).exists()) {
      sounds[i] =new SoundFile(this, i + ".mp3");
      sounds[i].loop();
      sounds[i].amp(0);
      //reverb.damp(1);
      //reverb.wet(0.5);
      //reverb.room(1);

      delay.feedback(0.6);
      delay.process(sounds[i], .25);
      delay.time(0.4);
      //reverb.process(sounds[i]);
    }
  }
}

void draw() {
  background(0);
  
  fill(255);
  push();
  translate(width/2 - (mouseX - width/2)*.75, height/2 - (mouseY - height/2)*.75);

  for (int i = images.length - 1; i > -1; i--) {
    if (-i -3<= zpos && -i > zpos) {
      if (images[i] == null) {
        images[i]=loadImage("image (" + str(i+1) + ").jpg");
        //images[i].resize(583, 357);
      }
      push();
      scale(pow(2, zpos + i + 2));
      fill(255, 0, 0);
      image(images[i], 0, 0);
      pop();
    } else {
      images[i] = null;
    }
    if (sounds[i] != null) {
      sounds[i].amp(max(0, min(map(abs(-zpos - i), 0, 7, .01, 0), .01)));
      //sounds[i].rate(max(0.01, min(map(abs(-zpos - i), 0, 7, 1.2, 0.8), 1)));
      sounds[i].rate(max(0.01, min(map(-zpos - i, -7, 7, 1.2, 0.8), 1.2)));
    }
  }
  zpos += wheel;
  zpos = max(min(-1, zpos), -666);
  wheel = wheel * (1 - (0.1*33.33/(0.1*33.33+20)));
  pop();
  noStroke();

  String tempName = names.get(str(round(-zpos)));
  if (tempName != null) {
    mainName = tempName;
  }

  fill(255);
  if (mouseY > height - 65 && mouseY < height - 35) {
    cursor(HAND);
    float size = min(15, map(abs(mouseY - (height - 50)), 0, 15, 15, 5));
    circle(50 + (-zpos/images.length)*(width - 100), height - 50, size);
    rect(width/2, height -50, width -100, size/2);
    int handPos = round(map(mouseX, 50, width - 50, 1, 665));
    name = null;
    for (int i = 0; i < 10; i++) {
      String thisName = names.get(str(handPos -5 + i));
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
    noCursor();
    stroke(0);
    fill(255);
    circle(mouseX, mouseY, 7);
    noStroke();
    fill(255, min(120, map(mouseY, height*3/5, height, 0, 255)));
    rect(width/2, height -50, width -100, 2);
  }
  fill(255, min(255, map(mouseY, height*3/5, height, 0, 255)));
  textSize(28);
  if (mainName != null) {
    text(mainName, width/2, height - 100);
  }
}

void mouseWheel(MouseEvent event) {
  float e = event.getCount();
  wheel -= e*.05;
  wheel = max(-.1, min(wheel, 0.1));
}

void mouseClicked() {
  if (mouseY > height - 65 && mouseY < height - 35 && mouseX > 50 && mouseX < width-50) {
    zpos = map(mouseX, 50, width - 50, -1, -665);
  }
}