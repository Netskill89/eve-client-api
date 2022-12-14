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
    describe('PostCharactersCharacterIdFittingsCreated', function() {
      beforeEach(function() {
        instance = new EveApi.PostCharactersCharacterIdFittingsCreated();
      });

      it('should create an instance of PostCharactersCharacterIdFittingsCreated', function() {
        // TODO: update the code to test PostCharactersCharacterIdFittingsCreated
        expect(instance).to.be.a(EveApi.PostCharactersCharacterIdFittingsCreated);
      });

      it('should have the property fitting_id (base name: "fitting_id")', function() {
        // TODO: update the code to test the property fitting_id
        expect(instance).to.have.property('fitting_id');
        // expect(instance.fitting_id).to.be(expectedValueLiteral);
      });

    });
  });

}));
