tree = new Tree();


for(let i = 0; i < 20; i++){
    tree.addValue(Math.floor(Math.random()*100))
}

tree.visit();