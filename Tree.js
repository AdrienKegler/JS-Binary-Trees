class Tree {

    constructor(){
        this.root = null;
    }

    addValue(val){

        let node = new Node(val);

        if(this.root === null){
            this.root = node;
        }
        else {
            this.root.addNode(node);
        }
    }

    visit(){
        this.root.visit();
    }

    find(val){
        let valRetour = this.root.find(val);
        if (valRetour != null){
            console.log("TROUVé ! :");
            console.log(valRetour);
        }
    }

}