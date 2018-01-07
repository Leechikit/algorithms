const boyerMoore = require('../../../src/js/algorithms/match/boyer-moore.js');
const expect = require('chai').expect;

describe('test boyer-moore', function () {
    it('match single pattern', function () {
        const content = 'here is a simple example';
        const query = 'example';
        expect(boyerMoore(content, query)).to.deep.equal([17]);
    });
    
    it('not match pattern', function () {
        const content = 'here is a simple example';
        const query = 'example1';
        expect(boyerMoore(content, query)).to.deep.equal(-1);
    });
    
    it('match multiple pattern', function () {
        const content = 'examplehere is a simple example 234 example';
        const query = 'example';
        expect(boyerMoore(content, query)).to.deep.equal([0, 24, 36]);
    });
});
