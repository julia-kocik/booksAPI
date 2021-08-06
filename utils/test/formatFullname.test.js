const formatFullname = require('../formatFullname');
const expect = require('chai').expect;


describe('Format Fullname', () => {

    it('should return an error if "fullname" arg length is 0', () => {
        expect(formatFullname('')).to.equal('Error');
    });
    
    it('should return an error if "fullname" arg is not a string', () => {
        expect(formatFullname(undefined)).to.equal('Error');
        expect(formatFullname(12)).to.equal('Error');
        expect(formatFullname({})).to.equal('Error');
        expect(formatFullname([])).to.equal('Error');
        expect(formatFullname(function() {})).to.equal('Error');
    });

    it('should make sure that length of fullName.split equals to 2', () => {
        expect(formatFullname('John Amanda Doe')).to.equal('Error');
        expect(formatFullname('John')).to.equal('Error');
    });

    it('should return string in the right format', () => {
        expect(formatFullname('john doe')).to.equal('John Doe');
        expect(formatFullname('jOHN dOE')).to.equal('John Doe');
        expect(formatFullname('jOhN DOe')).to.equal('John Doe');
    });
});

//fullName.split(' ').length === 2