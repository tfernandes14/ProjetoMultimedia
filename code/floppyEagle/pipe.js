class Pipe{
    constructor(x, y, w, h, speed) {
        // Physical properties
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.speed = speed;
    }

    // Draw call
    draw(ctx) {
        ctx.drawImage(sprites, 360, 0, 80, 80, this.x, this.y, this.w, this.h);
    }

    // Update call
    update (num) {
        // Make it move to the left with a constant speed
        this.x -= this.speed;

        // Check if the pipe is out of the screen
        if (this.x + this.w <= 0) {
            this.x = 360; // Make it jump to the right side of the screen

            // If the pipe is the top one
            if (num == 0) {
                this.h = (Math.random() * (460 - 60) + 60); // Math.random() * (max - min) + min
                console.log(this.h);
                // If the pipe is the bottom one
            } else {
                this.y = num;
                this.h= 600-num;
                console.log(this.y);
            }
        }
    }
}