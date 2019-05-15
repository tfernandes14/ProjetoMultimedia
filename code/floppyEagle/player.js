// Function constructor - It creates a template that you can create objects from.
class Bird{
    constructor(x, y, w, h) {
        // Physical properties
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.fallSpeed = 0;
        this.ySpeed = 0;

        // Flag variable that will make sure the player is not scoring many times at once
        this.scored = false;
    }

    // Methods of the object

    // Draw method
    draw(ctx) {
        // The image will be cropped from y = 80 and y = 150 giving us a nice two frame animation
        ctx.drawImage(bird, this.x, this.y, this.w, this.h);
    }

    // Update method - Logic and objects physics will be handled here
    update(jogo) {
        // Handle the gravity
        this.fallSpeed += 0.1; // This speed grows every time this function is called
        this.y += this.fallSpeed + this.ySpeed; // Gravity effect is achieved!

        // Check if the player dies first

        // Basic AABB Collision
        // Check if the player touches a pipe on the x axis first
        if (this.x + this.w >= jogo.pipeTop.x && this.x <= jogo.pipeTop.x + jogo.pipeTop.w) {
            // Then check if it touches any of the pipes on the y axis
            if (this.y + this.h >= jogo.pipeBottom.y || this.y <= jogo.pipeTop.y + jogo.pipeTop.h) {
                jogo.isGameOver = true;
            } else if (this.x >= jogo.pipeTop.x + jogo.pipeTop.w){
                if (!this.scored) {
                    jogo.score++;
                    this.scored = true;
                }
            }
        }     


        // Die when hit the ground
        if (this.y >= 600) {
            jogo.isGameOver = true;
        }

        // Player can score again now that the pipe is resetted itself
        if (jogo.pipeTop.x >= 360) {
            this.scored = false;
        }
    }

    // Reset the gravity and move the player up to give the jumping effect
    moveUp(speed) {
        this.fallSpeed = 0;
        this.ySpeed = -speed;
    }
}