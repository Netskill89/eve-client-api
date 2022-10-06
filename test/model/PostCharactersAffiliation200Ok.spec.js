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
    describe('PostCharactersAffiliation200Ok', function() {
      beforeEach(function() {
        instance = new EveApi.PostCharactersAffiliation200Ok();
      });

      it('should create an instance of PostCharactersAffiliation200Ok', function() {
        // TODO: update the code to test PostCharactersAffiliation200Ok
        expect(instance).to.be.a(EveApi.PostCharactersAffiliation200Ok);
      });

      it('should have the property alliance_id (base name: "alliance_id")', function() {
        // TODO: update the code to test the property alliance_id
        expect(instance).to.have.property('alliance_id');
        // expect(instance.alliance_id).to.be(expectedValueLiteral);
      });

      it('should have the property character_id (base name: "character_id")', function() {
        // TODO: update the code to test the property character_id
        expect(instance).to.have.property('character_id');
        // expect(instance.character_id).to.be(expectedValueLiteral);
      });

      it('should have the property corporation_id (base name: "corporation_id")', function() {
        // TODO: update the code to test the property corporation_id
        expect(instance).to.have.property('corporation_id');
        // expect(instance.corporation_id).to.be(expectedValueLiteral);
      });

      it('should have the property faction_id (base name: "faction_id")', function() {
        // TODO: update the code to test the property faction_id
        expect(instance).to.have.property('faction_id');
        // expect(instance.faction_id).to.be(expectedValueLiteral);
      });

    });
  });

}));