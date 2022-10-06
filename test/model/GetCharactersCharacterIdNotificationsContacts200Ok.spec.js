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
    describe('GetCharactersCharacterIdNotificationsContacts200Ok', function() {
      beforeEach(function() {
        instance = new EveApi.GetCharactersCharacterIdNotificationsContacts200Ok();
      });

      it('should create an instance of GetCharactersCharacterIdNotificationsContacts200Ok', function() {
        // TODO: update the code to test GetCharactersCharacterIdNotificationsContacts200Ok
        expect(instance).to.be.a(EveApi.GetCharactersCharacterIdNotificationsContacts200Ok);
      });

      it('should have the property message (base name: "message")', function() {
        // TODO: update the code to test the property message
        expect(instance).to.have.property('message');
        // expect(instance.message).to.be(expectedValueLiteral);
      });

      it('should have the property notification_id (base name: "notification_id")', function() {
        // TODO: update the code to test the property notification_id
        expect(instance).to.have.property('notification_id');
        // expect(instance.notification_id).to.be(expectedValueLiteral);
      });

      it('should have the property send_date (base name: "send_date")', function() {
        // TODO: update the code to test the property send_date
        expect(instance).to.have.property('send_date');
        // expect(instance.send_date).to.be(expectedValueLiteral);
      });

      it('should have the property sender_character_id (base name: "sender_character_id")', function() {
        // TODO: update the code to test the property sender_character_id
        expect(instance).to.have.property('sender_character_id');
        // expect(instance.sender_character_id).to.be(expectedValueLiteral);
      });

      it('should have the property standing_level (base name: "standing_level")', function() {
        // TODO: update the code to test the property standing_level
        expect(instance).to.have.property('standing_level');
        // expect(instance.standing_level).to.be(expectedValueLiteral);
      });

    });
  });

}));