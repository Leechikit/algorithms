const linkedListOddEven = require('../../../src/js/algorithms/other/linkedList-odd-even.js');
const LinkedList = require('../../../src/js/dataStructures/linkedList.js');
const expect = require('chai').expect;

describe('test linkedList', function () {
    it('linkedList', function () {
        const linkedList = new LinkedList();
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(4);
        linkedList.append(5);
        linkedList.toString();
        linkedListOddEven(linkedList);
        // linkedList.toString();

        // const linkedList2 = new LinkedList();
        // linkedList2.append(1);
        // linkedList2.append(3);
        // linkedList2.append(5);
        // linkedList2.append(2);
        // linkedList2.append(4);
        
        // expect(linkedList).to.deep.equal(linkedList2);
    });
});
