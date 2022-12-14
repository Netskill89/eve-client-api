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
    describe('GetIndustryFacilities200Ok', function() {
      beforeEach(function() {
        instance = new EveApi.GetIndustryFacilities200Ok();
      });

      it('should create an instance of GetIndustryFacilities200Ok', function() {
        // TODO: update the code to test GetIndustryFacilities200Ok
        expect(instance).to.be.a(EveApi.GetIndustryFacilities200Ok);
      });

      it('should have the property facility_id (base name: "facility_id")', function() {
        // TODO: update the code to test the property facility_id
        expect(instance).to.have.property('facility_id');
        // expect(instance.facility_id).to.be(expectedValueLiteral);
      });

      it('should have the property owner_id (base name: "owner_id")', function() {
        // TODO: update the code to test the property owner_id
        expect(instance).to.have.property('owner_id');
        // expect(instance.owner_id).to.be(expectedValueLiteral);
      });

      it('should have the property region_id (base name: "region_id")', function() {
        // TODO: update the code to test the property region_id
        expect(instance).to.have.property('region_id');
        // expect(instance.region_id).to.be(expectedValueLiteral);
      });

      it('should have the property solar_system_id (base name: "solar_system_id")', function() {
        // TODO: update the code to test the property solar_system_id
        expect(instance).to.have.property('solar_system_id');
        // expect(instance.solar_system_id).to.be(expectedValueLiteral);
      });

      it('should have the property tax (base name: "tax")', function() {
        // TODO: update the code to test the property tax
        expect(instance).to.have.property('tax');
        // expect(instance.tax).to.be(expectedValueLiteral);
      });

      it('should have the property type_id (base name: "type_id")', function() {
        // TODO: update the code to test the property type_id
        expect(instance).to.have.property('type_id');
        // expect(instance.type_id).to.be(expectedValueLiteral);
      });

    });
  });

}));
