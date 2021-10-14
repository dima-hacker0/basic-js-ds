const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
//module.exports = class BinarySearchTree
module.exports = class BinarySearchTree {
  constructor() {
    this.rootNode = null; 
    
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    let newNode = new Node(data);
    if(this.rootNode == null){
      this.rootNode = newNode;
      return;
    } 
    let currentNode = this.rootNode;
    while(currentNode) {
      
      if(newNode.data > currentNode.data) {
        if(!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        else {
          currentNode = currentNode.right;
        }
      }
      else {
        if(!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        else {
          currentNode = currentNode.left;
        }
      }
    }
  }

  has(data) {
    if(!this.rootNode) {
      return false;
    }
    let currentNode = this.rootNode;
    while(currentNode) {
      if(currentNode.data == data) return true;

      if(data > currentNode.data) {
        if(!currentNode.right) return false;
        currentNode = currentNode.right;
      }
      else {
        if(!currentNode.left) return false;
        currentNode = currentNode.left;
      }
    }
  }

  find(data) {
    if(!this.rootNode) {
      return null;
    }
    let currentNode = this.rootNode;
    while(currentNode) {
      if(currentNode.data == data) return currentNode;

      if(data > currentNode.data) {
        if(!currentNode.right) return null;
        currentNode = currentNode.right;
      }
      else {
        if(!currentNode.left) return null;
        currentNode = currentNode.left;
      }
    }
  }

  remove(data) {
    let leftOrRight;
    if(!this.rootNode) {
      return;
    }
    let currentNode = this.rootNode;
    let parentNode;
    while(currentNode) {
      if(currentNode.data == data) {
        if(currentNode.left == null && currentNode.right == null && data == this.rootNode.data){
           this.rootNode = null;
           return;
        }
        if(currentNode.left == null && currentNode.right == null) {
          if(leftOrRight == 1) {
            parentNode.right = null;
            return;
          }
          else {
            parentNode.left = null;
            return;
          }
        }
            
        if(currentNode.left == null && currentNode.right) {
          if(leftOrRight == 0) {
            parentNode.left = currentNode.right;
            return;
          }
          else {
            parentNode.right = currentNode.right;
            return;
          }

        }
        if(currentNode.left && currentNode.right == null) {
          if(leftOrRight == 0) {
            parentNode.left = currentNode.left;
            return;
          }
          else {
            parentNode.right = currentNode.left;
            return;
          }
        }
        if(data == this.rootNode.data) {
          let rootMin = this.rootNode;
          rootMin = rootMin.left;
          if(rootMin.right == null) {
            rootMin.right = this.rootNode.right;
            this.rootNode = rootMin;
            return;
          }
          let rootMinParent;
          while(rootMin.right != null) {
            if(rootMin.right.right == null && rootMin.right != null) rootMinParent = rootMin;
            rootMin = rootMin.right;
          }
          rootMinParent.right = null;
          rootMin.left = this.rootNode.left;
          rootMin.right = this.rootNode.right;
          this.rootNode = rootMin;
          return;
        }




        let parentMinLeftElem;
        let minLeftElem = currentNode.left;
        if(!minLeftElem.right) {
          if(leftOrRight == 1) {
            parentNode.right = minLeftElem;
            minLeftElem.right = currentNode.right;
            return;
          }
          else {
            parentNode.left = minLeftElem;
            minLeftElem.right = currentNode.right;
            return;
          }
        }
          if(leftOrRight == 0) {
          while(minLeftElem.right != null) {
            if(minLeftElem.right.right == null && minLeftElem.right != null) parentMinLeftElem = minLeftElem;
            minLeftElem = minLeftElem.right;
          }
          parentNode.left = minLeftElem;
          parentMinLeftElem.right = null;
          minLeftElem.left = currentNode.left;
          minLeftElem.right = currentNode.right;
          return;
         }
         else {
            while(minLeftElem.right != null) {
              if(minLeftElem.right.right == null && minLeftElem.right != null) parentMinLeftElem = minLeftElem;
              minLeftElem = minLeftElem.right;
            }
            parentNode.right = minLeftElem;
            parentMinLeftElem.right = null;
            minLeftElem.left = currentNode.left;
            minLeftElem.right = currentNode.right;
            return;
         }
      }

      if(data > currentNode.data) {
        if(!currentNode.right) return;
        if(currentNode.right.data == data) {
          parentNode = currentNode;
          leftOrRight = 1;
        }
        currentNode = currentNode.right;
      }
      else {
        if(!currentNode.left) return;
        if(currentNode.left.data == data) {
          parentNode = currentNode;
          leftOrRight = 0;
        }
        currentNode = currentNode.left;
      }
    }
    
  }

  min() {
    if(!this.rootNode) return null;
    let currentNode = this.rootNode;
    while(currentNode.left != null) currentNode = currentNode.left;
    return currentNode.data;
  }

  max() {
    if(!this.rootNode) return null;
    let currentNode = this.rootNode;
    while(currentNode.right != null) currentNode = currentNode.right;
    return currentNode.data;
  }

}
// const tree = new BinarySearchTree();
// tree.add(10);
// tree.add(20);
// tree.add(5);
// tree.add(7);

// tree.remove(5);
