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
    describe('GetSovereigntyStructures200Ok', function() {
      beforeEach(function() {
        instance = new EveApi.GetSovereigntyStructures200Ok();
      });

      it('should create an instance of GetSovereigntyStructures200Ok', function() {
        // TODO: update the code to test GetSovereigntyStructures200Ok
        expect(instance).to.be.a(EveApi.GetSovereigntyStructures200Ok);
      });

      it('should have the property alliance_id (base name: "alliance_id")', function() {
        // TODO: update the code to test the property alliance_id
        expect(instance).to.have.property('alliance_id');
        // expect(instance.alliance_id).to.be(expectedValueLiteral);
      });

      it('should have the property solar_system_id (base name: "solar_system_id")', function() {
        // TODO: update the code to test the property solar_system_id
        expect(instance).to.have.property('solar_system_id');
        // expect(instance.solar_system_id).to.be(expectedValueLiteral);
      });

      it('should have the property structure_id (base name: "structure_id")', function() {
        // TODO: update the code to test the property structure_id
        expect(instance).to.have.property('structure_id');
        // expect(instance.structure_id).to.be(expectedValueLiteral);
      });

      it('should have the property structure_type_id (base name: "structure_type_id")', function() {
        // TODO: update the code to test the property structure_type_id
        expect(instance).to.have.property('structure_type_id');
        // expect(instance.structure_type_id).to.be(expectedValueLiteral);
      });

      it('should have the property vulnerability_occupancy_level (base name: "vulnerability_occupancy_level")', function() {
        // TODO: update the code to test the property vulnerability_occupancy_level
        expect(instance).to.have.property('vulnerability_occupancy_level');
        // expect(instance.vulnerability_occupancy_level).to.be(expectedValueLiteral);
      });

      it('should have the property vulnerable_end_time (base name: "vulnerable_end_time")', function() {
        // TODO: update the code to test the property vulnerable_end_time
        expect(instance).to.have.property('vulnerable_end_time');
        // expect(instance.vulnerable_end_time).to.be(expectedValueLiteral);
      });

      it('should have the property vulnerable_start_time (base name: "vulnerable_start_time")', function() {
        // TODO: update the code to test the property vulnerable_start_time
        expect(instance).to.have.property('vulnerable_start_time');
        // expect(instance.vulnerable_start_time).to.be(expectedValueLiteral);
      });

    });
  });

}));
