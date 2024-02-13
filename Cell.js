class Cell{
    state = -1;
    dom_element;
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.state = 0;
    }

    get getState(){
        return this.state;
    }

    get coordinates(){
        return [this.x, this.y];
    }

    updateState(newState) {
        this.state = newState;
    }

    setDomElement(domElement){
        this.dom_element = domElement;
    }

    getDomElement(){
        return this.dom_element;
    }

    doElementClick(){
        console.log(`Clicked cell at ${this.x}, ${this.y}`);
    }
}