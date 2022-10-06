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
    describe('GetCharactersCharacterIdCorporationhistory200Ok', function() {
      beforeEach(function() {
        instance = new EveApi.GetCharactersCharacterIdCorporationhistory200Ok();
      });

      it('should create an instance of GetCharactersCharacterIdCorporationhistory200Ok', function() {
        // TODO: update the code to test GetCharactersCharacterIdCorporationhistory200Ok
        expect(instance).to.be.a(EveApi.GetCharactersCharacterIdCorporationhistory200Ok);
      });

      it('should have the property corporation_id (base name: "corporation_id")', function() {
        // TODO: update the code to test the property corporation_id
        expect(instance).to.have.property('corporation_id');
        // expect(instance.corporation_id).to.be(expectedValueLiteral);
      });

      it('should have the property is_deleted (base name: "is_deleted")', function() {
        // TODO: update the code to test the property is_deleted
        expect(instance).to.have.property('is_deleted');
        // expect(instance.is_deleted).to.be(expectedValueLiteral);
      });

      it('should have the property record_id (base name: "record_id")', function() {
        // TODO: update the code to test the property record_id
        expect(instance).to.have.property('record_id');
        // expect(instance.record_id).to.be(expectedValueLiteral);
      });

      it('should have the property start_date (base name: "start_date")', function() {
        // TODO: update the code to test the property start_date
        expect(instance).to.have.property('start_date');
        // expect(instance.start_date).to.be(expectedValueLiteral);
      });

    });
  });

}));