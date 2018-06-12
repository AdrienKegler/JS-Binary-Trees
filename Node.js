class Node{

    constructor(val, layer, x, y) {
        this.value = val;
        this.left = null;
        this.right = null;
        this.x = x;
        this.y = y;
        this.layer = layer;
    }

    addNode(node) {

        if (this.value > node.value) {
            if (this.left === null) {
                this.left = node;
                this.left.layer = this.layer + 1;
                this.left.x = this.x - width / Math.pow(2, this.layer + 1);
                this.left.y = this.layer * 50;
            }
            else {
                this.left.addNode(node);
            }

        }
        else if (this.value < node.value) {
            if (this.right === null) {
                this.right = node;
                this.right.layer = this.layer + 1;
                this.right.x = this.x + width / Math.pow(2, this.layer + 1);
                this.right.y = this.layer * 50;
            }
            else {
                this.right.addNode(node);
            }

        }
    }


    visit(parent){
        if(this.left !== null){
            this.left.visit(this);
        }
        line(parent.x, parent.y, this.x, this.y);

        fill(255);
        noStroke();
        textAlign(CENTER);
        text(this.value, this.x, this.y);
        noFill();
        stroke(255);
        ellipse(this.x, this.y, 30, 30);

        console.log(this.value);



        if(this.right !== null){
            this.right.visit(this);
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