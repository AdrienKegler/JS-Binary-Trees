var tree = new Tree();

function setup(){
    createCanvas(window.innerWidth-15, window.innerHeight-20);
    background(51);
    for(let i = 0; i < 100; i++){
        tree.addValue(Math.floor(Math.random()*100))
    }

    tree.visit();
}
