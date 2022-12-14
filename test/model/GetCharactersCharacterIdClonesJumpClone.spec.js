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
    describe('GetCharactersCharacterIdClonesJumpClone', function() {
      beforeEach(function() {
        instance = new EveApi.GetCharactersCharacterIdClonesJumpClone();
      });

      it('should create an instance of GetCharactersCharacterIdClonesJumpClone', function() {
        // TODO: update the code to test GetCharactersCharacterIdClonesJumpClone
        expect(instance).to.be.a(EveApi.GetCharactersCharacterIdClonesJumpClone);
      });

      it('should have the property implants (base name: "implants")', function() {
        // TODO: update the code to test the property implants
        expect(instance).to.have.property('implants');
        // expect(instance.implants).to.be(expectedValueLiteral);
      });

      it('should have the property jump_clone_id (base name: "jump_clone_id")', function() {
        // TODO: update the code to test the property jump_clone_id
        expect(instance).to.have.property('jump_clone_id');
        // expect(instance.jump_clone_id).to.be(expectedValueLiteral);
      });

      it('should have the property location_id (base name: "location_id")', function() {
        // TODO: update the code to test the property location_id
        expect(instance).to.have.property('location_id');
        // expect(instance.location_id).to.be(expectedValueLiteral);
      });

      it('should have the property location_type (base name: "location_type")', function() {
        // TODO: update the code to test the property location_type
        expect(instance).to.have.property('location_type');
        // expect(instance.location_type).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

    });
  });

}));
