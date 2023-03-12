import processing.sound.*;
SoundFile file;
PImage[] images;
SoundFile[] sounds;
float wheel;
float zpos;
float barheight;
StringDict names;
String name;
float textTime;
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
  images = new PImage[665];
  sounds = new SoundFile[665];
  wheel = 0;
  zpos = -1;  
 
  names = new StringDict(new String[][] {
    {"1", "The Smile"},
    {"10", "The Living Room"},
    {"19", "The Trainwreck"},
    {"27", "Driftwood Beach"},
    {"38", "Celestial Reef"},
    {"58", "The Bird Farm"},
    {"69", "The Flower Fields"},
    {"77", "Mud Mug"},
    {"88", "The Orange Table"},
    {"95", "The Market"},
    {"101", "The Bookstore"},
    {"116", "The Superstore"},
    {"133", "The Ice Cube Ranch"},
    {"142", "Glowy Glaciers"},
    {"153", "The Gutter"},
    {"168", "The Campsite"},
    {"182", "Rainbow Valley"},
    {"190", "Motorcyclecyclecycle"},
    {"210", "The Flowerbed"},
    {"220", "The Intersection"},
    {"231", "Downtown"},
    {"241", "The Harbor"},
    {"253", "Snowfort"},
    {"264", "The Nomads"},
    {"277", "The Cloud Realm"},
    {"297", "The Control Center"},
    {"312", "The Checkered Table"},
    {"317", "The Master Bedroom"},
    {"324", "The Runway"},
    {"333", "The City"},
    {"340", "The Battle"},
    {"355", "The Animals"},
    {"369", "The Flowerpatch"},
    {"383", "The Bench"},
    {"398", "The Frozen Streets"},
    {"412", "Snowed Out Main Street"},
    {"431", "The Greyscale"},
    {"444", "The Planet Portal"},
    {"452", "The Poka dot Realm"},
    {"457", "The Artist"},
    {"463", "The Expo"},
    {"469", "The Mega Mall"},
    {"482", "The Strip"},
    {"497", "The Birdbath"},
    {"503", "The Resort"},
    {"511", "The Ski Slope"},
    {"527", "The Express"},
    {"537", "The Station"},
    {"547", "The Ski Group"},
    {"556", "The Wood Trap"},
    {"571", "The Sheep"},
    {"580", "The Sepiascape"},
    {"594", "The Host"},
    {"604", "The Nest"},
    {"620", "The Experiment"},
    {"640", "The Ski Shop"},
    {"648", "The Dig Site"},
    {"662", "The Desert"},
    });
  reverb = new Reverb(this);
  delay = new Delay(this);
  lowPass = new LowPass(this);
  for (int i = 0; i < sounds.length; i++) {
    if (new File(dataPath(i + ".mp3")).exists()) {
      sounds[i] =  new SoundFile(this, i + ".mp3");
      sounds[i].loop();
      sounds[i].amp(0);
      //reverb.damp(1);
      //reverb.wet(0.5);
      //reverb.room(1);
      delay.time(0.1);
      delay.feedback(0.8);
      delay.process(sounds[i], .5);
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
      sounds[i].amp(max(0, min(map(abs(-zpos - i), 0, 8, .015, 0), .01)));
      sounds[i].rate(max(0, min(map(abs(-zpos - i), 0, 8, 1, 0.1), 1)));
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
    textTime = 250;
  }
  textTime -= 5;
  fill(255, min(200, textTime));
  textSize(44);
  text(mainName, width/2, 70);




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
      textSize(24);
      text(name, mouseX, height - 70);
    }
  } else {
    cursor(ARROW);
    fill(255, min(120, map(mouseY, height*3/5, height, 0, 255)));
    rect(width/2, height -50, width -100, 2);
  }
}

void mouseWheel(MouseEvent event) {
  float e = event.getCount();
  wheel -= e*.05;
  wheel = max(-.1, min(wheel, 0.1));
}

void mouseClicked() {
  if (mouseY > height - 65 && mouseY < height - 35 && mouseX > 50 && mouseX < width-50) {
    textTime = 0;
    zpos = map(mouseX, 50, width - 50, -1, -665);
  }
}
