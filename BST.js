//Preorder Traversal
class Node
{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
 
class BinarySearch
{
    constructor() {
        this.stack = [];
     }

    preorder(root){
        if (root == null)
        {
            return;
        }
        this.stack.push(root);
        while (this.stack.length !== 0)
        {
            let curr = this.stack.pop();
    
            console.log(curr.data);

            if (curr.right != null) {
                this.stack.push(curr.right);
            }
    
            if (curr.left != null) {
                this.stack.push(curr.left);
            }
        }
        //console.log(root.data);
        //this.preorder(root.left);
        //this.preorder(root.right);
    }
}    
 /* Construct the following tree
                   15
                 /   \
                /     \
               10       20
              / \      /   \
             /   \    /     \
            8    14  18      22
                   
        */
        const bst = new BinarySearch();
        let root = new Node(15);
        root.left = new Node(10);
        root.right = new Node(20);
        root.left.left = new Node(8);
        root.left.right = new Node(14);
        root.right.right = new Node(22);
        root.right.left = new Node(18);
        
       // root.right.left.left = new Node(7);
       // root.right.left.right = new Node(8);
 
        bst.preorder(root);


