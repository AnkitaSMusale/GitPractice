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
    preorder(root){
        if (root == null)
        {
            return;
        }
        console.log(root.data);
        this.preorder(root.left);
        this.preorder(root.right);
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


/*class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insertdata(data){
        let newNode = new Node(data);
        if(this.root === null){
            this.root = newNode;
        }
        else{
            this.insertNode(this.root,newNode);
        }
    }
    insertNode(node, newNode){
        if(newNode.data < node.data){
           if(node.left === null){
              node.left = newNode;
           }else{
              this.insertNode(node.left, newNode);
           };
        } else {
           if(node.right === null){
              node.right = newNode;
           }else{
              this.insertNode(node.right,newNode);
           };
        };
    };
    searching(data) {
    let currNode = this.root;
    while (currNode !== null) {
      if (currNode.data === data) {
         // Found the element!
         return true;
      } else if (data < currNode.data) {
         // Go Left as data is smaller than parent
         currNode = currNode.left;
      } else {
         // Go right as data is greater than parent
         currNode = currNode.right;
      }
   }
   return false;
}
    getrootNode(){
        console.log(this.root) ;
    }   
};

const bst = new BinarySearchTree();
bst.insertdata(15);
bst.insertdata(10);
bst.insertdata(18);
bst.insertdata(14);
bst.insertdata(16);
bst.insertdata(null);
bst.insertdata(22);
var root = bst.getrootNode();

console.log("Searching for an element :")
console.log("Search for 10 :" ,bst.searching(10));
console.log("Search for 180 :" ,bst.searching(180));
*/