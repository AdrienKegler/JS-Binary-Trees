class Node {

    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }

    addNode(node) {

        if (this.value > node.value) {
            if (this.left === null) {
                this.left = node;
            }
            else {
                this.left.addNode(node);
            }

        }
        else if (this.value < node.value) {
            if (this.right === null) {
                this.right = node;
            }
            else {
                this.right.addNode(node);
            }

        }
    }


    visit(){
        if(this.left !== null){
            this.left.visit();
        }

        console.log(this.value);

        if(this.right !== null){
            this.right.visit();
        }
    }


    find(val){
        if (this.value === val){
            return this;
        }
        else if(this.value > val){
            return this.left.find(val);
        }
        else if(this.value < val){
            return this.right.find(val);
        }
        return null;
    }

}