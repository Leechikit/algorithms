require('./html/index.html');
import bubbleSort from './js/algorithms/sort/bubble-sort.js';
import cocktailSort from './js/algorithms/sort/cocktail-sort.js';
import selectionSort from './js/algorithms/sort/selection-sort.js';
import insertionSort from './js/algorithms/sort/insertion-sort.js';
import quickSort from './js/algorithms/sort/quick-sort.js';
import Stack from './js/dataStructures/stack.js';
import Queue from './js/dataStructures/queue.js';
import LinkedList from './js/dataStructures/linkedList.js';
import DoublyLinkedList from './js/dataStructures/doublyLinkedList.js';

window.link = new DoublyLinkedList();
for(let i=1;i<6;i++){
	link.append(i);
}

link.insert(6,3);
link.removeAt(4);

link.toString();