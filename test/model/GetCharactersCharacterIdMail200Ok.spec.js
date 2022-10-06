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
    describe('GetCharactersCharacterIdMail200Ok', function() {
      beforeEach(function() {
        instance = new EveApi.GetCharactersCharacterIdMail200Ok();
      });

      it('should create an instance of GetCharactersCharacterIdMail200Ok', function() {
        // TODO: update the code to test GetCharactersCharacterIdMail200Ok
        expect(instance).to.be.a(EveApi.GetCharactersCharacterIdMail200Ok);
      });

      it('should have the property from (base name: "from")', function() {
        // TODO: update the code to test the property from
        expect(instance).to.have.property('from');
        // expect(instance.from).to.be(expectedValueLiteral);
      });

      it('should have the property is_read (base name: "is_read")', function() {
        // TODO: update the code to test the property is_read
        expect(instance).to.have.property('is_read');
        // expect(instance.is_read).to.be(expectedValueLiteral);
      });

      it('should have the property labels (base name: "labels")', function() {
        // TODO: update the code to test the property labels
        expect(instance).to.have.property('labels');
        // expect(instance.labels).to.be(expectedValueLiteral);
      });

      it('should have the property mail_id (base name: "mail_id")', function() {
        // TODO: update the code to test the property mail_id
        expect(instance).to.have.property('mail_id');
        // expect(instance.mail_id).to.be(expectedValueLiteral);
      });

      it('should have the property recipients (base name: "recipients")', function() {
        // TODO: update the code to test the property recipients
        expect(instance).to.have.property('recipients');
        // expect(instance.recipients).to.be(expectedValueLiteral);
      });

      it('should have the property subject (base name: "subject")', function() {
        // TODO: update the code to test the property subject
        expect(instance).to.have.property('subject');
        // expect(instance.subject).to.be(expectedValueLiteral);
      });

      it('should have the property timestamp (base name: "timestamp")', function() {
        // TODO: update the code to test the property timestamp
        expect(instance).to.have.property('timestamp');
        // expect(instance.timestamp).to.be(expectedValueLiteral);
      });

    });
  });

}));
