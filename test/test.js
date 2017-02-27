var constructor = require('../constructor');
const chai = require('chai');
var expect = chai.expect;

function describeOurBands(ourBands) {
  it('should have a bands array with three bands', function () {
    expect(ourBands.length).to.eql(3);
  });
  it('should have a first band called The Beatles', function() {
    expect(ourBands[0].name).to.eql('The Beatles');
    expect(ourBands[0].genre).to.eql('Rock and Roll');
    expect(ourBands[0].numberOfPerformers).to.eql(4);
  });
  it('should have a second band called Miles Davis', function() {
    expect(ourBands[1].name).to.eql('Miles Davis');
    expect(ourBands[1].genre).to.eql('Jazz');
    expect(ourBands[1].numberOfPerformers).to.eql(1);
  });
  it('should have a first band called The Beatles', function() {
    expect(ourBands[2].name).to.eql('Dixie Chicks');
    expect(ourBands[2].genre).to.eql('Country');
    expect(ourBands[2].numberOfPerformers).to.eql(3);
  });
};

describe('Constructors', function () {
  describe('bands array', function () {
    describeOurBands(constructor.bands);
  });

  describe('Band constructor', function () {
    it('should something', function () {
      var aBand = new constructor.Band("a band", "a genre", 70);
      expect(aBand.name).to.eql("a band");
      expect(aBand.genre).to.eql("a genre");
      expect(aBand.numberOfPerformers).to.eql(70);
    });
  });

  describe('bands array with constructor', function () {
    describeOurBands(constructor.bandsWithConstructor);
  });

});
