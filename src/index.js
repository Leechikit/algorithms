require('./html/index.html');
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

let set = new Set();

set.add(1)
set.add(2)
set.add(3)

let otherSet = new Set();

otherSet.add(4);
otherSet.add(5);
otherSet.add(1);
otherSet.add(2);
otherSet.add(3);

let newSet = set.difference(otherSet);

console.log(set.subset(otherSet));