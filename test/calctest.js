const expect = require('chai').expect;

const Calc = require('../calc');

const calcInstance = new Calc();

describe('The calculator function', ()=> {

	it('can add 1 + 1', ()=>{

		expect(calcInstance.add(1,1)).to.equal(2);

	})

	it('can subtract 10 - 9', ()=>{
		expect(calcInstance.subtract(10,9)).to.equal(1);

	})


	it('can multiply', ()=>{
		expect(calcInstance.multiply(100,100)).to.equal(10000);
	})


	it('can divde', ()=> {
		expect(calcInstance.divide(100, 100)).to.equal(1);
	});


});





