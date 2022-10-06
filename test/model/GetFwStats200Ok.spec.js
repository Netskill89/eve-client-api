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
    describe('GetFwStats200Ok', function() {
      beforeEach(function() {
        instance = new EveApi.GetFwStats200Ok();
      });

      it('should create an instance of GetFwStats200Ok', function() {
        // TODO: update the code to test GetFwStats200Ok
        expect(instance).to.be.a(EveApi.GetFwStats200Ok);
      });

      it('should have the property faction_id (base name: "faction_id")', function() {
        // TODO: update the code to test the property faction_id
        expect(instance).to.have.property('faction_id');
        // expect(instance.faction_id).to.be(expectedValueLiteral);
      });

      it('should have the property kills (base name: "kills")', function() {
        // TODO: update the code to test the property kills
        expect(instance).to.have.property('kills');
        // expect(instance.kills).to.be(expectedValueLiteral);
      });

      it('should have the property pilots (base name: "pilots")', function() {
        // TODO: update the code to test the property pilots
        expect(instance).to.have.property('pilots');
        // expect(instance.pilots).to.be(expectedValueLiteral);
      });

      it('should have the property systems_controlled (base name: "systems_controlled")', function() {
        // TODO: update the code to test the property systems_controlled
        expect(instance).to.have.property('systems_controlled');
        // expect(instance.systems_controlled).to.be(expectedValueLiteral);
      });

      it('should have the property victory_points (base name: "victory_points")', function() {
        // TODO: update the code to test the property victory_points
        expect(instance).to.have.property('victory_points');
        // expect(instance.victory_points).to.be(expectedValueLiteral);
      });

    });
  });

}));
