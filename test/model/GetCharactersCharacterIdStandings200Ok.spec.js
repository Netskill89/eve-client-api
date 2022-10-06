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
    describe('GetCharactersCharacterIdStandings200Ok', function() {
      beforeEach(function() {
        instance = new EveApi.GetCharactersCharacterIdStandings200Ok();
      });

      it('should create an instance of GetCharactersCharacterIdStandings200Ok', function() {
        // TODO: update the code to test GetCharactersCharacterIdStandings200Ok
        expect(instance).to.be.a(EveApi.GetCharactersCharacterIdStandings200Ok);
      });

      it('should have the property from_id (base name: "from_id")', function() {
        // TODO: update the code to test the property from_id
        expect(instance).to.have.property('from_id');
        // expect(instance.from_id).to.be(expectedValueLiteral);
      });

      it('should have the property from_type (base name: "from_type")', function() {
        // TODO: update the code to test the property from_type
        expect(instance).to.have.property('from_type');
        // expect(instance.from_type).to.be(expectedValueLiteral);
      });

      it('should have the property standing (base name: "standing")', function() {
        // TODO: update the code to test the property standing
        expect(instance).to.have.property('standing');
        // expect(instance.standing).to.be(expectedValueLiteral);
      });

    });
  });

}));
