PImage[] images;
float wheel;
float zpos;
float sizemod;
void setup() {
  size(1500, 1000);
  imageMode(CENTER);
  images = new PImage[441];
  wheel = 0;
  zpos = -1;
  for (int i=0; i<images.length; i++) {
    //images[i]=loadImage("expanse (" + str(i+2) + ").jpg");
  }
}

void draw() {
  background(0);
  fill(255);
  translate(width/2 - (mouseX - width/2), height/2 - (mouseY - height/2));
  rectMode(CENTER);
  rect(0, 0, 50, 50);
  for (int i = images.length - 1; i > -1; i--) {
    if (-i -1  <= zpos && -i > zpos) {
      if (images[i] == null) {
        images[i]=loadImage("expanse (" + str(i+2) + ").jpg");
        //images[i].resize(images[i].width/2, images[i].height/2);
      }
      push();
      //scale(map(zpos, -i, -i-1, 1, 0));
      scale(pow(2, zpos + i + 1));
      fill(255, 0, 0);
      //rect(0, 0, images[i].width + 50, images[i].height + 50);
      //tint(255, map(zpos, -i-1, -i - 2, 255, 0));
      image(images[i], 0, 0);
      pop();
    } else {
      images[i] = null;
    }
  }

  zpos += wheel;
  zpos = min(-1, zpos);
  wheel = wheel * (1 - (0.1*33.33/(0.1*33.33+20)));
  translate(-width/2 + 50, -height/2 -zpos*(height/images.length));
  rect(0, 0, 50, 10);
}

void mouseWheel(MouseEvent event) {
  float e = event.getCount();
  wheel -= e*.05;
  wheel = max(-.1, min(wheel, 0.1));
}
