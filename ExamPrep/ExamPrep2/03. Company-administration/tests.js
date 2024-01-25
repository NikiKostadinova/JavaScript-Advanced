const {expect} = require('chai');
const {companyAdministration} = require('./companyAdministration');


describe('companyAdministration', () => {

  describe('Hiring Employee', () =>{
      it('if position is not Programmer', () =>{
        expect(() =>companyAdministration.hitingEmployee('A', 'A', 1)).to.throw('We are not looking for workers for this position.');
      });
      it('experience less than 3 years', () =>{
        expect(companyAdministration.hitingEmployee('A', 'Programmer', 1)).to.equal(`A is not approved for this position.`);
      });
      it('experience more than 3 years', () =>{
        expect(companyAdministration.hitingEmployee('A', 'Programmer', 4)).to.equal('A was successfully hired for the position Programmer.');
      });
      it('experience 3 years', () =>{
        expect(companyAdministration.hitingEmployee('A', 'Programmer', 3)).to.equal('A was successfully hired for the position Programmer.');
      });
  });

  
  describe('calculateSalary', () => {
    it('input not a number', () =>{
      expect(() =>companyAdministration.calculateSalary('one')).to.throw('Invalid input');
    });
    it('input number as string', () =>{
      expect(() =>companyAdministration.calculateSalary('1')).to.throw('Invalid input');
    })
    it('input is negative number', () =>{
      expect(() =>companyAdministration.calculateSalary(-1)).to.throw('Invalid input');
    })
    it('input is array', () =>{
      expect(() =>companyAdministration.calculateSalary([])).to.throw('Invalid input');
    })
    it('less than 160', () =>{
      expect(companyAdministration.calculateSalary(150)).to.equal(150*15);
    })
    it('160 hours', () =>{
      expect(companyAdministration.calculateSalary(160)).to.equal(160*15);
    })
    it('hours more than 160', () =>{
      expect(companyAdministration.calculateSalary(161)).to.equal(161*15 + 1000);
    })
  });

  describe('firedEmployee', () => {
    it('if first input is not an array', () => {
      expect(() =>companyAdministration.firedEmployee('A', 1)).to.throw('Invalid input');
      expect(() =>companyAdministration.firedEmployee(1, 1)).to.throw('Invalid input');
    })
    it('if second input is not a number', () => {
      expect(() =>companyAdministration.firedEmployee(['A'], '0')).to.throw('Invalid input');
      expect(() =>companyAdministration.firedEmployee(['A'], 'zero')).to.throw('Invalid input');
    })
    it('if index is negative', () =>{
      expect(() =>companyAdministration.firedEmployee(['A'], -1)).to.throw('Invalid input');
    })
    it('if index is greater than array length', () =>{
      expect(() =>companyAdministration.firedEmployee(['A', 'B'], 2)).to.throw('Invalid input');
    })
    it('valid input', () =>{
      expect(companyAdministration.firedEmployee(['A', 'B', 'C'], 0)).to.equal('B, C');
      expect(companyAdministration.firedEmployee(['A', 'B', 'C'], 1)).to.equal('A, C');
      expect(companyAdministration.firedEmployee(['A', 'B', 'C'], 2)).to.equal('A, B');
    })
  })
});
