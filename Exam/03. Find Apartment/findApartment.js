describe('findNewApartment', () =>{
    describe('isGoodLocation', ()=> {
       it('first iput is not string', () =>{
        expect(() =>findNewApartment.isGoodLocation(1, true)).to.throw(Error, 'Invalid input!');
        expect(() =>findNewApartment.isGoodLocation([], true)).to.throw(Error, 'Invalid input!');
        expect(() =>findNewApartment.isGoodLocation({}, true)).to.throw(Error, 'Invalid input!');
       })
       it('second input is not boolean', () =>{
        expect(() =>findNewApartment.isGoodLocation('Sofia', 1)).to.throw(Error, 'Invalid input!');
        expect(() =>findNewApartment.isGoodLocation('Sofia', 'a')).to.throw(Error, 'Invalid input!');
        expect(() =>findNewApartment.isGoodLocation('Sofia', [])).to.throw(Error, 'Invalid input!');
        expect(() =>findNewApartment.isGoodLocation('Sofia', {})).to.throw(Error, 'Invalid input!');
       })
        it('first input - location is not Sofia, Plovdiv or Varna', ()=>{
            expect(findNewApartment.isGoodLocation('A', true)).to.equal('This location is not suitable for you.');
            expect(findNewApartment.isGoodLocation('B', true)).to.equal('This location is not suitable for you.');            
        })
        it('second input is false', ()=>{
            expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal('There is no public transport in area.');
            expect(findNewApartment.isGoodLocation('Plovdiv', false)).to.equal('There is no public transport in area.');
            expect(findNewApartment.isGoodLocation('Varna', false)).to.equal('There is no public transport in area.');
        })
        it('happy path', () =>{
            expect(findNewApartment.isGoodLocation('Varna', true)).to.equal('You can go on home tour!');
            expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal('You can go on home tour!');
            expect(findNewApartment.isGoodLocation('Plovdiv', true)).to.equal('You can go on home tour!');
        })
    })
    describe('isLargeEnough', () =>{
        it('first input is not an array', () =>{
            expect(()=>findNewApartment.isLargeEnough(1, 45)).to.throw(Error, 'Invalid input!');
            expect(()=>findNewApartment.isLargeEnough('a', 45)).to.throw(Error, 'Invalid input!');
            expect(()=>findNewApartment.isLargeEnough({}, 45)).to.throw(Error, 'Invalid input!');           
        })
        it('first input is empty array', ()=>{
            expect(()=>findNewApartment.isLargeEnough([], 45)).to.throw(Error, 'Invalid input!');
        })
        it('second input is not a number', () =>{
            expect(()=>findNewApartment.isLargeEnough([40, 50, 60], 'a')).to.throw(Error, 'Invalid input!');
            expect(()=>findNewApartment.isLargeEnough([40, 50, 60], [])).to.throw(Error, 'Invalid input!');
            expect(()=>findNewApartment.isLargeEnough([40, 50, 60], {})).to.throw(Error, 'Invalid input!');
            expect(()=>findNewApartment.isLargeEnough([40, 50, 60], true)).to.throw(Error, 'Invalid input!');
        })
        it('chieck area', () =>{
            expect(findNewApartment.isLargeEnough([40, 50, 60], 45)).to.equal('50, 60');
            expect(findNewApartment.isLargeEnough([40, 50, 60], 35)).to.equal('40, 50, 60');            
            expect(findNewApartment.isLargeEnough([40, 50, 60], 60)).to.equal('60');
        })
    })
    describe('isItAffordable', () =>{
        it('if budget is not enough', () =>{
            expect(findNewApartment.isItAffordable(2, 1)).to.equal("You don't have enough money for this house!");
            expect(findNewApartment.isItAffordable(4, 3)).to.equal("You don't have enough money for this house!");
        })
        it('the budget is enough', ()=>{
            expect(findNewApartment.isItAffordable(1, 2)).to.equal('You can afford this home!');
            expect(findNewApartment.isItAffordable(3, 3)).to.equal('You can afford this home!');
        })
        it('first input is not a number', ()=>{
            expect(()=> findNewApartment.isItAffordable('a', 1)).to.throw('Invalid input!');
            expect(()=> findNewApartment.isItAffordable([], 1)).to.throw('Invalid input!');
            expect(()=> findNewApartment.isItAffordable({}, 1)).to.throw('Invalid input!');
        })
        it('second input is not a number', ()=>{
            expect(()=> findNewApartment.isItAffordable(1, 'a')).to.throw('Invalid input!');
            expect(()=> findNewApartment.isItAffordable(1, [])).to.throw('Invalid input!');
            expect(()=> findNewApartment.isItAffordable(1, {})).to.throw('Invalid input!');
        })
        it('inputs are 0 or negative number', ()=>{
            expect(()=> findNewApartment.isItAffordable(1, 0)).to.throw('Invalid input!');
            expect(()=> findNewApartment.isItAffordable(1, -1)).to.throw('Invalid input!');
            expect(()=> findNewApartment.isItAffordable(0, 0)).to.throw('Invalid input!');
            expect(()=> findNewApartment.isItAffordable(0, 1)).to.throw('Invalid input!');
            expect(()=> findNewApartment.isItAffordable(-1, 1)).to.throw('Invalid input!');
        })
    })
    
  })