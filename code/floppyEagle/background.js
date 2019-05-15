class Background{
	constructor(x, y, w, h, speed) {
	    this.x = x;
	    this.y = y;
	    this.w = w;
	    this.h = h;
	    this.speed = speed;
	}

// Draw call
	draw (ctx) {
    	ctx.drawImage(sprites, 0, 0, 360, 600, this.x, this.y, this.w, this.h);
	}

// Update call
	update () {
	    // Make it move to left with a constant speed
	    this.x -= this.speed;

	    // If it gets out from the screen, make it jump to the starting position so it seamlessy keeps scrolling endlessly
	    if (this.x <= -360) {
	        this.x = 360;
	    }
	}
}