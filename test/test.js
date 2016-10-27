// var express = require('express');
// var app = require('../server');

// var db = require('../server/db');

angular.module('testing', []);

angular.module('testing')
  .factory('Person', function () {
    return function Person (name) {
      this.name = name;
    };
  });

///////////////////////////////////////////////////
//ASTONISHING OWLS. WE'RE ASTONISHING. WE'RE OWLS.
///////////////////////////////////////////////////
//ALL TESTS WRITTEN BELOW
///////////////////////////////////////////////////
//ASTONISHING OWLS. WE'RE ASTONISHING. WE'RE OWLS.
///////////////////////////////////////////////////

describe('Person', function () {

  var Person;
  beforeEach(module('testing'));
  beforeEach(inject(function (_Person_) {
    Person = _Person_;
  }));

  describe('Constructor', function () {

    it('assigns a name', function () {
      expect(new Person('Ben')).to.have.property('name', 'Ben');
    });

  });

});