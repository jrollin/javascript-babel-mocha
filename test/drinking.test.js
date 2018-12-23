var assert = require('chai').assert

import { askAboutDrinkingByAge, canDrinkAtAge } from "../src/drinking";

describe('Drinking', function () {
  
  describe('#canDrinkAtAge()', function () {

    it('is not allowed when age < 18', function () {
      assert.isFalse(canDrinkAtAge(12))
    });

    it('is allowed when age >= 18', function () {
      assert.isTrue(canDrinkAtAge(18))
      assert.isTrue(canDrinkAtAge(30))
    });
  });

  describe('#askAboutDrinkingByAge()', function () {

    it('when age < 18', function () {
      assert.equal(askAboutDrinkingByAge(3), "You should only take a tiny sip at 3...")
    });

    it('when age >= 18', function () {
      assert.equal(askAboutDrinkingByAge(40), "Of course you can drink at 40 !")
    });
  });
});