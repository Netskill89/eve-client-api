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
    describe('GetCorporationsCorporationIdMembersTitles200Ok', function() {
      beforeEach(function() {
        instance = new EveApi.GetCorporationsCorporationIdMembersTitles200Ok();
      });

      it('should create an instance of GetCorporationsCorporationIdMembersTitles200Ok', function() {
        // TODO: update the code to test GetCorporationsCorporationIdMembersTitles200Ok
        expect(instance).to.be.a(EveApi.GetCorporationsCorporationIdMembersTitles200Ok);
      });

      it('should have the property character_id (base name: "character_id")', function() {
        // TODO: update the code to test the property character_id
        expect(instance).to.have.property('character_id');
        // expect(instance.character_id).to.be(expectedValueLiteral);
      });

      it('should have the property titles (base name: "titles")', function() {
        // TODO: update the code to test the property titles
        expect(instance).to.have.property('titles');
        // expect(instance.titles).to.be(expectedValueLiteral);
      });

    });
  });

}));