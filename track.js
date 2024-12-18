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
            // ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
        
        // New method by creating large amount of dots along path of circle, creates jagged circle
        for (let a = 0; a < Math.PI * 2; a += 0.01) {
            const pos = this.getPosition(a);
            ctx.lineTo(pos.x, pos.y);
        }
        ctx.closePath();

        ctx.strokeStyle = "white";
        ctx.stroke();
    }
}