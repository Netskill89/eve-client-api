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
    describe('PostCharactersCharacterIdMailRecipient', function() {
      beforeEach(function() {
        instance = new EveApi.PostCharactersCharacterIdMailRecipient();
      });

      it('should create an instance of PostCharactersCharacterIdMailRecipient', function() {
        // TODO: update the code to test PostCharactersCharacterIdMailRecipient
        expect(instance).to.be.a(EveApi.PostCharactersCharacterIdMailRecipient);
      });

      it('should have the property recipient_id (base name: "recipient_id")', function() {
        // TODO: update the code to test the property recipient_id
        expect(instance).to.have.property('recipient_id');
        // expect(instance.recipient_id).to.be(expectedValueLiteral);
      });

      it('should have the property recipient_type (base name: "recipient_type")', function() {
        // TODO: update the code to test the property recipient_type
        expect(instance).to.have.property('recipient_type');
        // expect(instance.recipient_type).to.be(expectedValueLiteral);
      });

    });
  });

}));
