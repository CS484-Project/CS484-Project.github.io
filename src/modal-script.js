
let webTable = {};

function animal(namePar, infoPar, imgPar){
    this.name = namePar;
    this.info = infoPar;
    this.img = imgPar;
    webTable[namePar] = this;
}


