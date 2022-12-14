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
    describe('GetCorporationsCorporationIdIconsOk', function() {
      beforeEach(function() {
        instance = new EveApi.GetCorporationsCorporationIdIconsOk();
      });

      it('should create an instance of GetCorporationsCorporationIdIconsOk', function() {
        // TODO: update the code to test GetCorporationsCorporationIdIconsOk
        expect(instance).to.be.a(EveApi.GetCorporationsCorporationIdIconsOk);
      });

      it('should have the property px128x128 (base name: "px128x128")', function() {
        // TODO: update the code to test the property px128x128
        expect(instance).to.have.property('px128x128');
        // expect(instance.px128x128).to.be(expectedValueLiteral);
      });

      it('should have the property px256x256 (base name: "px256x256")', function() {
        // TODO: update the code to test the property px256x256
        expect(instance).to.have.property('px256x256');
        // expect(instance.px256x256).to.be(expectedValueLiteral);
      });

      it('should have the property px64x64 (base name: "px64x64")', function() {
        // TODO: update the code to test the property px64x64
        expect(instance).to.have.property('px64x64');
        // expect(instance.px64x64).to.be(expectedValueLiteral);
      });

    });
  });

}));
