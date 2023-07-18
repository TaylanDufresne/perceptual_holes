/**
 * Class containing p5 structure
 */
class Sketch {
    /**
     * Pass <div> id as container
     */
    constructor(container) {
        // P5 function
        this.sketch = function(p) {
            // Create canvas before drawing
            p.setup = function() {
                // Create canvas of 400 by 400 pixels
                let canvas = p.createCanvas(400, 400);
                canvas.parent(container);
            }
            // p5 draw called on a loop
            p.draw = function() {
                if (p.mouseIsPressed) {
                    p.fill(0);
                }
                else {
                    p.fill(255);
                }
                p.ellipse(p.mouseX, p.mouseY, 80, 80);
            }
        }
    }
    /**
     * Initiate p5 draw loop
     */
    draw() {
        new p5(this.sketch);
    }
}