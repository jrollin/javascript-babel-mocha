var assert = require('chai').assert

import { askAboutDrinkingByAge, canDrinkAtAge } from "../src/drinking";

describe('Majority for alcohol', function () {
  
  describe('Drinking', function () {

    it('is not allowed when age < 18', function () {
      assert.isFalse(canDrinkAtAge(12))
    });

    it('is allowed when age >= 18', function () {
      assert.isTrue(canDrinkAtAge(18))
      assert.isTrue(canDrinkAtAge(30))
    });
  });

  describe('Answer by age', function () {

    it('when age is 16', function () {
      assert.equal(askAboutDrinkingByAge(16), "You should only take a tiny sip at 16...")
    });

    it('when age is 40', function () {
      assert.equal(askAboutDrinkingByAge(40), "Of course you can drink at 40 !")
    });
  });
});