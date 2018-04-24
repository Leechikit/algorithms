const quickSort = require('../../../src/js/algorithms/sort/quick-sort.js');
const expect = require('chai').expect;

describe('test quick-sort', function () {
    it('quick sort', function () {
        const arr = [6,3,4,1,7,8,5];
        expect(quickSort(arr)).to.deep.equal([1, 3, 4, 5, 6, 7, 8]);
    });
});
