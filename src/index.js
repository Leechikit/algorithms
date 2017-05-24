import './html/index.html';
import bubbleSort from './js/algorithms/sort/bubble-sort.js';
import cocktailSort from './js/algorithms/sort/cocktail-sort.js';
import selectionSort from './js/algorithms/sort/selection-sort.js';
import insertionSort from './js/algorithms/sort/insertion-sort.js';
import quickSort from './js/algorithms/sort/quick-sort.js';
import mergeSort from './js/algorithms/sort/merge-sort.js';
import Stack from './js/dataStructures/stack.js';
import Queue from './js/dataStructures/queue.js';
import LinkedList from './js/dataStructures/linkedList.js';
import DoublyLinkedList from './js/dataStructures/doublyLinkedList.js';
import Set from './js/dataStructures/set.js';
import BinarySearchTree from './js/dataStructures/binarySearchTree.js';

let tree = new BinarySearchTree();

tree.insert(15);
tree.insert(6);
tree.insert(18);
tree.insert(3);
tree.insert(2);
tree.insert(4);
tree.insert(7);
tree.insert(13);
tree.insert(9);
tree.insert(17);
tree.insert(20);

tree.remove(21)

tree.inOrderTraverse(function(item){
	console.log(item);
})

tree.printRoot();