class Ball {
    constructor(track, radius, speed) {
        this.track = track;
        this.radius = radius;
        this.speed = speed;
        // Control ball at beginning of track
        this.offset = 0;
        this.direction = 1;
        this.center = this.track.getPosition(this.offset);
    }

    move() {
        this.offset += this.speed;
        this.center = this.track.getPosition(this.offset);
        // Changes direction of ball movement along horizontal distance of the circle
        if (this.center.y > this.track.center.y) {
            this.direction *= -1;
            playSound();
        }
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = "white";
        ctx.stroke();
    }
}