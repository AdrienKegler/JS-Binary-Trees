class Tree {

    constructor(){
        this.root = null;
    }

    addValue(val){

        let node = new Node(val, 1, width/2, 20);

        if(this.root === null){
            this.root = node;
        }
        else {
            this.root.addNode(node);
        }

        this.visit();
    }

    visit(){
        this.root.visit(this.root);
    }

    find(val){
        let valRetour = this.root.find(val);
        if (valRetour != null){
            console.log("TROUVé ! :");
            console.log(valRetour);
        }
    }

}