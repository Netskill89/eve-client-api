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
    describe('GetFwWars200Ok', function() {
      beforeEach(function() {
        instance = new EveApi.GetFwWars200Ok();
      });

      it('should create an instance of GetFwWars200Ok', function() {
        // TODO: update the code to test GetFwWars200Ok
        expect(instance).to.be.a(EveApi.GetFwWars200Ok);
      });

      it('should have the property against_id (base name: "against_id")', function() {
        // TODO: update the code to test the property against_id
        expect(instance).to.have.property('against_id');
        // expect(instance.against_id).to.be(expectedValueLiteral);
      });

      it('should have the property faction_id (base name: "faction_id")', function() {
        // TODO: update the code to test the property faction_id
        expect(instance).to.have.property('faction_id');
        // expect(instance.faction_id).to.be(expectedValueLiteral);
      });

    });
  });

}));
