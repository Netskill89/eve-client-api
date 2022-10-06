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
    describe('GetCorporationsCorporationIdMedalsIssued200Ok', function() {
      beforeEach(function() {
        instance = new EveApi.GetCorporationsCorporationIdMedalsIssued200Ok();
      });

      it('should create an instance of GetCorporationsCorporationIdMedalsIssued200Ok', function() {
        // TODO: update the code to test GetCorporationsCorporationIdMedalsIssued200Ok
        expect(instance).to.be.a(EveApi.GetCorporationsCorporationIdMedalsIssued200Ok);
      });

      it('should have the property character_id (base name: "character_id")', function() {
        // TODO: update the code to test the property character_id
        expect(instance).to.have.property('character_id');
        // expect(instance.character_id).to.be(expectedValueLiteral);
      });

      it('should have the property issued_at (base name: "issued_at")', function() {
        // TODO: update the code to test the property issued_at
        expect(instance).to.have.property('issued_at');
        // expect(instance.issued_at).to.be(expectedValueLiteral);
      });

      it('should have the property issuer_id (base name: "issuer_id")', function() {
        // TODO: update the code to test the property issuer_id
        expect(instance).to.have.property('issuer_id');
        // expect(instance.issuer_id).to.be(expectedValueLiteral);
      });

      it('should have the property medal_id (base name: "medal_id")', function() {
        // TODO: update the code to test the property medal_id
        expect(instance).to.have.property('medal_id');
        // expect(instance.medal_id).to.be(expectedValueLiteral);
      });

      it('should have the property reason (base name: "reason")', function() {
        // TODO: update the code to test the property reason
        expect(instance).to.have.property('reason');
        // expect(instance.reason).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

    });
  });

}));