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
    describe('GetCharactersCharacterIdContactsLabels200Ok', function() {
      beforeEach(function() {
        instance = new EveApi.GetCharactersCharacterIdContactsLabels200Ok();
      });

      it('should create an instance of GetCharactersCharacterIdContactsLabels200Ok', function() {
        // TODO: update the code to test GetCharactersCharacterIdContactsLabels200Ok
        expect(instance).to.be.a(EveApi.GetCharactersCharacterIdContactsLabels200Ok);
      });

      it('should have the property label_id (base name: "label_id")', function() {
        // TODO: update the code to test the property label_id
        expect(instance).to.have.property('label_id');
        // expect(instance.label_id).to.be(expectedValueLiteral);
      });

      it('should have the property label_name (base name: "label_name")', function() {
        // TODO: update the code to test the property label_name
        expect(instance).to.have.property('label_name');
        // expect(instance.label_name).to.be(expectedValueLiteral);
      });

    });
  });

}));
