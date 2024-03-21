// definição da classe Node para representar um nó da árvore
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// definição da classe BinarySearchTree para representar a árvore
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // função para inserir um valor na árvore
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  //função para buscar um valor na árvore
  search(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  // função para remover um valor da árvore
  remove(value) {
    const removeNode = (node, value) => {
      if (node === null) {
        return null;
      }
      if (value === node.value) {
        // node sem filhos
        if (node.left === null && node.right === null) {
          return null;
        }
        // node com apenas um filho
        if (node.left === null) {
          return node.right;
        }
        if (node.right === null) {
          return node.left;
        }
        // node com dois filhos
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.value = tempNode.value;
        node.right = removeNode(node.right, tempNode.value);
        return node;
      } else if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else {
        node.right = removeNode(node.right, value);
        return node;
      }
    };
    this.root = removeNode(this.root, value);
  }
}
 const bst = new BinarySearchTree();
 bst.insert(63);
 bst.insert(7);
 bst.insert(69);
 bst.insert(2);
 bst.insert(59);
 bst.insert(65);
 bst.insert(90);
 bst.insert(52);
 bst.insert(60);
 bst.insert(83);

/*
 console.log(bst.search(7)); // true
 console.log(bst.search(13)); // false

bst.remove(7);
 console.log(bst.search(7)); // false
*/

 // função para percorrer a árvore em ordem e imprimir os valores dos nós
 function printTreeInOrder(node) {
    if(node !== null) {
        printTreeInOrder(node.left);
        console.log(node.value);
        printTreeInOrder(node.right)
    }
}

// exibindo a árvore antes da remoção
console.log("Arvore antes da remoção")
printTreeInOrder(bst.root);

// removendo o nó com o valor 40 
bst.remove(90);
// exibindo a árvore após a remoção 
console.log("Arvore depois da remoção do nó 90")
printTreeInOrder(bst.root)