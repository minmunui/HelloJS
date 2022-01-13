class Chart{
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    drawLine() {
        console.log('draw line');
    }
}

class Barchart extends Chart {      // use key word 'extends' to be inherited class
    constructor(width, height) {
        super(width, height)
    }

    draw() {
        this.drawLine();
        console.log(`draw ${this.width} X ${this.height} barChart`);
    }
}

const barChart1 = new Barchart(100, 100);
barChart1.draw();