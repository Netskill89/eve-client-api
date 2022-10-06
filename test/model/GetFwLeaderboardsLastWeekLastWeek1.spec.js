/*
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 1.12
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.28
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EveApi);
  }
}(this, function(expect, EveApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('GetFwLeaderboardsLastWeekLastWeek1', function() {
      beforeEach(function() {
        instance = new EveApi.GetFwLeaderboardsLastWeekLastWeek1();
      });

      it('should create an instance of GetFwLeaderboardsLastWeekLastWeek1', function() {
        // TODO: update the code to test GetFwLeaderboardsLastWeekLastWeek1
        expect(instance).to.be.a(EveApi.GetFwLeaderboardsLastWeekLastWeek1);
      });

      it('should have the property amount (base name: "amount")', function() {
        // TODO: update the code to test the property amount
        expect(instance).to.have.property('amount');
        // expect(instance.amount).to.be(expectedValueLiteral);
      });

      it('should have the property faction_id (base name: "faction_id")', function() {
        // TODO: update the code to test the property faction_id
        expect(instance).to.have.property('faction_id');
        // expect(instance.faction_id).to.be(expectedValueLiteral);
      });

    });
  });

}));
