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
    describe('GetCharactersCharacterIdPlanetsPlanetIdExtractorDetails', function() {
      beforeEach(function() {
        instance = new EveApi.GetCharactersCharacterIdPlanetsPlanetIdExtractorDetails();
      });

      it('should create an instance of GetCharactersCharacterIdPlanetsPlanetIdExtractorDetails', function() {
        // TODO: update the code to test GetCharactersCharacterIdPlanetsPlanetIdExtractorDetails
        expect(instance).to.be.a(EveApi.GetCharactersCharacterIdPlanetsPlanetIdExtractorDetails);
      });

      it('should have the property cycle_time (base name: "cycle_time")', function() {
        // TODO: update the code to test the property cycle_time
        expect(instance).to.have.property('cycle_time');
        // expect(instance.cycle_time).to.be(expectedValueLiteral);
      });

      it('should have the property head_radius (base name: "head_radius")', function() {
        // TODO: update the code to test the property head_radius
        expect(instance).to.have.property('head_radius');
        // expect(instance.head_radius).to.be(expectedValueLiteral);
      });

      it('should have the property heads (base name: "heads")', function() {
        // TODO: update the code to test the property heads
        expect(instance).to.have.property('heads');
        // expect(instance.heads).to.be(expectedValueLiteral);
      });

      it('should have the property product_type_id (base name: "product_type_id")', function() {
        // TODO: update the code to test the property product_type_id
        expect(instance).to.have.property('product_type_id');
        // expect(instance.product_type_id).to.be(expectedValueLiteral);
      });

      it('should have the property qty_per_cycle (base name: "qty_per_cycle")', function() {
        // TODO: update the code to test the property qty_per_cycle
        expect(instance).to.have.property('qty_per_cycle');
        // expect(instance.qty_per_cycle).to.be(expectedValueLiteral);
      });

    });
  });

}));
