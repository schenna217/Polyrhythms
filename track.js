class Track {
    constructor(center, radius) {
        this.center = center;
        this.radius = radius;
    }


    getPosition(offset) {
        return {
            x: this.center.x + Math.cos(offset) * this.radius,
            y: this.center.y - Math.sin(offset) * this.radius
        }
    }

    draw(ctx) {
        ctx.beginPath();
        // x-coordinate, y-coordintate, radius, 0 for beginning angle, pi * 2 for the end angle to form full circle
        ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = "white";
        ctx.stroke();
    }
}